const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_EDGE = 1600;
const JPEG_QUALITY = 0.85;

async function decodeToBitmap(file: File): Promise<ImageBitmap | HTMLImageElement> {
  try {
    return await createImageBitmap(file);
  } catch {
    // Fallback decode path (some Safari versions)
    const url = URL.createObjectURL(file);
    try {
      const img = new Image();
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("decode failed"));
        img.src = url;
      });
      return img;
    } finally {
      URL.revokeObjectURL(url);
    }
  }
}

/**
 * Downscale + re-encode a photo to JPEG (~1600px longest edge) so uploads are
 * fast from phones. Falls back to the original file when decoding fails but
 * the format is already server-supported.
 */
export async function prepareImageForUpload(file: File): Promise<File> {
  let source: ImageBitmap | HTMLImageElement;
  try {
    source = await decodeToBitmap(file);
  } catch {
    if (ALLOWED_TYPES.has(file.type)) return file;
    throw new Error(
      `Couldn't read "${file.name}". Please use a JPEG, PNG, or WebP photo.`,
    );
  }

  const width = "naturalWidth" in source ? source.naturalWidth : source.width;
  const height = "naturalHeight" in source ? source.naturalHeight : source.height;
  const scale = Math.min(1, MAX_EDGE / Math.max(width, height));
  const targetW = Math.max(1, Math.round(width * scale));
  const targetH = Math.max(1, Math.round(height * scale));

  const canvas = document.createElement("canvas");
  canvas.width = targetW;
  canvas.height = targetH;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    if (ALLOWED_TYPES.has(file.type)) return file;
    throw new Error("This browser can't process the photo. Try a JPEG/PNG image.");
  }
  ctx.drawImage(source, 0, 0, targetW, targetH);
  if ("close" in source) source.close();

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", JPEG_QUALITY),
  );
  if (!blob) {
    if (ALLOWED_TYPES.has(file.type)) return file;
    throw new Error("Photo processing failed. Try a JPEG/PNG image.");
  }

  const name = file.name.replace(/\.[^.]+$/, "") + ".jpg";
  return new File([blob], name, { type: "image/jpeg" });
}

import {readFileSync} from 'node:fs';
const {profiles}=JSON.parse(readFileSync(new URL('../data/care-profiles.json',import.meta.url)));
for(const profile of profiles) console.log(profile.id+'  '+profile.title);

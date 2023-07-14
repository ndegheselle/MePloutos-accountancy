import { BaseRepoSync } from '@base/db/BaseRepo';

export const projectsRepo = new BaseRepoSync("projects");
export class Project
{
    constructor(_name)
    {
        this.name = _name || "";
    }
}
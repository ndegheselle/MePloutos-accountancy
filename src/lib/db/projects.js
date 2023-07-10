import { BaseRepo } from '@lib/base/db/BaseRepo';

export const projectsRepo = new BaseRepo("projects");
export class Project
{
    constructor(_name)
    {
        this.name = _name || "";
    }
}
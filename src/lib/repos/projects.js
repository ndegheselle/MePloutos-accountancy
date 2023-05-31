import { db } from '@lib/base/indexDB.js';

export function createProject(_project)
{
    return db.projects.add(_project);
}

export function removeProject(_projectId)
{
    return db.projects.delete(_projectId);
}
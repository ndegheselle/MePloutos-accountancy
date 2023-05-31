import { createProject, removeProject } from "../repos/projects";

function save(_project)
{
    return createProject(_project);
}

function remove(_projectId)
{
    removeProject(_projectId);
}

export default {
	save, 
	remove
}
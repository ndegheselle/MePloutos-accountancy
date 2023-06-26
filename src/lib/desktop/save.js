import { isDesktop} from '@lib/helpers.js';

function saveImportedFile(file)
{
    if (!isDesktop()) {
        return console.warn(`You can't use "saveImportedFile" on web.`);
    }
}

export default {
    saveImportedFile,
}
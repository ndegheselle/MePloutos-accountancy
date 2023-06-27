import { isDesktop} from '@lib/helpers.js';

import { writeTextFile, exists, createDir, BaseDirectory } from '@tauri-apps/api/fs';

async function saveImportedFile(file)
{
    if (!isDesktop()) {
        return console.warn(`You can't use "saveImportedFile" on web.`);
    }

    try {
        if (!await exists(`imported`, {dir: BaseDirectory.AppData}))
            await createDir('imported', { dir: BaseDirectory.AppData, recursive: true });

        await writeTextFile(`imported/${file.name}`, await file.text(), {
            dir: BaseDirectory.AppData
        });
    }
    catch(e) {
        console.error(e);
    }
}

export default {
    saveImportedFile,
}
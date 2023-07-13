import { isDesktop } from './helpers.js';

import { uuidv4 } from '@base/helpers.js'
import { writeTextFile, exists, createDir, BaseDirectory } from '@tauri-apps/api/fs';

async function saveImportedFile(transactions) {
    if (!isDesktop()) {
        return console.warn(`You can't use "saveImportedFile" on web.`);
    }

    try {
        if (!await exists(`imported`, { dir: BaseDirectory.AppData }))
            await createDir('imported', { dir: BaseDirectory.AppData, recursive: true });

        const name = `{${bank}_${new Date().toISOString.split('T')[0]}_${uuidv4()}.json`;
        await writeTextFile(`imported/${name}`, JSON.stringify(transactions), {
            dir: BaseDirectory.AppData
        });
    }
    catch (e) {
        console.error(e);
    }
}

export default {
    saveImportedFile,
}
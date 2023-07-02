import { isDesktop} from '@lib/helpers.js';
import { uuidv4 } from '@lib/helpers.js'
import { writeTextFile, exists, createDir, BaseDirectory } from '@tauri-apps/api/fs';

async function saveImportedFile(file, bank)
{
    if (!isDesktop()) {
        return console.warn(`You can't use "saveImportedFile" on web.`);
    }

    try {
        if (!await exists(`imported`, {dir: BaseDirectory.AppData}))
            await createDir('imported', { dir: BaseDirectory.AppData, recursive: true });

        const name = `{${bank}_${new Date().toISOString.split('T')[0]}_${uuidv4()}`;
        await writeTextFile(`imported/${name}`, await file.text(), {
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
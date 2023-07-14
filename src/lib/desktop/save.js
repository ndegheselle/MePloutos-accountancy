import { isDesktop } from './helpers.js';

import { tauri } from '@tauri-apps/api';
import { appConfigDir } from '@tauri-apps/api/path';

import { uuidv4 } from '@base/helpers.js'
import { writeTextFile, exists, createDir, BaseDirectory } from '@tauri-apps/api/fs';

async function saveImportedTransactions(transactions) {
    if (!isDesktop()) {
        return console.warn(`You can't use "saveImportedFile" on web.`);
    }

    try {
        if (!await exists(`imported`, { dir: BaseDirectory.AppData }))
            await createDir('imported', { dir: BaseDirectory.AppData, recursive: true });

        const name = `imported-${new Date().toISOString().split('T')[0]}_${uuidv4()}.json`;
        await writeTextFile(`imported/${name}`, JSON.stringify(transactions), {
            dir: BaseDirectory.AppConfig
        });
    }
    catch (e) {
        console.error(e);
    }
}

async function saveDatabase(databaseExport)
{
    await writeTextFile(`data.json`, databaseExport, {
        dir: BaseDirectory.AppConfig
    });
}

async function openAppDataDir() {
    await tauri.invoke('show_in_folder', {path: await appConfigDir()});
}

export default {
    saveImportedTransactions,
    saveDatabase,
    openAppDataDir
}
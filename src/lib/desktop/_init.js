import { TauriEvent, listen } from '@tauri-apps/api/event';
export default function init()
{
    listen(TauriEvent.WINDOW_CLOSE_REQUESTED, async (event) => {
        console.log("pouet????");
        await new Promise(r => setTimeout(r, 10000));
        alert("Closing window and maybe saving some data :)")
    });
}
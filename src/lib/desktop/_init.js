import { TauriEvent, listen } from '@tauri-apps/api/event';
export default function init()
{
    // BUG : Sadly this is not working
    listen(TauriEvent.WINDOW_CLOSE_REQUESTED, async (event) => {
        alert("Closing window and maybe saving some data :)");
    });
}
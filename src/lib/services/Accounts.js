import { saveToFiles } from "./save";
import { accounts } from "../store"

function save(_account)
{
    saveToFiles();
    // TODO : save in file
    accounts.update(_accounts => {
        _accounts.push(_account);
        return _accounts;
    })
}

export default {
    save
}
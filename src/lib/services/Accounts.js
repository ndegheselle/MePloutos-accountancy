import { accounts } from "../store"

function save(_account)
{
    // TODO : update database
    accounts.update(_accounts => {
        _accounts.push(_account);
        return _accounts;
    })
}

export default {
    save
}
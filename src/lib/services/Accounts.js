import { accounts } from "../store"
import { uuidv4 } from "../helpers";
function save(_account)
{
    _account.id = uuidv4();

    // TODO : save in file
    accounts.update(_accounts => {
        _accounts.push(_account);
        return _accounts;
    })
}

export class Account
{
    constructor()
    {
        this.id = uuidv4();
        this.name = "";
        this.balance = 0;
        this.color = "#DDD";
    }
}

export default {
    save
}
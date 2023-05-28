import db from '../base/indexDB.js';

function updateBalance(_accountId, _balance)
{
    return db.accounts.update(_accountId, { balance: _balance });
}

export default {
    updateBalance
}
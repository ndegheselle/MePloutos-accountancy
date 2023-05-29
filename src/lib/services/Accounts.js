function save(_account)
{
    /*
    // TODO : update database
    accounts.update(_accounts => {
        _accounts.push(_account);
        return _accounts;
    })*/
}

function updateAccountTransactions(_account, _transactions)
{
    let catTmpMap = new Map();
    catTmpMap.set(null, 0);
    _account.recap = {
        positiveTotal: 0,
        negativeTotal: 0,
        total: 0,
    };

    for (let transaction of _transactions)
    {
        if (!catTmpMap.has(transaction.categoryId)) catTmpMap.set(transaction.categoryId, 0);
        catTmpMap.set(transaction.categoryId, catTmpMap.get(transaction.categoryId) + Math.abs(transaction.value));

        if (transaction.value > 0)
            _account.recap.positiveTotal += transaction.value;
        else
            _account.recap.negativeTotal += transaction.value;
    }

    // Reverse so that None category is always at the end
    _account.categories = Array.from(catTmpMap, function(entry) {
        return {id: entry[0], value: entry[1]};
    }).reverse();
    _account.recap.total = Math.abs(_account.recap.positiveTotal) + Math.abs(_account.recap.negativeTotal);
}

export default {
    save,
    updateAccountTransactions
}
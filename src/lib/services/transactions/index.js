function groupTransactionsByDate(_transactions)
{
    let groupedTransactions = [];

    if (!_transactions) return groupedTransactions;

    _transactions = _transactions.sort((a, b) => b.date - a.date || b.orderNumber - a.orderNumber);

    // Work because we know that the transactions are sorted
    let previousDate = new Date(0);
    for (let transaction of _transactions) {
        if (transaction.date.getTime() != previousDate.getTime()) {
            groupedTransactions.push({
                date: transaction.date,
                transactions: [],
            });
            previousDate = transaction.date;
        }
        groupedTransactions[
            groupedTransactions.length - 1
        ].transactions.push(transaction);
    }

    return groupedTransactions;
}

// Create a summary of the given transactions (positive, negative, total, categories values)
function getTransactionsRecap(_transactions)
{
    // transactions without a category (None category) so that its first in the list
    let catTmpMapTotal = new Map();
    let catTmpMapPositive = new Map();
    let catTmpMapNegative = new Map();

    let totals = {
        positiveTotal: 0,
        negativeTotal: 0,
        total: 0,
    };

    for (let transaction of _transactions || [])
    {
        // Categories values totals
        if (!catTmpMapTotal.has(transaction.categoryId)) catTmpMapTotal.set(transaction.categoryId, 0);
        catTmpMapTotal.set(transaction.categoryId, catTmpMapTotal.get(transaction.categoryId) + Math.abs(transaction.value));

        // Categories values totals (positive)
        if (transaction.value > 0)
        {
            if (!catTmpMapPositive.has(transaction.categoryId)) catTmpMapPositive.set(transaction.categoryId, 0);
            catTmpMapPositive.set(transaction.categoryId, catTmpMapPositive.get(transaction.categoryId) + transaction.value);

            totals.positiveTotal += transaction.value;
        }
        // Categories values totals (negative)
        else
        {
            if (!catTmpMapNegative.has(transaction.categoryId)) catTmpMapNegative.set(transaction.categoryId, 0);
            catTmpMapNegative.set(transaction.categoryId, catTmpMapNegative.get(transaction.categoryId) + transaction.value);

            totals.negativeTotal += transaction.value;
        }
    }
    
    // Reverse so that None category is always at the end
    let categoriesTotal = Array.from(catTmpMapTotal, function(entry) {
        return {id: entry[0], value: entry[1]};
    }).sort((a,b) => {
        if (a.value > b.value) return 1;
        if (a.value < b.value) return -1;
        return 0;
    });
    let categoriesPositive = Array.from(catTmpMapPositive, function(entry) {
        return {id: entry[0], value: entry[1]};
    }).sort((a,b) => {
        if (a.value > b.value) return 1;
        if (a.value < b.value) return -1;
        return 0;
    });
    let categoriesNegative = Array.from(catTmpMapNegative, function(entry) {
        return {id: entry[0], value: entry[1]};
    }).sort((a,b) => {
        if (a.value > b.value) return 1;
        if (a.value < b.value) return -1;
        return 0;
    });

    totals.total = Math.abs(totals.positiveTotal) + Math.abs(totals.negativeTotal);

    return {
        categoriesTotal,
        categoriesPositive,
        categoriesNegative,
        totals
    }
}

export default {
    groupTransactionsByDate,
    getTransactionsRecap
}
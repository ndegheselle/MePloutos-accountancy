import { BaseRepo } from '@lib/base/db/BaseRepo';

class TransactionsRepository extends BaseRepo {
    constructor() {
        super("transactions");
    }

    updatesAllCategory(_transactions, _category) {
        return this.table
            .where('id')
            .anyOf(_transactions.map(x => x.id))
            .modify({ categoryId: _category.id });
    }

    removeByAccount(_accountId) {
        return this.table
            .where("accountId")
            .equals(_accountId)
            .delete();
    }

    getMostRecent() {
        return this.table.orderBy("date").last();
    }

    getByAccount(_accountId, _endDate) {
        if (!_accountId) return Promise.resolve([]);

        // Should be more efficient to filter by date first
        if (_endDate) {
            return this.table
                .where("date")
                .above(_endDate)
                .and(_transaction => _transaction.accountId === _accountId)
                .toArray();
        }

        return this.table
            .where("accountId")
            .equals(_accountId)
            .toArray();
    }
}

export const TransactionsRepo = new TransactionsRepository();
export class Transaction
{
    constructor(_date, _description, _value, _accountId)
    {
        this.id = null;
        this.date = _date || new Date();
        this.description = _description || "";
        this.value = _value || 0;

        this.accountId = _accountId || null;
        this.categoryId = null;
        this.orderNumber = 0;
    }
}
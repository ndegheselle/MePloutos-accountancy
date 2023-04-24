import { fetchApi } from "@global/api/base.js";

// Accounts
export function createAccount(account) {
    return fetchApi(`/accountancy/accounts`, {
        method: "post",
        body: account
    });
}

export function getAccounts() {
    return fetchApi(`/accountancy/accounts`);
}

export function deleteAccount(id) {
    return fetchApi(`/accountancy/accounts/${id}`, { method: "delete" });
}

export function updateAccount(account) {
    return fetchApi(`/accountancy/accounts/${account.id}`, { method: "put", body: account });
}

// Transactions
export function getTransactions(accountId, dateFilterTo) {
    if (dateFilterTo)
    {
        return fetchApi(`/accountancy/accounts/${accountId}/transactions?dateFilterTo=${dateFilterTo.getTime()}`);
    }
    // Get all
    return fetchApi(`/accountancy/accounts/${accountId}/transactions`);
}

export function updateTransactions(accountId, transactions) {
    return fetchApi(`/accountancy/accounts/${accountId}/transactions`, { method: "put", body: transactions });
}

export function importFile(file, options) {
    let data = new FormData();
    data.append('file', file);

    return fetchApi(`/accountancy/accounts/${options.accountId}/import?bank=${options.bank}`, {
        method: "post",
        body: data
    });
}

// Categories

export function createCategory(category) {
    return fetchApi(`/accountancy/transactions/categories`, {
        method: "post",
        body: category
    });
}

export function getCategories() {
    return fetchApi(`/accountancy/transactions/categories`);
}

export function deleteCategory(id) {
    return fetchApi(`/accountancy/transactions/categories/${id}`, { method: "delete" });
}

export function updateCategory(category) {
    return fetchApi(`/accountancy/transactions/categories/${category.id}`, { method: "put", body: category });
}

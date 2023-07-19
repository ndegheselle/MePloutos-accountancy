import { filters } from "./_store";

export function load({ params }) {
    filters.update(_filters => {
        _filters.accountId = params.id;
        return _filters;
    });
}
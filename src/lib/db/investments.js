import { BaseRepoSync } from '@base/db/BaseRepo';

export const InvestmentsRepo = new BaseRepoSync("investments");
export class Investment
{
    constructor(_name)
    {
        this.name = _name || "";
        this.startDate = new Date();

        // XXX : amélioration possible avec valeurs passés, gestion d'investissement régulier, etc.
        this.actualValue = 0;
        this.investedValue = 0;
    }
}
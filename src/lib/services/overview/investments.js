import { uuidv4 } from "@lib/helpers";

import { createInvestment, updateInvestment, removeInvestment } from "@lib/repos/investments";

// Get investments recap
function getInvestmentsRecap(_investments) {
    const recap = {
        number: 0,
        total: 0,
        percentage: 0,
    };

    if (_investments?.length === 0) return recap;

    let totalInitialValue = 0;
    for (const investment of _investments) {
        recap.number += 1;
        recap.total += investment.actualValue;
        totalInitialValue += investment.investedValue;
    }

    recap.percentage = recap.total / totalInitialValue * 100 - 100;

    return recap;
}

function create(_investment)
{
    _investment.id = uuidv4();
    _investment.actualValue = _investment.investedValue;
    return createInvestment(_investment);
}

function update(_investment)
{
    return updateInvestment(_investment);
}

function remove(_investmentId)
{
    return removeInvestment(_investmentId);
}

function addValue(_investment, _value)
{
    _investment.values.push(_value);
    return update(_investment);
}

export default {
    getInvestmentsRecap,
    create,
    update,
    remove,
    addValue
};
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

export default {
    getInvestmentsRecap
};
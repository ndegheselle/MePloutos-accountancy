
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
        let actualValue = 0;
        if (investment.values.length)
            actualValue = investment.values[investment.values.length - 1];
        else 
            actualValue = investment.initialValue;

        recap.number += 1;
        recap.total += actualValue;
        totalInitialValue += investment.initialValue;
    }

    recap.percentage = recap.total / totalInitialValue * 100;

    return recap;
}

export default {
    getInvestmentsRecap
};
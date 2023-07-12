export function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

// Get first day of the current month
export function firstDayOfMonth() {
    let date = new Date();
    date.setDate(1);
    return date;
}

export function getDateFromMonthsAgo(months) {
    let date = new Date();
    date.setMonth(date.getMonth() - months);
    return date;
}

export function parseDate(date)
{
    let timestamp = Date.parse(date);

    if (isNaN(timestamp) == false)
        return new Date(timestamp);
    return new Date();
}
export function getNextMonthNumber(month = 0) {
    if(month === 11) {
        return 0;
    }

    return month + 1;
}

export function getNextMonthAndYearNumbers(month = 0, year = 2016) {
    const nextMonth = getNextMonthNumber(month);
    const nextYear = nextMonth === 0 ? year + 1 : year;

    return {
        month: nextMonth,
        year: nextYear
    };
}

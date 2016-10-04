import React from "react";

function renderMonths() {
    return [0, 1,2,3,4,5,6,7,8,9,10,11].map(month => {
        return (
            <option
                value={month}
                key={month}
            >
                {month + 1}
            </option>
        );
    });
}

function renderYears(year) {
    const minYear = year - 10;
    const maxYear = year + 10;
    const years = [];

    for(let i = minYear; i < maxYear; i ++) {
        years.push(
            <option
                value={i}
                key={i}
            >
                {i}
            </option>
        );
    }

    return years;
}

export default function MonthPicker(props) {
    return (
        <div className="month-header">
            <select
                value={props.month}
                onChange={(event) => props.setMonth.call(null, event.target.value)}
            >
                {renderMonths()}
            </select>
            <select
                value={props.year}
                onChange={(event) => props.setYear.call(null, event.target.value)}
            >
                {renderYears(props.year)}
            </select>
        </div>
    );
}
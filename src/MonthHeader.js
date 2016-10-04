import React from "react"

function renderHeaderDays() {
    return ["Sn", "M", "T", "W", "Th", "F", "S"].map((day, index) => {
        return (
            <span
                className="day-name"
                key={index}
            >
                {day}
            </span>
        );
    });
}

export default function MonthHeader() {
    return (
        <div className="month-header">
            {renderHeaderDays()}
        </div>
    );
}
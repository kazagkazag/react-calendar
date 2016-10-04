import React, {PropTypes} from "react";
const moment = require('moment');
import Day from "./Day";

function getDayClassName(selectedDay, day) {
    const isToday = day.isSame(moment(), "day") ? "is-today" : "";
    const fromDifferentMonth = day.get("month") !== selectedDay.get("month") ? "from-different-month" : "";
    const isSelected = day.isSame(selectedDay, "day") ? "is-selected" : "";
    return `day ${isToday} ${fromDifferentMonth} ${isSelected}`;
}

export default function Week (props) {
    const days = props.days;

    return (
        <div className="week">
            {Object.keys(days).map((dayNumber, index) => {
                const day = days[dayNumber];
                return (
                    <Day
                        key={index}
                        day={day}
                        className={getDayClassName(props.selectedDay, day)}
                        selectDay={props.selectDay}
                    />
                );
            })}
        </div>
    );
}

Week.propTypes = {
    days: PropTypes.object,
    selectDay: PropTypes.func,
    selectedDay: PropTypes.object
};
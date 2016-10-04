import React, {PropTypes} from "react";
import MonthPicker from "./MonthPicker";

export default function CalendarPickerHeader(props) {
    return (
        <div className="calendar-picker_header">
            <button onClick={props.prevMonth}>&laquo;</button>
            <MonthPicker
                month={props.month}
                year={props.year}
                setMonth={props.setMonth}
                setYear={props.setYear}
            />
            <button onClick={props.nextMonth}>&raquo;</button>
        </div>
    );
}

CalendarPickerHeader.propTypes = {
    month: PropTypes.number,
    year: PropTypes.number,
    setMonth: PropTypes.func,
    setYear: PropTypes.func,
    nextMonth: PropTypes.func,
    prevMonth: PropTypes.func
};
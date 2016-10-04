import React, {PropTypes} from "react";
const moment = require('moment');

export default function Day(props) {
    return (
        <span
            className={props.className}
            onClick={(event, day) => props.selectDay(props.day)}
        >
            {props.day.date()}
        </span>
    );
}

Day.propTypes = {
    className: PropTypes.string,
    day: PropTypes.object,
    selectDay: PropTypes.func
};
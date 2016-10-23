import React, {PropTypes} from "react";
const moment = require("moment");

function isDisabled(day, disableAfter, disableBefore) {
    const disableFrom = disableAfter ? moment(disableAfter, "DD.MM.YYYY") : undefined;
    const disableTo = disableBefore ? moment(disableBefore, "DD.MM.YYYY") : undefined;

    return disableAfter && day.isBefore(disableTo) || disableBefore && day.isAfter(disableFrom);
}

function getClassName(props) {
    const hasDisabledClass = isDisabled(props.day, props.disableAfter, props.disableBefore);
    return `${props.className} ${hasDisabledClass ? "is-disabled": ""}`;
}

export default function Day(props) {
    return (
        <span
            className={getClassName(props)}
            onClick={(event, day) => props.selectDay(props.day)}
        >
            {props.day.date()}
        </span>
    );
}

Day.propTypes = {
    className: PropTypes.string,
    day: PropTypes.object,
    selectDay: PropTypes.func,
    disableBefore: PropTypes.string,
    disableAfter: PropTypes.string
};
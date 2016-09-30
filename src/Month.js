import React, {Component} from 'react';
const moment = require('moment');

export default class Month extends Component {

    getDaysForMonth(month, year) {
        const daysInMonth = moment({
            day: 1,
            month,
            year
        }).daysInMonth();

        const days = [];

        for (let i = 0; i < daysInMonth; i++) {
            days.push(moment({
                day: i + 1,
                month,
                year
            }));
        }

        return days;
    }

    getWeeks(days) {
        const weeks = new Map();

        days.map(day => {
            const weekNumber = day.week();
            const dayNumber = day.day();

            if(!weeks.has(weekNumber)) {
                weeks.set(weekNumber, {});
            }
            weeks.get(weekNumber)[dayNumber] = day;
        });

        return weeks;
    }

    completeWeeks(weeks) {
        weeks = this.completeFirstWeek(weeks);
        weeks = this.completeLastWeek(weeks);

        return weeks;
    }

    completeFirstWeek(weeks) {
        const firstWeekNumber = weeks.keys().next().value;
        const daysNumberInFirstWeek = Object.keys(weeks.get(firstWeekNumber)).length;
        const numberOfMissingDays = 7 - daysNumberInFirstWeek;
        const yearOfMissingDays = this.props.month === 0 ? this.props.year- 1 : this.props.year;
        const monthOfMissingDays = this.props.month === 0 ? 11 : this.props.month - 1;
        const missingDays = this.getDaysForMonth(monthOfMissingDays, yearOfMissingDays).slice(-1 * numberOfMissingDays);

        for(let i = 0; i < numberOfMissingDays; i++) {
            weeks.get(firstWeekNumber)[i] = missingDays[i];
        }

        return weeks;
    }

    completeLastWeek(weeks) {
        const lastWeekNumber = Array.from(weeks.keys()).reverse()[0];
        const daysNumberInLastWeek = Object.keys(weeks.get(lastWeekNumber)).length;
        const numberOfMissingDays = 7 - daysNumberInLastWeek;
        const yearOfMissingDays = this.props.month === 11 ? this.props.year+ 1 : this.props.year;
        const monthOfMissingDays = this.props.month === 11 ? 0 : this.props.month + 1;
        const missingDays = this.getDaysForMonth(monthOfMissingDays, yearOfMissingDays).slice(0, numberOfMissingDays);

        for(let i = 0; i < numberOfMissingDays; i++) {
            weeks.get(lastWeekNumber)[6 - i] = missingDays.pop();
        }

        return weeks;
    }

    renderHeader() {
        return ["Sn", "M", "T", "W", "Th", "F", "S"].map((day, index) => <span className="day-name" key={index}>{day}</span>);
    }

    renderWeeks() {
        const weeks = this.completeWeeks(this.getWeeks(this.getDaysForMonth(this.props.month, this.props.year)));
        const result = []

        weeks.forEach((days) => {
            result.push(<p className="week">
                {Object.keys(days).map(dayNumber => {
                    return <span className="day">{days[dayNumber].date()}</span>;
                })}
            </p>);
        }, weeks);

        return result;
    }

    render() {
        return this.props && this.props.month >=0 && this.props.year >=0 ? (
            <div className="month">
                {this.renderHeader()}
                {this.renderWeeks()}
            </div>
        ) : null;
    }
};
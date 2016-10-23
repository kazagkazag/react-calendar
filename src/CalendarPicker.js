import React, {Component} from 'react';
const moment = require('moment');
import Month from "./Month";
import MonthHeader from "./MonthPicker";
import CalendarPickerHeader from "./CalendarPickerHeader";
import * as utils from "./utils";

export default class CalendarPicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            month: 0,
            year: 0
        };

        this.nextMonth = this.nextMonth.bind(this);
        this.prevMonth = this.prevMonth.bind(this);
        this.setMonth = this.setMonth.bind(this);
        this.setYear = this.setYear.bind(this);
    }

    componentWillReceiveProps(props) {
        if (!props.selectedDay) {
            return;
        }

        this.setState({
            month: props.selectedDay.get("month"),
            year: props.selectedDay.get("year")
        });
    }

    prevMonth() {
        const prevMonth = this.state.month === 0 ? 11 : this.state.month - 1;
        const prevYear = this.state.month === 0 ? this.state.year - 1 : this.state.year;

        this.setState({
            month: prevMonth,
            year: prevYear
        });
    }

    nextMonth() {
        const nextMonth = this.state.month === 11 ? 0 : this.state.month + 1;
        const nextYear = this.state.month === 11 ? this.state.year + 1 : this.state.year;

        this.setState({
            month: nextMonth,
            year: nextYear
        });
    }

    setMonth(month) {
        this.setState({
            month: parseInt(month)
        });
    }

    setYear(year) {
        this.setState({
            year: parseInt(year)
        });
    }

    renderMonths() {
        const months = parseInt(this.props.numberOfMonths);
        let displayedMonthIndex = 0;
        let month = this.state.month;
        let year = this.state.year;
        const renderedMonths = [];

        for(; displayedMonthIndex < months; displayedMonthIndex ++) {
            renderedMonths.push(
                <Month
                    month={month}
                    year={year}
                    setMonth={this.setMonth}
                    setYear={this.setYear}
                    selectedDay={this.props.selectedDay}
                    selectDay={this.props.selectDay}
                    disableBefore={this.props.disableBefore}
                    disableAfter={this.props.disableAfter}
                    key={month}
                />
            );

            const nextMonthAndYearNumbers = utils.getNextMonthAndYearNumbers(month, year);
            month = nextMonthAndYearNumbers.month;
            year = nextMonthAndYearNumbers.year;
        }

        return renderedMonths;
    }

    render() {
        return this.props.isVisible ? (
            <div className="calendar-picker">
                <CalendarPickerHeader
                    month={this.state.month}
                    year={this.state.year}
                    setMonth={this.setMonth}
                    setYear={this.setYear}
                    nextMonth={this.nextMonth}
                    prevMonth={this.prevMonth}
                />
                {this.renderMonths()}
            </div>
        ) : null;
    }
}
import React, {Component} from 'react';
const moment = require('moment');
import Month from "./Month";

export default class CalendarPicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            month: 0,
            year: 0
        };

        this.nextMonth = this.nextMonth.bind(this);
        this.prevMonth = this.prevMonth.bind(this);
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

    renderTitle() {
        return <p>
            <button onClick={this.prevMonth}>&laquo;</button>
            {`${this.state.month + 1}.${this.state.year}`}
            <button onClick={this.nextMonth}>&raquo;</button>
        </p>;
    }

    render() {
        return this.props.isVisible ? (
            <div className="calendar-picker">
                {this.renderTitle()}
                <Month month={this.state.month} year={this.state.year} />
            </div>
        ) : null;
    }
}
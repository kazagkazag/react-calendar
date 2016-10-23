import React, {Component} from 'react';
const moment = require('moment');
import CalendarPicker from "./CalendarPicker";

export default class Calendar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDay: this.props.selectedDay ? moment(this.props.selectedDay, "DD.MM.YYYY") : moment(),
            isVisible: false
        };

        this.toggleCalendar = this.toggleCalendar.bind(this);
        this.selectDay = this.selectDay.bind(this);

    }

    toggleCalendar() {
        this.setState({
            isVisible: !this.state.isVisible
        });
    }

    selectDay(selectedDay) {
        this.setState({
            selectedDay
        });
    }

    render() {
        return this.state.selectedDay ? (
            <div className="calendar">
                <input
                    type="text"
                    readOnly
                    value={this.state.selectedDay.format("DD.MM.YYYY")}
                />
                <button
                    type="button"
                    onClick={this.toggleCalendar}
                >
                    calendar
                </button>
                <CalendarPicker
                    isVisible={this.state.isVisible}
                    selectedDay={this.state.selectedDay}
                    selectDay={this.selectDay}
                    numberOfMonths={this.props.numberOfMonths}
                    disableBefore={this.props.disableBefore}
                    disableAfter={this.props.disableAfter}
                />
            </div>
        ) : null;
    }
}

Calendar.defaultProps = {
    numberOfMonths: 1
}

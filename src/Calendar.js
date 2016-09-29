import React, {Component} from 'react';
const moment = require('moment');
import CalendarPicker from "./CalendarPicker";

export default class Calendar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDate: this.props.selectedDate ? moment(this.props.selectedDate).format("DD.MM.YYYY") : moment(),
            isVisible: false
        };

        this.toggleCalendar = this.toggleCalendar.bind(this);

    }

    toggleCalendar() {
        this.setState({
            isVisible: !this.state.isVisible
        });
    }

    render() {
        return (
            <div className="calendar">
                <input
                    type="text"
                    defaultValue={this.state.selectedDate.format("DD.MM.YYYY")}
                />
                <button
                    type="button"
                    onClick={this.toggleCalendar}
                >
                    calendar
                </button>
                <CalendarPicker
                    isVisible={this.state.isVisible}
                    selectedDay={this.state.selectedDate}
                />
            </div>
        )
    }
}


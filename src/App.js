import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from "./Calendar";

class App extends Component {
    render() {
        return (
            <Calendar {...this.props}/>
        );
    }
}

export default App;

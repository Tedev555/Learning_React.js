import React from 'react';
import ReactDOM from 'react-dom';

// Clock is now defined as a class rather than a function.
// This lets us use additional features such as local state and lifecycle hooks.
class Clock extends React.Component {

    //Class components should always call the base constructor with props.
    constructor(props) {
        super(props)
        this.state = {date: new Date()} // The only place where you can assign this.state is the constructor.
    }

    //The componentDidMount() hook runs after the component output has been rendered to the DOM
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        )        
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>State and Lifecycle</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

export default Clock
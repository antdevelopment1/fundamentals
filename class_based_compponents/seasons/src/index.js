import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {
    constructor(props) {
        super(props);

        // This is the only time we do direct assignment to this.state
        this.state = {
            lat: null
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => console.log(err)
        );
    }
    render() {
        return (
            <div>Laditude: {this.state.lat}</div>
        )
    }
}

// This example illistrates the purpose of class based components. We don't have a great way of accessing the current location of the user as that event can take much longer to
// retrieve from the user than the following div being rendered. Class based components fix this issue

ReactDOM.render(<App />, document.querySelector('#root'));
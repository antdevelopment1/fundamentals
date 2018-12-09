import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {
    constructor(props) {
        super(props);

        // This is the only time we do direct assignment to this.state
        this.state = {
            // This doesnt render as null it just doesnt render as a value but after we get the value of users location from our callback below and setState our render will get called again after we setState to update our object
            lat: null,
            errorMessage: ''
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude})
            },
            (err) => this.setState({
                errorMessage: err.message
            })
        );
    }

    // Must be called render and must return some amount of JSX
    // Render runs twice once when it was null and once after we update the state one more time
    render() {
        return (
            <div>
                Laditude: {this.state.lat}
                <br />
                Error: {this.state.errorMessage}
            </div>
        )
    }
}

// This example illistrates the purpose of class based components. We don't have a great way of accessing the current location of the user as that event can take much longer to
// retrieve from the user than the following div being rendered. Class based components fix this issue

ReactDOM.render(<App />, document.querySelector('#root'));
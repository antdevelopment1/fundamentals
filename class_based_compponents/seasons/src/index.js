import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
        // console.log(props);
        // super(props);

        // Our constructor has only one purpose now which is to initiate state
        // This is the only time we do direct assignment to this.state
        // this.state = {
        //     // This doesnt render as null it just doesnt render as a value but after we get the value of users location from our callback below and setState our render will get called again after we setState to update our object
        //     lat: null,
        //     errorMessage: ''
        // };
        // The code block above with this.state is equivalent to this code belowe
        state = {lat:null, errorMessage: ''};

        componentDidMount() {
            window.navigator.geolocation.getCurrentPosition(
                (position) => this.setState({lat: position.coords.latitude}),
                (err) => this.setState({errorMessage: err.message})
            );  
        }

        renderContent() {
            // If theres an error and there is no laditude to show then we want to show only the error message
            if (this.state.errorMessage && !this.state.lat) {
                return <div>Error: {this.state.errorMessage}</div>
            }
            // If there is no error and we have a laditude to display then we only want to display the laditude only
            if (!this.state.errorMessage && this.state.lat) {
                return <SeasonDisplay lat={this.state.lat}/>
            }
        
            // If there is neither a error or laditude to show then we are still waiting for a reponse back from our api call
                return <div><Spinner message="Please accept location request..."/></div>
            // return (
            // <div>
            //     Laditude: {this.state.lat}
            //     <br />
            //     Error: {this.state.errorMessage}
            // </div>
            // )
        } 

        // Must be called render and must return some amount of JSX
        // Render runs twice once when it was null and once after we update the state one more time
        // The render method alone is about returning JSX Avoid doing anything besides returning JSX
        render() {
            return (
                <div className="border red">
                    {this.renderContent()}
                </div>
            );
        
        }
        

    }


// This example illistrates the purpose of class based components. We don't have a great way of accessing the current location of the user as that event can take much longer to
// retrieve from the user than the following div being rendered. Class based components fix this issue

ReactDOM.render(<App />, document.querySelector('#root'));
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );
    return(
        <div>
            Laditude:
            < SeasonDisplay />
        </div>
    )
}

// This example illistrates the purpose of class based components. We don't have a great way of accessing the current location of the user as that event can take much longer to
// retrieve from the user than the following div being rendered. Class based components fix this issue

ReactDOM.render(<App />, document.querySelector('#root'));
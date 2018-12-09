// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButton() {
    return 'Click Something';
}
// Create a react component
const App = () => {
    return (
        <div>
            <label class="label" for="name">Enter Name:</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>{getButton()}</button> 
        </div>
    )
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'))
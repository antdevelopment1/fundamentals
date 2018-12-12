import React from 'react';
import SearchBar from './SearchBar';


// App will be a class based component because it's going to hold all the different state for our application
class App extends React.Component {

    render() {
        return(
            <div><SearchBar /></div>
        )
    }
}

export default App;
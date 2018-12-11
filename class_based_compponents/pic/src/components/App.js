import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
state = {
    // If the type of data we are expecting from our api request is an array or object then we want to default to an array or object as opposed to nullm undefined or a string
    // We also wont immidiately have access to methods like map or filter by using something other than array 
    images: []
};

   async onSearchSubmit(term) {
        // Takes two arguments first one being the address where we want to make the get request to
        // The second one being an object that will have a bunch of options that will customize this request
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID db4714e2ac3ef3a98766944cedbce241295f41d25b182624e544c7c3a82e3ab8'
            }
        })
        // One option is a promise chain which I like over async await personally. Its more manual and I like that.
        // .then(result => {
        //     console.log(result.data.results);
        // })
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '20px'}}>
            {/* The value here for onSubmit does not have to be called onSubmit but in this case it makes sense to use this name */}
                <SearchBar onSubmit={this.onSearchSubmit}/>
                {/* Found: {this.state.images.length} */}
                
            </div>
        )
    }
    
}


export default App;
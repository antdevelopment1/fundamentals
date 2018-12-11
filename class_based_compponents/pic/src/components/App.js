import React from 'react';
import unsplash from './../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    state = {
        // If the type of data we are expecting from our api request is an array or object then we want to default to an array or object as opposed to nullm undefined or a string
        // We also wont immidiately have access to methods like map or filter by using something other than array 
        images: []
    };

    onSearchSubmit = async term => {
        // Takes two arguments first one being the address where we want to make the get request to
        // The second one being an object that will have a bunch of options that will customize this request
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: { query: term }
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
                <SearchBar handleSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
    
}


export default App;
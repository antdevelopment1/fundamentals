import React from 'react';
import SearchBar from './SearchBar';
import youtube from './../apis/youtube';


// App will be a class based component because it's going to hold all the different state for our application
class App extends React.Component {

    state = {
        videos: []
    }

    onTermSubmit = async (term) => {
       const response = await youtube.get('./search', {
            params: {
                q: term
            }
        })
        this.setState({
            videos: response.data.items
        })
    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                I have {this.state.videos.length} videos.
            </div>
        )
    }
}

export default App;
import React from 'react';

class SearchBar extends React.Component {

    state = {
        term: ''
    }

    // This needs to be an arrow function so when we update this this. the value isnt undefined
    inputChange = (event) => {

        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        // Todo: Callback from parent component
    }

    render() {
        return (
            <div className=" search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <label>Video Search</label>
                        <input onChange={this.inputChange} type="text" value={this.state.term}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
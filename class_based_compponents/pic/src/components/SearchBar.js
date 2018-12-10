import React from 'react';

class SearchBar extends React.Component {

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    state = {
        term: ''
    }

    onFormSubmit (event) {
        event.preventDefault();
        console.log(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* this has to be called onChange or else our function wont be called when there is a chnage in the input field */}
                        <input type="text" value={this.state.term} onChange={(event) => this.setState({term: event.target.value.toUpperCase()})} />
                    </div>
                </form>
            </div>
            
        )
    }
}

export default SearchBar;
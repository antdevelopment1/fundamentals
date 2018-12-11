import React from 'react';

class SearchBar extends React.Component {

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    state = {
        term: ''
    }

    // We could have made a constructor and used the bind method to bind the value of this to the method but that is a legacy method
    // This is alternative arrow syntax will have the correct value needed to access .this refering to our instance
    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term);
        this.props.handleSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
            {/* In this case since this is a form and a normal JSX elements we cannot make up the onSubmit=. It has to be that so when something is submitted our function is called. 
            This is not the case inside of our App file where we pass a prop to searchbar */}
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* this has to be called onChange or else our function wont be called when there is a chnage in the input field */}
                        <input type="text" value={this.state.term} onChange={(event) => this.setState({term: event.target.value})} />
                    </div>
                </form>
            </div>
            
        )
    }
}

export default SearchBar;
import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    )
}


// If we dont pass in a message as a property this will be our default message
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;
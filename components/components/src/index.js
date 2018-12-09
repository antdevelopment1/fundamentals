import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
             {/* WHEN USING A COMPONENT FROM OUTSIDE CURRENT FILE DONT USE CURLY BRACES USE CARROT TAGS PROPER WAY TO RENDER ONE COMPENENT INSIDE ANOTHER */}
            <CommentDetail />
            
        </div>
        
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
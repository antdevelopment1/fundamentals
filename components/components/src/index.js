import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    const image = faker.image.avatar();
    return (
        <div className="ui container comments">
             {/* WHEN USING A COMPONENT FROM OUTSIDE CURRENT FILE DONT USE CURLY BRACES USE CARROT TAGS PROPER WAY TO RENDER ONE COMPENENT INSIDE ANOTHER */}
             <ApprovalCard />
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                content="Nice blog post!" 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Alex" 
                timeAgo="Today at 2:00PM" 
                content="Totally I dig it!" 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Jane" 
                timeAgo="Yesterday at 5:00PM" 
                content="Man I never thought about it like that!" 
                avatar={faker.image.avatar()}
            /> 
        </div>
        
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
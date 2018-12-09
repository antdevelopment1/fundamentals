import React from 'react';


// If we ever want to show some component or some custom content inside a component then we will take the child (CommentDetail) and wrap it with a parent component(Approval Card)
// and then that child componentis going to show up inside the child on the props.children. It will always hsow up on the props.children 
const ApprovalCard = (props) => {
    return (
        <div className="ui card">
            <div className="content">
                {props.children}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Reject</div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default ApprovalCard;
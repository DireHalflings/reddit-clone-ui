import React from "react";

const LoadComments = ({ comments }) => {
    return (
        <div className="post-loaded-comments">
            {comments.map((comment, i) => {
                return <h2 key={comment + i}>{comment}</h2>;
            })}
        </div>
    );
};

export default LoadComments;

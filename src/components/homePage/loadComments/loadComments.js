import React from "react";

const LoadComments = ({ comments }) => {
    return (
        <div>
            {comments.map((comment, i) => {
                return <h2 key={comment + i}>{comment}</h2>;
            })}
        </div>
    );
};

export default LoadComments;

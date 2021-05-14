import React from "react";
import PostImg from "./imgs/imgs";
import PostVotes from "./votes/votes";
import PostComments from "./postComments/postComments";
import LoadComments from "./loadComments/loadComments";

const Post = ({ post }) => {
    const { title, time, username, subReddit, url, votes, comments, id } = post;
    return (
        <div>
            <h2>{title}</h2>
            <p>
                Submitted {time.toLocaleString()} ago by {username} to{" "}
                {subReddit}
            </p>
            <PostImg url={url} />
            <PostVotes votes={votes} id={id} />
            <PostComments id={id} />
            <LoadComments comments={comments} />
        </div>
    );
};

export default Post;

import React from "react";
import Post from "./post";
import { useSelector } from "react-redux";

import "./home.css";

const Home = () => {

    const posts = useSelector(state => state.posts.posts);

    return (
        <div className="posts-container">
            {posts.map((post, i) => {
                return <Post key={post.id} post={post} />
            })}
        </div>
    );
};

export default Home;

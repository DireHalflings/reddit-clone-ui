import React, { useEffect } from "react";
import { updatePosts } from "../../redux/actions/postActions";
import Post from "./post";
import { useSelector, useDispatch } from "react-redux";
// import { allPost } from "../../api/post";

import "./home.css";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePosts());
    }, []);

    const posts = useSelector((state) => state.posts.posts);

    return (
        <div className="posts-container">
            {posts.map((post, i) => {
                return <Post key={post.id} post={post} />;
            })}
        </div>
    );
};

export default Home;

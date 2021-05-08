import { ADD_POST, UPDATING_POSTS, UPDATED_POSTS } from "./actionConstants";
import { allPost } from "../../api/post";

export const addPost = (post) => ({ type: ADD_POST, payload: post });
// export const updatePosts = (posts) => ({type: UPDATE_POSTS, payload: posts})

export const updatePosts = () => async (dispatch) => {
    dispatch({ type: UPDATING_POSTS });
    try {
        const response = await allPost();
        console.log(response);
        dispatch({ type: UPDATED_POSTS, payload: response });
    } catch (err) {}
};

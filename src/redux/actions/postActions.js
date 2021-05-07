import { ADD_POST } from "./actionConstants";

export const addPost = (post) => ({ type: ADD_POST, payload: post });
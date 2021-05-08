import axios from "axios";
const url = process.env.REACT_APP_API_URL;

export const addPost = async (post) => {
    await axios.post(`${url}/posts/add`, post);
};

export const allPost = async () => await axios.get(`${url}/posts`);

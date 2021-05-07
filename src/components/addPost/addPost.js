import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/actions/postActions";

const AddPost = () => {
    // const [post,setPost] = useState();
    const [subReddit, setSubReddit] = useState("");
    const [poster, setPoster] = useState("");
    const [title, setTitle] = useState("");
    const [url, setURL] = useState("");

    const dispatch = useDispatch();

    const handleSubmitBtn = (e) => {
        e.preventDefault();
        const post = {
            subReddit: subReddit,
            poster: poster,
            title: title,
            url: url,
            username: "username",
        };
        dispatch(addPost(post));
        setSubReddit('');
        setPoster('');
        setTitle('');
        setURL('');
    };
    return (
        <div className="add-post-container">
            <div className="add-post-header">
                <h2>Add a Post</h2>
            </div>
            <form className="input-container">
                <div>
                    <label>subReddit</label>
                    <input
                        type="text"
                        value={subReddit}
                        onChange={(e) => setSubReddit(e.target.value)}
                    />
                </div>
                <div>
                    <label>Poster</label>
                    <input
                        type="text"
                        value={poster}
                        onChange={(e) => setPoster(e.target.value)}
                    />
                </div>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>URL</label>
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setURL(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        value="submit"
                        onClick={(e) => handleSubmitBtn(e)}
                    />
                </div>
            </form>
        </div>
    );
};

export default AddPost;

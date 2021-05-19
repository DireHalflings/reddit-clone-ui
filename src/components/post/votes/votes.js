import React, { useState } from "react";
import {
    addOneToVote,
    minusOneToVote,
} from "../../../redux/actions/voteActions";
import { useDispatch } from "react-redux";

import './votes.css';

const PostVotes = ({ votes, id }) => {
    const [voteCount] = useState(700);

    const dispatch = useDispatch();

    const handleAddOne = () => {
        dispatch(addOneToVote(id));
    };

    const handleMinusOne = () => {
        dispatch(minusOneToVote(id));
    };

    return (
        <div className='post-votes'>
            <button className="up-vote" onClick={handleAddOne}>
                <i className="fas fa-arrow-up fa-2x" />
            </button>
            <h2 className="post-votes__text">{voteCount}</h2>
            <button className="down-vote" onClick={handleMinusOne}>
                <i className="fas fa-arrow-down fa-2x" />
            </button>
        </div>
    );
};

export default PostVotes;

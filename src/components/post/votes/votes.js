import React, { useState } from "react";
import {
    addOneToVote,
    minusOneToVote,
} from "../../../redux/actions/voteActions";
import { updatePosts } from "../../../redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";

<<<<<<< HEAD
import "./votes.css";

const PostVotes = ({ post }) => {
    const token = useSelector((state) => state.user.jwt);
    // const [voteCount] = useState();
    // const vote = useSelector((state) => state.vote.vote);
=======
import './votes.css';

const PostVotes = ({ votes, id }) => {
    const [voteCount] = useState(700);

>>>>>>> 149ff045126c5f110ca68758b3235313f9517f67
    const dispatch = useDispatch();

    const { _id, votes, userId } = post;

    const handleAddOne = () => {
        dispatch(addOneToVote({ postId: _id, vote: 1, userId, token }));
        dispatch(updatePosts(token));
    };

    const handleMinusOne = () => {
        dispatch(minusOneToVote({ postId: _id, vote: -1, userId, token }));
        dispatch(updatePosts(token));
    };

    const handleVoteRuduce = () => {
        return votes.reduce((total, vote) => {
            console.log(vote.vote);
            return total + vote.vote;
        }, 0);
    };

    return (
<<<<<<< HEAD
        <div className="post-votes">
            <button className="up-vote" onClick={handleAddOne}>
                <i className="fas fa-arrow-up fa-2x" />
            </button>
            <h2 className="post-votes-text">{handleVoteRuduce()} </h2>
=======
        <div className='post-votes'>
            <button className="up-vote" onClick={handleAddOne}>
                <i className="fas fa-arrow-up fa-2x" />
            </button>
            <h2 className="post-votes__text">{voteCount}</h2>
>>>>>>> 149ff045126c5f110ca68758b3235313f9517f67
            <button className="down-vote" onClick={handleMinusOne}>
                <i className="fas fa-arrow-down fa-2x" />
            </button>
        </div>
    );
};

export default PostVotes;

import IconButton from '@mui/material/IconButton';
import React from 'react';
import {BiUpvote} from "react-icons/bi"
import Tooltip from '@mui/material/Tooltip';

const sendUpvote = async (artName,setArticleInfo) =>{

    const uri = `/api/articles/${artName}/upvote`;
    const result = await fetch (uri, {method:'POST'});
    const body = await result.json();
    console.log(body)
    setArticleInfo(body);
}

const Upvote = ({artName,upvotes,setArticleInfo}) => {
    return(
        <>
        <span>This article as been upvoted {upvotes} times.
        <Tooltip title="UpVote!">
        <IconButton size="small" color="default" aria-label="Submit Vote" component="label" onClick={() => sendUpvote(artName,setArticleInfo)}>
        <BiUpvote/>
        </IconButton>
        </Tooltip>
        </span>
        </>
    )
}


export default Upvote;



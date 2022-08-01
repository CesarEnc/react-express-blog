import { useState,React} from 'react';

const AddCommentForm = ({artName,setArticleInfo}) => {
    
    const [username,setUsername] = useState()
    const [comment,setComment] = useState()

    const addComment = async () =>{

        const uri = `/api/articles/${artName}/add-comment`;

        const result = await fetch (uri, 
            {method:'POST',
             body: JSON.stringify({username:username,text:comment}),
             headers:{'Content-Type': 'application/json'}
            });

        const body = await result.json();

        console.log(body)
        setArticleInfo(body);

        setUsername("")
        setComment("")
    }

    return(

    <div className='add-comment-form'>
    <h3>Add a comment</h3>
    
    <label>
        Name
        <input type="text" value={username} onChange={(event) =>{setUsername(event.target.value)}}/>
    </label>
    <label>
        Comment
        <textarea rows="4" cols="50" value={comment} onChange={(event) => {setComment(event.target.value)}}></textarea>
    </label>
    <button onClick={() => addComment()}>Add Comment</button>
    </div>
    
    );
}


export default AddCommentForm;
const Comments = ({comments}) =>{
    return(
        <div className="comments">
        <h3>Comments</h3>
        {comments.map( (x,i) => 
        <div key={i} className="comment">
            <h4>{x.text}</h4>
            <h5>{x.username}</h5>
        </div>
        )}
        </div>
    )
}


export default Comments
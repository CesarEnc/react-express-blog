import React from "react";
import { useParams } from 'react-router-dom';
import articleContent from './article-content'


const ArticlePage = () => {
    const { name } = useParams();
    const article = articleContent.find(x => x.name === name)
    
    if(!article) return <h1>Article does not exist.</h1>
    return(
        <div className="article">
        <h1>{article.title}</h1>
        {article.content.map((p,key)=> <p key={key}>{p}</p> )}
        </div>
    )
}

export default ArticlePage;
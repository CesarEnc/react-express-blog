import React from "react";
import ArticleCard from "../components/ArticleCard";
import articleContent from './article-content'

const ArticleList = () => {

    return(
        <div className="content">
        <h1>Articles</h1>
        {articleContent.map(
            (article,key) => 
            <span key={key}><ArticleCard article={article} /> </span> 
            )}
        </div>
    )
}

export default ArticleList;
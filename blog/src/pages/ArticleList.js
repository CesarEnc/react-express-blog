import React from "react";
import ArticleCard from "../components/ArticleCard";
import articleContent from './article-content'

const ArticleList = () => {

    return(
        <div className="content">
        <h1>Articles</h1>
        {articleContent.map((art,key) => <p key={key}><ArticleCard name={art.name} title={art.title} /> </p> )}
        </div>
    )
}

export default ArticleList;
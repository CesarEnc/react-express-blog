import {React,useEffect,useState} from "react";
import { useParams } from 'react-router-dom';
import articleContent from './article-content';
import ArticleCard from "../components/ArticleCard";
import NotFoundPage from "./NotFoundPage";
import Comments from "../components/Comments"
import Upvote from "../components/Upvote"
import AddCommentForm from "../components/AddCommentForm";


const ArticlePage = () => {
    const [articleInfo,setArticleInfo] = useState({upvotes:0,comments:[]});

    
    const { name } = useParams();
    const article = articleContent.find(x => x.name === name);
    const otherArticles = articleContent.filter(x => x.name !== name);

    useEffect( () => {
        const fetchData = async () =>{
            const result = await fetch (`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    },[name])
    
    if(!article) return <NotFoundPage/>
    return(
        <>
        <div className="article">
        <h1>{article.title}</h1>

        <Upvote artName={name} upvotes = {articleInfo.upvotes} setArticleInfo = {setArticleInfo}/>

        {article.content.map((p,key)=> <p key={key}>{p}</p> )}

        </div>

        <Comments comments={articleInfo.comments}/>
        <AddCommentForm artName={name} setArticleInfo = {setArticleInfo}/>
        <div className="recommeded">
        <h3>Other Articles</h3>
        {otherArticles.map(
            (article,key) => 
            <span key={key}><ArticleCard article={article} /> </span> 
            )}
        </div>
        </>
    )
}

export default ArticlePage;
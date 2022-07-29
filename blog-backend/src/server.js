import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import { getArticle, upvoteArticle,commentArticle } from "./ArticleService";

const port = 8000;
const app =  express();

app.use(bodyParser.json());

app.get('/api/articles/:name', async (req,res) => await getArticle(req.params.name,res))

app.post('/api/articles/:name/upvote', async (req,res) => upvoteArticle(req.params.name,res));

app.post('/api/articles/:name/add-comment', (req,res) => commentArticle(req.params.name,req.body,res));

app.listen(port, console.log(`App Listening On Port ${port}`));
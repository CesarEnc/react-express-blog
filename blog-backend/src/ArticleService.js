import { MongoClient } from "mongodb";

const uri = 'mongodb://localhost:27017';


const withDB = async(operations,res) =>{
    const db = new MongoClient(uri).db('blog');
    try {
        const db = new MongoClient(uri).db('blog');
        await operations(db);
    } catch (error) {
        res.status(500).json(error)
}};

export const getArticle = async(artName,res) =>{
    withDB( async (db) =>{

        const articles = db.collection('articles');
        const query = {name: artName}

        const articlesInfo = await articles.findOne(query);
        res.status(200).json(articlesInfo);
    },res)
}


export const upvoteArticle = async(artName,res) =>{
    withDB(async (db) =>{

        const articles = db.collection('articles');
        const query = {name: artName}

        const toUpdate = await articles.findOne(query);

        await articles.updateOne(query, {'$set': {upvotes: toUpdate.upvotes+1}})

        const updatedArticle = await articles.findOne(query);
        res.status(200).json(updatedArticle);
},res)}


export const commentArticle = async(artName,props,res) =>{
    
    withDB(async (db) =>{

        const {username,text} = props;
        const articles = db.collection('articles');
        const query = {name: artName}
        const articleToUpdate = await articles.findOne(query);
        
        await articles.updateOne(query, {'$set': {comments: articleToUpdate.comments.concat({username,text})}})

        const updatedArticle = await articles.findOne(query);

        res.status(200).send(updatedArticle)
    },res)
}
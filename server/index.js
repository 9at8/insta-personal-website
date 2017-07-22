import express from 'express';
import {MongoClient} from 'mongodb';

const app = express();

const url = 'mongodb://localhost/personal-website';
let posts;

MongoClient.connect(url, (err, db) => {
  posts = db.collection('posts');
});

app.get('/api/home', (req, res) => {
  posts.find({type: 'home'}).toArray()
    .then(obj_data => JSON.stringify(obj_data[0]))
    .then(toSend => res.send(toSend));
});

app.listen(9090);

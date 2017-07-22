import express from 'express';
import {MongoClient, ObjectId} from 'mongodb';

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

app.get('/api/explore', (req, res) => {
  res.send('Hello!');
});

app.get('/api/post/:postID', (req, res) => {
  posts.findOne({_id: ObjectId(req.params.postID)})
    .then(obj_data => JSON.stringify(obj_data))
    .then(toSend => res.send(toSend));
});

app.listen(9090);

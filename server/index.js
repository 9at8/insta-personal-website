import path from 'path';
import express from 'express';
import {MongoClient, ObjectId} from 'mongodb';

const app = express();
app.use('/static', express.static(path.join(__dirname, 'public')));

const url = 'mongodb://localhost/personal-website';
let posts, miniPosts;

MongoClient.connect(url, (err, db) => {
  posts = db.collection('posts');
  miniPosts = db.collection('miniPosts');
});

// Return all posts with {type: home}
app.get('/api/home', (req, res) => {
  posts.find({type: 'home'}).toArray()
    .then(obj_data => JSON.stringify(obj_data))
    .then(toSend => res.send(toSend));
});

// Return all miniPosts with {type: profile}
app.get('/api/miniPosts', (req, res) => {
  miniPosts.find({type: 'profile'}).toArray()
    .then(obj_data => JSON.stringify(obj_data))
    .then(toSend => res.send(toSend));
});

// Return post with {_id: postID}
app.get('/api/post/:postID', (req, res) => {
  posts.findOne({_id: ObjectId(req.params.postID)})
    .then(obj_data => JSON.stringify(obj_data))
    .then(toSend => res.send(toSend));
});

// Return all explore posts with {type: explore}
app.get('/api/explore', (req, res) => {
  posts.find({type: 'explore'}).toArray()
    .then(obj_data => JSON.stringify(obj_data))
    .then(toSend => res.send(toSend));
});

// Return all miniPosts with {type: explore}
app.get('/api/miniPosts/explore', (req, res) => {
  miniPosts.find({type: 'explore'}).toArray()
    .then(obj_data => JSON.stringify(obj_data))
    .then(toSend => res.send(toSend));
});

app.listen(9090);

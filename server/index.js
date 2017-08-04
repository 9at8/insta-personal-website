import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient, ObjectId} from 'mongodb';

const app = express();
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'public')));

const url = 'mongodb://localhost/personal-website';
let posts, miniPosts;

MongoClient.connect(url, (err, db) => {
  posts = db.collection('posts');
  miniPosts = db.collection('miniPosts');
});


// Return all explore posts with {type: explore}
app.get('/api/posts/:type', (req, res) => {
  posts.find({type: req.params.type}).sort({'time': -1}).toArray()
    .then(toSend => res.json(toSend));
});

// Return post with {_id: postID}
app.get('/api/post/:postID', (req, res) => {
  posts.findOne({_id: ObjectId(req.params.postID)})
    .then(toSend => res.json(toSend));
});

// Handles likes or unlikes on MongoDB
app.put('/api/post/:postID', (req, res) => {
  Promise.all([
    posts.updateOne({_id: ObjectId(req.params.postID)}, {$inc: {likes: req.body.likes}}),
    miniPosts.updateOne({postID: req.params.postID}, {$inc: {likes: req.body.likes}})
  ])
    .then(toSend => res.json(toSend));
});

// Return all miniPosts with {type: :type}
app.get('/api/miniPosts/:type', (req, res) => {
  miniPosts.find({type: req.params.type}).sort({'time': -1}).toArray()
    .then(toSend => res.json(toSend));
});

// Return all miniPosts
app.get('/api/miniPosts', (req, res) => {
  miniPosts.find({}).sort({'time': -1}).toArray()
    .then(toSend => res.json(toSend));
});

// Returns all miniPosts after searching posts {$search: :query}
// Sorted by textScore
app.get('/api/search/posts/:query', (req, res) => {
  posts.find(
    {$text: {$search: req.params.query}},
    {score: {$meta: 'textScore'}})
    .sort({score: {$meta: 'textScore'}})
    .toArray()
    .then(posts => {
      return Promise.all(posts.map(post => {
        return miniPosts.findOne({postID: post._id.toString()});
      }));
    })
    .then(miniPosts => res.json(miniPosts))
});

app.listen(9090);

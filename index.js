import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import { MongoClient, ObjectId } from 'mongodb'
import axios from 'axios'
import crypto from 'crypto'
import { exec } from 'child_process'

const app = express()
app.use(bodyParser.json())
app.use('/static', express.static(path.join(__dirname, 'public')))

const url = 'mongodb://localhost/personal-website'
let posts, miniPosts

MongoClient.connect(url, (err, db) => {
  posts = db.collection('posts')
  miniPosts = db.collection('miniPosts')
})

function memeUrl(tag) {
  if (tag === 'random') tag = 'meme'
  return `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&tag=${tag}&rating=PG-13`
}

app.get('/api/meme/:tag', (req, res) => {
  axios.get(memeUrl(req.params.tag))
    .then(data => res.json({ image: data.data.data.image_url }))
})

// Return all explore posts with {type: :type}
app.get('/api/posts/:type', (req, res) => {
  posts.find({ type: req.params.type }).sort({ 'time': -1 }).toArray()
  //posts.find({}).sort({'time': -1}).toArray()
    .then(toSend => res.json(toSend))
})

// Return post with {_id: postID}
app.get('/api/post/:postID', (req, res) => {
  posts.findOne({ _id: ObjectId(req.params.postID) })
    .then(toSend => res.json(toSend))
})

// Handles likes or unlikes on MongoDB
app.put('/api/post/:postID', (req, res) => {
  Promise.all([
    posts.updateOne({ _id: ObjectId(req.params.postID) }, { $inc: { likes: req.body.likes > 0 ? 1 : -1 } }),
    miniPosts.updateOne({ postID: req.params.postID }, { $inc: { likes: req.body.likes > 0 ? 1 : -1 } }),
  ])
    .then(toSend => res.json(toSend))
})

// Return all miniPosts with {type: :type}
app.get('/api/miniPosts/:type', (req, res) => {
  miniPosts.find({ type: req.params.type }).sort({ 'time': -1 }).toArray()
    .then(toSend => res.json(toSend))
})

// Return all miniPosts
app.get('/api/miniPosts', (req, res) => {
  miniPosts.find({}).sort({ 'time': -1 }).toArray()
    .then(toSend => res.json(toSend))
})

// Returns the number of projects and jobs for stats
app.get('/api/stats', (req, res) => {
  let numberOfProjects = miniPosts.count({ type: 'project' })
  let numberOfJobs = miniPosts.count({ type: 'experience' })
  Promise.all([ numberOfProjects, numberOfJobs ])
    .then(data => {
      const numberOfProjects = data[ 0 ]
      const numberOfJobs = data[ 1 ]
      res.json({ numberOfProjects, numberOfJobs })
    })
})


// Returns all miniPosts after searching posts {$search: :query}
// Sorted by textScore
app.get('/api/search/posts', (req, res) => {
  posts.find(
    { $text: { $search: req.query.q } },
    { score: { $meta: 'textScore' } })
    .sort({ score: { $meta: 'textScore' } })
    .toArray()
    .then(posts => {
      return Promise.all(posts.map(post => {
        return miniPosts.findOne({ postID: post._id.toString() })
      }))
    })
    .then(miniPosts => res.json(miniPosts))
})

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/favicon.ico'))
})

app.post('/githook', (req, res) => {
  const payload = req.body
  const signature = req.headers['x-hub-signature']
  const hmac = crypto.createHmac('sha1', process.env.GITHOOK_SECRET_TOKEN)
  hmac.update(JSON.stringify(payload))
  const calculatedSignature = 'sha1=' + hmac.digest('hex')
  if (signature === calculatedSignature) {
    exec('$HOME/deploy', (error, stdout, stderr) => console.log(error, stdout, stderr))
    res.json({ ranDeploymentScript: true })
  } else {
    res.json({ image: "https://media.giphy.com/media/XH6dfMa0cLzYA/giphy.gif" })
  }
})

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(58080)

let MongoClient = require('mongodb').MongoClient;

let projects = require('./../projects').projects;

let url = 'mongodb://localhost/personal-website';
let posts, miniPosts, miniProject;

MongoClient.connect(url, function (err, db) {
  posts = db.collection('posts');
  miniPosts = db.collection('miniPosts');
  insert_one_project(0, projects.length);
});

function insert_one_project(index, length) {
  let project = projects[index];
  let projectId = posts.insertOne(project);
  projectId
    .then((pid) => {
      miniProject = {
        image: project.image,
        likes: project.likes,
        altText: project.caption,
        postID: pid.insertedId.toString(),
        type: project.type,
        time: project.time
      };
      return miniPosts.insertOne(miniProject);
    })
    .then(() => {
      if (index < length - 1) {
        insert_one_project(index + 1, length);
      }
    });
}

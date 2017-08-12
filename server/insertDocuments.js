let MongoClient = require('mongodb').MongoClient;

let projects = require('./../projects').projects;
let lifeStoryData = require('./../lifeStoryData').lifeStory;
let experiences = require('./../experiences').experiences;

let url = 'mongodb://localhost/personal-website';
let posts, miniPosts, miniProject;

MongoClient.connect(url, function (err, db) {
  posts = db.collection('posts');
  miniPosts = db.collection('miniPosts');
  insert_one_project(0, projects.length);
  insert_one_experience(0, experiences.length);
  insert_one_life_story(0, lifeStoryData.length);
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

function insert_one_experience(index, length) {
  let experience = experiences[index];
  let experienceId = posts.insertOne(experience);
  experienceId
    .then((pid) => {
      miniProject = {
        image: experience.image,
        likes: experience.likes,
        altText: experience.caption,
        postID: pid.insertedId.toString(),
        type: experience.type,
        time: experience.time,
        position: experience.position
      };
      return miniPosts.insertOne(miniProject);
    })
    .then(() => {
      if (index < length - 1) {
        insert_one_experience(index + 1, length);
      }
    });
}

function insert_one_life_story(index, length) {
  let life_story = lifeStoryData[index];
  let projectId = posts.insertOne(life_story);
  projectId
    .then((pid) => {
      miniProject = {
        image: life_story.image,
        likes: life_story.likes,
        altText: life_story.caption,
        postID: pid.insertedId.toString(),
        type: life_story.type,
        time: life_story.time
      };
      return miniPosts.insertOne(miniProject);
    })
    .then(() => {
      if (index < length - 1) {
        insert_one_life_story(index + 1, length);
      }
    });
}
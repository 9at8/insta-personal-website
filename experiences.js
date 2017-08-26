const profile_picture = 'https://scontent.fyzd1-1.fna.fbcdn.net/v/t1.0-9/19366404_10207406972092966_677887742544187123_n.jpg?oh=2357c89dc95d8ac11fe3fe6b908858e6&oe=5A07F05F';
const author = {name: '9at8', avatar: profile_picture};
const type = 'experience';

const experiences = [
  {
    author: author,
    type: type,
    location: {
      website: 'https://goo.gl/maps/cnBZrQ5oYum',
      text: 'Communitech, Kitchener'
    },
    time: new Date(2017, 4, 1),
    image: '/static/images/explore/perkin-elmer.png',
    caption: 'PerkinElmer',
    position: 'Full Stack Developer',
    likes: 0,
    comments: [
      {
        user: 'position',
        comment: 'Full Stack Developer',
        time: new Date(2017, 4, 1, 1)
      },
      {
        user: 'tech_stack',
        comment: 'Meteor.js, Socket.IO, Node.js, Python, Api.ai, C#',
        time: new Date(2017, 4, 1, 2)
      },
      {
        user: 'what_did_i_work_on',
        comment: 'I built a web app and a voice user interface using Meteor.js and Api.ai for a PerkinElmer Spectrometer',
        time: new Date(2017, 4, 1, 3)
      },
      {
        user: 'what_did_i_work_on',
        comment: 'These interfaces connected to Middlewares on different SoCs using Socket.IO to make the spectrometer cross platform',
        time: new Date(2017, 4, 1, 4)
      },
      {
        user: 'what_did_i_work_on',
        comment: 'I also used GUI automation with Python to improve my workflow!',
        time: new Date(2017, 4, 1, 5)
      }
    ]
  }, {
    author: author,
    type: type,
    location: {
      website: 'https://goo.gl/maps/7Tv8y5YeRkC2',
      text: 'JMD Megapolis'
    },
    position: 'Software Engineering Intern',
    time: new Date(2016, 5, 1),
    image: '/static/images/explore/erigeron-energy.png',
    caption: 'Erigeron Energy',
    likes: 0,
    comments: [
      {
        user: 'position',
        comment: 'Software Engineering Intern',
        time: new Date(2016, 5, 1, 1)
      },
      {
        user: 'tech_stack',
        comment: 'HTML5, CSS3, Javascript',
        time: new Date(2016, 5, 1, 2)
      },
      {
        user: 'what_did_i_work_on',
        comment: 'I created a solar savings calculator using modern web technologies',
        time: new Date(2016, 5, 1, 3)
      },
      {
        user: 'what_did_i_work_on',
        comment: 'I also followed material design guidelines to design the calculator',
        time: new Date(2016, 5, 1, 4)
      },
      {
        user: 'what_did_i_work_on',
        comment: 'Other than that, I managed and added several other features to their Wordpress website',
        time: new Date(2016, 5, 1, 5)
      }
    ]
  }
];

module.exports = {experiences};
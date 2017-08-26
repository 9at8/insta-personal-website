const profile_picture = 'https://scontent.fyzd1-1.fna.fbcdn.net/v/t1.0-9/19366404_10207406972092966_677887742544187123_n.jpg?oh=2357c89dc95d8ac11fe3fe6b908858e6&oe=5A07F05F';
const author = {name: '9at8', avatar: profile_picture};
const type = 'life-story';

const amity = {
  website: 'https://goo.gl/maps/x7vCL43c8ZH2',
  text: 'Amity International School, Sector 46, Gurgaon'
};

const rohini = {
  website: 'https://goo.gl/maps/gJuumrYp7mk',
  text: 'Rohini, Delhi'
};

const clv = {
  website: 'https://goo.gl/maps/TxAr86qnhDs',
  text: 'CLV South, Waterloo, Ontario'
};

const graffiti = {
  website: 'https://goo.gl/maps/Yep6egWd2F62',
  text: 'Graffiti Alley, Toronto'
};

const archery = {
  website: 'https://goo.gl/maps/Uf5zQzNKB7G2',
  text: 'The Clever Archer, Kitchener'
};

const aravali = {
  website: 'https://goo.gl/maps/y5rBuBoS6m82',
  text: 'Amity Indian Military College'
};

const lotus = {
  website: 'https://goo.gl/maps/tQWYLU7mERK2',
  text: 'Lotus Temple, New Delhi'
};

const waterloo = {
  website: 'https://uwaterloo.ca',
  text: 'University of Waterloo'
};

const peterborough = {
  website: 'https://goo.gl/maps/jRYE9nHHj9u',
  text: 'Trent University, Peterborough'
};

const lifeStory = [
  {
    author: author,
    type: type,
    location: amity,
    time: new Date(2012, 10, 24),
    image: '/static/images/profile/science-project.png',
    caption: 'Been strong, my love for science projects has for a long time...',
    likes: 0,
    comments: []
  }, {
    author: author,
    type: type,
    location: rohini,
    time: new Date(2002, 0, 1),
    image: '/static/images/profile/enthusiastic-kid.png',
    caption: 'I think I have always been the enthusiastic one!',
    likes: 0,
    comments: []
  }, {
    author: author,
    type: type,
    location: clv,
    time: new Date(2016, 10, 20),
    image: '/static/images/profile/clv.png',
    caption: 'I really enjoyed my first snow!',
    likes: 0,
    comments: [
      {
        user: 'fun_fact',
        comment: 'I distinctly remember that all of us were so excited to see snow for the first time in our lives, we grabbed our jackets and just went outside to click pictures in the cold. Good times.',
        time: new Date(2016, 10, 20, 2)
      }
    ]
  }, {
    author: author,
    type: type,
    location: amity,
    time: new Date(2016, 0, 27),
    image: '/static/images/profile/grade-12-dev.png',
    caption: 'This is Aditya Thakral. He\'s a web developer...',
    likes: 0,
    comments: []
  }, {
    author: author,
    type: type,
    location: graffiti,
    time: new Date(2017, 5, 18),
    image: '/static/images/profile/graffiti-alley.png',
    caption: 'Some dev friends...',
    likes: 0,
    comments: [
      {
        user: 'some_puns',
        comment: 'That weekend in Toronto with fellow developer friends was super(awesome)',
        time: new Date(2017, 5, 18, 2)
      }
    ]
  }, {
    author: author,
    type: type,
    location: archery,
    time: new Date(2017, 6, 12),
    image: '/static/images/profile/archery-tag.png',
    caption: 'What would Robin Hood do?',
    likes: 0,
    comments: [
      {
        user: 'some_puns',
        comment: 'Proud to say that I took some headshots. Shoot me (yes) an email if you wanna go archery tag with me sometime!',
        time: new Date(2017, 6, 12, 2)
      }
    ]
  }, {
    author: author,
    type: type,
    location: aravali,
    time: new Date(2016, 11, 29),
    image: '/static/images/profile/lulz.png',
    caption: 'I did it for the lulz!',
    likes: 0,
    comments: []
  }, {
    author: author,
    type: type,
    location: lotus,
    time: new Date(2008, 11, 28),
    image: '/static/images/profile/mother-advice.png',
    caption: 'A wise man once said: Don\'t let you mom dress you after the age of 5. I followed the advice.',
    likes: 0,
    comments: []
  }, {
    author: author,
    type: type,
    location: amity,
    time: new Date(2012, 5, 15),
    image: '/static/images/profile/meme-worthy.png',
    caption: 'A meme worthy picture from when I won my first award for a Photoshop competition',
    likes: 0,
    comments: []
  }, {
    author: author,
    type: type,
    location: rohini,
    time: new Date(2000, 0, 1),
    image: '/static/images/profile/suit-up.png',
    caption: 'Suit up!',
    likes: 0,
    comments: []
  }, {
    author: author,
    type: type,
    location: rohini,
    time: new Date(1998, 1, 24),
    image: '/static/images/profile/birth.png',
    caption: 'Yes! It is me!',
    likes: 0,
    comments: [
      {
        user: 'date_of_birth',
        comment: 'This crazy kid came into the world on February 24, 1998',
        time: new Date(1998, 1, 24, 1)
      }
    ]
  }, {
    author: author,
    type: type,
    location: waterloo,
    time: new Date(2017, 6, 13),
    image: '/static/images/profile/food.png',
    caption: 'All I look at is food!',
    likes: 0,
    comments: []
  }, {
    author: author,
    type: type,
    location: waterloo,
    time: new Date(2017, 4, 13),
    image: '/static/images/profile/crash-hackathon.png',
    caption: 'And just I crash after hackathons',
    likes: 0,
    comments: []
  }, {
    author: author,
    type: type,
    location: peterborough,
    time: new Date(2016, 10, 8),
    image: '/static/images/profile/ec-hacks.png',
    caption: 'Electric City Hacks!',
    likes: 0,
    comments: []
  }, {
    author: author,
    type: type,
    location: null,
    time: new Date(2016, 3, 1),
    image: '/static/images/profile/laptop.png',
    caption: 'I also clean and fix my laptop on my own!',
    likes: 0,
    comments: []
  }
];

module.exports = {lifeStory};

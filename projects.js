const profile_picture = 'https://scontent.fyzd1-1.fna.fbcdn.net/v/t1.0-9/19366404_10207406972092966_677887742544187123_n.jpg?oh=2357c89dc95d8ac11fe3fe6b908858e6&oe=5A07F05F';
const author = {name: '9at8', avatar: profile_picture};
const type = 'profile';

const projects = [
  {
    author: author,
    type: type,
    location: {
      website: 'https://github.com/9at8/School-Manager',
      text: 'Github'
    },
    time: new Date(2015, 2, 13),
    image: '/static/images/profile/school-manager.png',
    caption: 'School Manager, Grade 11 project',
    likes: 0,
    comments: [
      {
        user: 'what_is_this',
        comment: 'A CLI interface to a basic school management system, which uses text files to locally store information',
        time: new Date(2015, 2, 13, 1)
      }, {
        user: 'how_did_you_make_it',
        comment: 'This is made using file handling in Python',
        time: new Date(2015, 2, 13, 2)
      }
    ]
  }, {
    author: author,
    type: type,
    location: {
      website: 'https://github.com/9at8/PiCamFossasia',
      text: 'Github'
    },
    time: new Date(2015, 11, 15),
    image: '/static/images/profile/pi-cam.png',
    caption: 'A python script that clicks 10 pictures from a Raspberry Pi and then commits everything into a github repository',
    likes: 0,
    comments: [
      {
        user: 'but_why',
        comment: 'This was completed as a task for Fossasia for Google Code-in 2015',
        time: new Date(2015, 11, 15, 2)
      }
    ]
  }, {
    author: author,
    type: type,
    location: {
      website: 'https://github.com/9at8/Distance-Finder',
      text: 'Github'
    },
    time: new Date(2016, 1, 10),
    image: '/static/images/profile/distance-finder.png',
    caption: 'Calculates the distance between two points (GPS co-ordinates) on the Earth using the haversine formula',
    likes: 0,
    comments: [
      {
        user: 'but_why',
        comment: 'This was completed as a task for Fossasia for Google Code-in 2015',
        time: new Date(2016, 1, 10, 2)
      }
    ]
  }, {
    author: author,
    type: type,
    location: {
      website: 'https://github.com/9at8/MySQL-Manager',
      text: 'Github'
    },
    time: new Date(2016, 2, 3),
    image: '/static/images/profile/mysql-manager.png',
    caption: 'MySQL Manager: Grade 12 project',
    likes: 0,
    comments: [
      {
        user: 'what_is_this',
        comment: 'A python module which generates and logs MySQL queries for dropping, deleting, altering or inserting values into tables',
        time: new Date(2016, 2, 3, 1)
      }, {
        user: 'but_why',
        comment: 'The described operations had always been something that I didn\'t want to go through, so I created this!',
        time: new Date(2016, 2, 3, 2)
      }
    ]
  }, {
    author: author,
    type: type,
    location: {
      website: 'https://github.com/9at8/Synk',
      text: 'Github'
    },
    time: new Date(2016, 4, 16),
    image: '/static/images/profile/synk.png',
    caption: 'Synk: Files and folders synchronization app',
    likes: 0,
    comments: [
      {
        user: 'what_is_this',
        comment: 'A python module which helps you synchronize files and folders both locally and over the cloud (Google Drive)',
        time: new Date(2016, 4, 16, 1)
      }, {
        user: 'but_why',
        comment: 'Keeping track of files and folders can be a hassle. This project aims to reduce that hassle!',
        time: new Date(2016, 4, 16, 2)
      }
    ]
  }, {
    author: author,
    type: type,
    location: {
      website: 'https://devpost.com/software/sign-language-translator',
      text: 'Devpost'
    },
    time: new Date(2016, 10, 6),
    image: '/static/images/profile/sign-language-translator.png',
    caption: 'Sign Language Translator',
    likes: 0,
    comments: [
      {
        user: 'what_is_this',
        comment: 'This application translates American Sign Language (ASL) into text and speech in order to make communication more effective.',
        time: new Date(2016, 10, 6, 1)
      }, {
        user: 'but_why',
        comment: 'Our team realized that an overlooked issue in society is clear communication. This lead to discussing the community of signers and how it must be difficult to integrate into a society of fluent english speakers. Sign Language Translator allows users to communicate with others easier and helps to alleviate disadvantages in society.',
        time: new Date(2016, 10, 6, 2)
      },
      {
        user: 'awards',
        comment: 'We secured the first place and won the Most Innovative Hack at EC Hacks!'
      }
    ]
  }, {
    author: author,
    type: type,
    location: {
      website: 'https://github.com/9at8/EmergencyBroadcast',
      text: 'Github'
    },
    time: new Date(2016, 10, 19),
    image: '/static/images/profile/emergency-broadcast.png',
    caption: 'Emergency Broadcast',
    likes: 0,
    comments: [
      {
        user: 'what_is_this',
        comment: 'Emergency Broadcast uses a Raspberry Pi 2 to transmit sound to nearby areas in the form of Radio Waves over the frequency range of 88.0 MHz to 107.0 MHz',
        time: new Date(2016, 10, 19, 1)
      }, {
        user: 'scientific_info_1',
        comment: 'One of the GPIO pins on the Raspberry Pi is capable of transmitting FM signals, but it can\'t be used without an antenna',
        time: new Date(2016, 10, 19, 2)
      }, {
        user: 'scientific_info_2',
        comment: 'Even after attaching the antenna to the pin, the radio could only pick up the FM signals only in a particular orientation',
        time: new Date(2016, 10, 19, 3)
      }, {
        user: 'scientific_info_3',
        comment: 'To fix this, I bent the antenna twice, so that radio waves are transmitted parallel to all three axes. This fixed the problem I was facing',
        time: new Date(2016, 10, 19, 4)
      }, {
        user: 'how_did_i_make_it',
        comment: 'Emergency Broadcast heavily relies on the PiFmRds library, which helps broadcast FM signals',
        time: new Date(2016, 10, 19, 5)
      }
    ]
  }, {
    author: author,
    type: type,
    location: {
      website: 'https://devpost.com/software/handle',
      text: 'Devpost'
    },
    time: new Date(2017, 0, 27),
    image: '/static/images/profile/handle.png',
    caption: 'Handle: Handles and lets you handle groceries',
    likes: 0,
    comments: [
      {
        user: 'what_is_this',
        comment: 'Developed a mobile app that reduces time wasted during grocery shopping by matching a person with someone else at the store who can home deliver groceries',
        time: new Date(2017, 0, 27, 2)
      }
    ]
  }, {
    author: author,
    type: type,
    location: {
      website: 'https://github.com/lliepert/heimdallr',
      text: 'Github'
    },
    time: new Date(2017, 4, 8),
    image: '/static/images/profile/heimdall.png',
    caption: 'Heimdall',
    likes: 0,
    comments: [
      {
        user: 'what_is_this',
        comment: 'application to search through newly uploaded images on social media platforms and compare with missing persons databases in attempt to locate said persons',
        time: new Date(2017, 4, 8, 2)
      }
    ]
  }, {
    author: author,
    type: type,
    location: null,
    time: new Date(2017, 6, 1),
    image: '/static/images/profile/monopoly-deal.png',
    caption: 'Monopoly Deal Card Game',
    likes: 0,
    comments: [
      {
        user: 'what_is_this',
        comment: 'An implementation of the famous Monopoly Deal card game for Android using React Native',
        time: new Date(2017, 6, 1, 1)
      }, {
        user: 'what_am_i_contributing',
        comment: 'I created the card component and set up React Native Navigator, which helps navigate (duh) between different views',
        time: new Date(2017, 6, 1, 3)
      }, {
        user: 'omg_when_will_it_be_out',
        comment: 'It\'s still a work in progress, but we are working hard to complete this project!',
        time: new Date(2017, 6, 1, 3)
      }
    ]
  }
];

module.exports = {projects};

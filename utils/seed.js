const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
//   await Course.deleteMany({});

  // Drop existing Users
  await User.deleteMany({});

  // Drop existing Thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the students
  const users = [];
  const thoughts = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const thoughtText = getRandomThoughts();
    // let thoughtInfo = thoughts;
   // let thoughtScore = thoughts.score;

    // console.log(thoughtsText);
   // console.log('Info',thoughtInfo);
   // console.log('Score',thoughtScore);

    const fullName = getRandomName();
   // console.log('fullname',fullName)
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
   // const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;
    const username = first.charAt(0) + '_' + last.substring(0,last.length);

    const email = username+'@gatech.edu'
   
    console.log(username);
    users.push({
      username,
      email,
      thoughtText,
      
    });

    thoughts.push({thoughtText})


  }
  

  // Add students to the collection and await the results
  await User.collection.insertMany(users);

  await Thought.collection.insertMany(thoughts);

  // Add courses to the collection and await the results
//   await Course.collection.insertOne({
//     courseName: 'UCLA',
//     inPerson: false,
//     students: [...students],
//   });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
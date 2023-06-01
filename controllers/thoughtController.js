const { ObjectId } = require('mongoose').Types;
const { User, Thought, Reaction } = require('../models');


module.exports = {
    // Get all thoughts
    getAllThoughts(req, res) 
    {
      Thought.find()
        .then(async (user) => {
          const userObj = {
            user,
            // headCount: await headCount(),
          };
          return res.json(userObj);
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },

   // create a new thought
   createThought(req, res) {
      Thought.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
   },

   // get single thought
   getSingleThought(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
              user,
              //grade: await grade(req.params.studentId),
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  



}
const { ObjectId } = require('mongoose').Types;
const { User, Thought, Reaction } = require('../models');


module.exports = {
    // Get all users
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

   // create a new User
   createThought(req, res) {
      Thought.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
   },

}
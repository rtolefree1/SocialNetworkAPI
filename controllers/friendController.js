const { ObjectId } = require('mongoose').Types;
const { User, Thought, Reaction } = require('../models');


module.exports = {

  // Updates and application using the findOneAndUpdate method. Uses the ID, and the $set operator in mongodb to inject the request body. Enforces validation.
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
    //   { $addToSet: { friends: req.body } },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(application)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

   // Delete a user
   deleteFriend(req, res) {
    Friend.findOneAndRemove({ _id: req.params.userId })
      .then((user) => res.json(user))
      //   !user
      //     ? res.status(404).json({ message: 'No such user exists' })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
}
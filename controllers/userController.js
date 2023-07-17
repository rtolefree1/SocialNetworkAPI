const { ObjectId } = require('mongoose').Types;
const { User, Thought, Reaction } = require('../models');


module.exports = {
    // Get all users
    getAllUsers(req, res) {
      User.find()
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

    // Get a single user
    getSingleUser(req, res) {
      User.findOne({ _id: req.params.userId })
        .select('-__v')
       // .populate('thoughts')
      /** .populate('reactions')*/
        .then(async (user) =>
        //.then(async (user) =>
          !user
          // use populate
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(user)
        )
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // create a new User
    createUser(req, res) {
      User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    // Delete a user
    deleteUser(req, res) {
      User.findOneAndRemove({ _id: req.params.userId })
        .then((user) => res.json(user))
        //   !user
        //     ? res.status(404).json({ message: 'No such user exists' })
            // : Course.findOneAndUpdate(
            //     { students: req.params.studentId },
            //     { $pull: { students: req.params.studentId } },
            //     { new: true }
            //   )
        // )
        // .then((course) =>
        //   !course
        //     ? res.status(404).json({
        //         message: 'Student deleted, but no courses found',
        //       })
        //     : res.json({ message: 'Student successfully deleted' })
        // )
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    },


     // Remove assignment from a student
  // deleteFriend(req, res) {
  //   console.log('userid:',req.params.userId);
  //   console.log('friendId:', req.params.friendId);
  //   console.log(req.params)
  //   User.findOneAndUpdate(
  //     { _id: req.params.userId },
  //     { $pull: { friends: { friendId: req.params.friendId } } },
  //     { runValidators: true, new: true }
  //   )
  //     .then((user) =>
  //       !user
  //         ? res
  //             .status(404)
  //             .json({ message: 'No User found with that friend ID :(' })
  //         : res.json(student)
  //     )
  //     .catch((err) => res.status(500).json(err));
  // },
  

  deleteFriend(req, res) {
    // User.findOneAndRemove({ _id: req.params.userId })
    User.findOneAndUpdate({ _id: req.params.userId },
      { $pull: { friends: req.params.friendId } }, )
      .then((user) =>{
        console.log('user1',user)
        console.log('req user id',req.params.userId )
        
        console.log('req friend Id', req.params.friendId)
        //console.log('id', _id)
        !user
          ? res.status(404).json({ message: 'No such user id exists' })
          // : User.findOneAndUpdate(
          //   // : User.findOneAndRemove(
          //      { _id: req.params.userId },
          //   //   { $pull: { friends: req.params.friends} },
          //   { $pull: { friends: req.params.friendId } },
          //     { new: true }
          //   )
          // })
      // .then((friend) =>{console.log('friend',friend)
      //   !friend
      //     ? res.status(404).json({
      //         message: 'Friend not deleted',
      //       })
          : res.json({ message: 'Friend successfully deleted' })
          })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
    

  updateUser(req, res) {
    console.log('body',req.body)
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
      
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },


  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body } },
      // { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },


  // getAllReactions(req, res) {
  //   Reaction.find()
  //     .then(async (reaction) => {
  //       const reactionObj = {
  //         reaction,
  //         // headCount: await headCount(),
  //       };
  //       return res.json(reactionObj);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return res.status(500).json(err);
  //     });
  // },

  // // create a new reaction
  // createReaction(req, res) {
  //   // console.log("Reaction body",req.body);
  //   Reaction.create(req.body)
  //      .then((reaction) => res.json(reaction))
  //      .catch((err) => res.status(500).json(err));
  //  },

  //  // Delete a reaction
  //  deleteReaction(req, res) {
  //    Reaction.findOneAndRemove({ _id: req.params.reactionId })
  //      .then((reaction) => res.json(reaction))
  //      //   !user
  //      //     ? res.status(404).json({ message: 'No such user exists' })
  //      .catch((err) => {
  //        console.log(err);
  //        res.status(500).json(err);
  //      });
  //  },

  };
  
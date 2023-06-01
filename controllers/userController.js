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
  
    // // Add an assignment to a user
    // addAssignment(req, res) {
    //   console.log('You are adding an assignment');
    //   console.log(req.body);
    //   Student.findOneAndUpdate(
    //     { _id: req.params.studentId },
    //     { $addToSet: { assignments: req.body } },
    //     { runValidators: true, new: true }
    //   )
    //     .then((student) =>
    //       !student
    //         ? res
    //             .status(404)
    //             .json({ message: 'No student found with that ID :(' })
    //         : res.json(student)
    //     )
    //     .catch((err) => res.status(500).json(err));
    // },
    // // Remove assignment from a student
    // removeAssignment(req, res) {
    //   Student.findOneAndUpdate(
    //     { _id: req.params.studentId },
    //     { $pull: { assignment: { assignmentId: req.params.assignmentId } } },
    //     { runValidators: true, new: true }
    //   )
    //     .then((student) =>
    //       !student
    //         ? res
    //             .status(404)
    //             .json({ message: 'No student found with that ID :(' })
    //         : res.json(student)
    //     )
    //     .catch((err) => res.status(500).json(err));
    // },

    // Update a user
  updateUser(req, res) {

    console.log(req.body)

    User.findOneAndUpdate(

      { _id: req.params.userId },
      { 
        $set: req.body,
        thoughtText: req.thoughtText 
      },

      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

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
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },


  };
  
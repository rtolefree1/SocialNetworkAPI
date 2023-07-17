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
   // create th, get tht id, and set to tht id, 
   createThought(req, res) {
      Thought.create(req.body) 
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
   },

//   createThought(req, res) {
//     Thought.create(req.body) 
//     .then((user) => { 
//       !user
//       ? res.status(404).json({message: "No thought"})
//       : User.findOneAndUpdate(
//         {_id: req.params.userId},
//         {$addToSet: { thoughtId: user.userId}},
//         {runValidators: true, new: true}
//       )
//       .then((user) =>
//       !user
//         ? res.status(404).json({message: 'No User thoughts'})
//         : res.json(user)
//       )
//       .catch((err) => res.status(500).json(err));
        
//  })
// },

   // get single thought
   getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user thought with that ID' })
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

      // Adds a tag to an application. This method is unique in that we add the entire body of the tag rather than the ID with the mongodb $addToSet operator.
  createReaction(req, res) {
    console.log('Reaction body',req.body)
    console.log('user id', req.params.thoughtId)
    Reaction.create(req.body).then((reaction) =>{
      !reaction
        ? res.status(404).json({message: "No reaction to this thought"})
        : Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            // {$set: req.body},
            { $addToSet: { reactionBody: reaction.reactionId } },
            { runValidators: true, new: true }
          )
            .then((thought) =>
              !thought
                ? res.status(404).json({ message: 'No User thoughts with this id!' })
                : res.json(thought)
            )
            .catch((err) => res.status(500).json(err)); 
    })
    // Thought.findOneAndUpdate(
    //   { _id: req.params.thoughtId },
    //   {$set: req.body},
    //   // { $addToSet: { reactionBody: req.body } },
    //   { runValidators: true, new: true }
    // )
    //   .then((thought) =>
    //     !thought
    //       ? res.status(404).json({ message: 'No User thoughts with this id!' })
    //       : res.json(user)
    //   )
    //   .catch((err) => res.status(500).json(err));
  },
  // Remove application tag. This method finds the application based on ID. It then updates the tags array associated with the app in question by removing it's tagId from the tags array.
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reaction: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },


  updateThought(req, res) {
    console.log('body',req.body)
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
      
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user thought with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
}
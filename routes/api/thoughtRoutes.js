const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addThought,
  updateThought,
  createReaction, 
  deleteReaction

} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/
 router.route('/:thoughtId/').get(getSingleThought);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:thoughtId/assignments/:assignmentId').delete(removeThought);

// /api/thoughts/:thoughtId/reaction
router.route('/:thoughtId/reaction').put(createReaction);

// /api/thoughts/:thoughtId/reaction
router.route('/update/:thoughtId/').post(updateThought);


// /api/thoughts/:thoughtId/reaction/:reactionId
router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction);

module.exports = router;
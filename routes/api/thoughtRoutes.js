const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addThought,
  removeThought,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/
 router.route('/:thoughtId/').get(getSingleThought);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:thoughtId/assignments/:assignmentId').delete(removeThought);

module.exports = router;
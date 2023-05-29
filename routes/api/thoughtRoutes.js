const router = require('express').Router();
const {
  getAllThoughts,
//   getSingleUser,
  createThought,
//   deleteUser,
//   addUser,
//   removeUser,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

module.exports = router;
const router = require('express').Router();
const {
  getAllUsers,
//   getSingleUser,
  createUser,
//   deleteUser,
//   addUser,
//   removeUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/students/:studentId
// router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/students/:studentId/assignments
// router.route('/:userId/assignments').post(addUser);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeUser);

module.exports = router;
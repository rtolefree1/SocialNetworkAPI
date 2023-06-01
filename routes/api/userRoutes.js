const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend,
//   addUser,
//   removeUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/students/:studentId/assignments
// router.route('/:userId/thoughts').post(addUser);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeUser);


// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/').post(addFriend).delete(deleteUser);

module.exports = router;
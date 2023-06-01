const router = require('express').Router();
const {
  addFriend,

} = require('../../controllers/friendController');



// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').put(addFriend).delete(deleteFriend);

// /api/students/:studentId/assignments
// router.route('/:userId/thoughts').post(addUser);

// /api/students/:studentId/assignments/:assignmentId
 router.route('/:studentId/assignments/:assignmentId').delete(removeUser);

module.exports = router;
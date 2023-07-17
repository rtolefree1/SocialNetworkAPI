const router = require('express').Router();
// const courseRoutes = require('./courseRoutes');
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes')
// const reactionRoutes = require('./reactionRoutes')

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);


module.exports = router;
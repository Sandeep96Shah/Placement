const express = require('express');
const passport = require('passport');
const router = express.Router();

router.use('/student', passport.authenticate('jwt', {session: false}), require('./student'));

router.use('/interview', passport.authenticate('jwt', {session: false}), require('./interview'));

router.use('/user', require('./user'));

router.get('/', (req,res) => {
    return res.send('<h1>Welcome Dear!!!!</h1>');
})

module.exports = router;
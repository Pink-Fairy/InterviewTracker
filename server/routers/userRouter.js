// create User object that will have user schema
const router = require('express').Router(); // creates router variable that has router capabilities
const userController = require('../controllers/userController');
const auth = require('../controllers/auth');

// this router is activated on : /users

// registration user (post)
router.post('/register', userController.userRegistration);

// login user (post)
router.post('/login', userController.userLogin);

// token verify (get)
router.get('/verify', userController.verifiedToken);

//userController.verifiedToken

module.exports = router;

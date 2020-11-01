const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/usermodel');


const userController = {
    userRegistration: async (req, res) => {
      try {
         // saving user's input
          const { username, email, password } = req.body; 
          // check in email already exists
          const user = await User.findOne({ email });
          if(user) return res.status(400).json({
            message: 'The email already exist'
          })
 
          // encode password
          const passwordHash = await bcrypt.hash(password, 10);

          // create a new user
          const newUser =  new User ({username, email, password: passwordHash})

          await newUser.save();

          res.json({
            message: 'New User successfully created'
          })
      } catch (error) {
         return res.status(500).json({
            message: "problem with register"
          })
      }
    },
    
    userLogin: async (req, res) => {
      try {
         // saving user's input
         const { email, password } = req.body; 
        
          // check in email already exists
          const user = await User.findOne({ email });
          if(!user) return res.status(400).json({
            message: 'The email does not exist'
          })

          // match password with the email
          const isMatched = await bcrypt.compare(password, user.password)
          if(!isMatched) return res.status(400).json({
            message: 'incorrect password'
          })
          // if login is successful create a new token
          const payload = {
            id: user._id,
            name: user.username
          }
          // create a token 
          const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
            expiresIn: '1d'
          });
          // send this token in the front end 
          res.json({token})
        }
      catch (err) {
        return res.status(500).json({
          message: err.message
        });
      }
    },
    
    verifiedToken: (req, res) => {
      try {
        const token = req.header("Authorization");
         if(!token) return res.send(false); // prevent to log in 

         // check if token exist 
         jwt.verify(token, process.env.TOKEN_SECRET, async (err, verified) => {
           if(err) return res.send(false);
           const user = await User.findById(verified.id);
           if(!user) return res.send(false);
           return res.send(true)
         })
      }
      catch (err) {
        return res.status(500).json({
          message: err.message
        });
      }
    }
}; 


// middleware to post 


module.exports = userController;
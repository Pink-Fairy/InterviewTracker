// 'jwt' auth = standard way to encrypt pw, etc 
const jwt = require('jsonwebtoken'); 

// creating a token in local storage. how to test in browser:
//dev tolls, application, localStorage
//to test something in postman:
//add the token in headers with Authorization
const auth = (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) return res.status(400).json({ msg: 'Invalid Auth' });
        
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) return res.status(400).json({ msg: 'Auth not valid' }); 
            req.user = user; 
            return next();
        })
    } catch (err) {
         return res.status(500).json({msg: err.message}) // 500 = backend error
    }
}; 

module.exports = auth; 
// 'jot' auth = standard way to encrypt pw, etc 
const jwt = require('jsonwebtoken'); 


const auth = (req, res, next) => {
    try {
        const token = req.headers("Authorization");
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
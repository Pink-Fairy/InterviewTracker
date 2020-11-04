// 'jwt' auth = standard way to encrypt pw, etc
const jwt = require('jsonwebtoken');

/*creating a token in local storage. how to test in browser:
dev tolls, application, localStorage
to test something in postman:
add the token in headers with Authorization*/

const auth = (req, res, next) => {
	try {
		//get the token from the header
		const token = req.header('Authorization');
		// console.log(token)
		//check if token exist
		if (!token) return res.status(400).json({ msg: 'Invalid Auth' });
		//if token, check if it is matching with the user's token
		jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
			if (err) return res.status(400).json({ msg: 'Auth not valid' });
			req.user = user;
			return next();
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message }); // 500 = backend error
	}
	
};

module.exports = auth;

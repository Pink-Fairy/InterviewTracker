import React, { useState, useEffect } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';
import MainContainer from './Containers/MainContainer.jsx';
import Login from './Login/Login.jsx';

function App() {
	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		//check if a user is logged in successfully
		const checkLogin = async () => {
			//get the token from local storage
			const token = localStorage.getItem('tokenStore');

			if (token) {
				// verify if user exist
				const verified = await axios.get('./users/verify', {
					headers: { Authorization: token },
				});
				setIsLogin(verified.data);

				//if user does not exist clear the local storage
				if (verified.data === false) return localStorage.clear();
			} else {
				//if no token set the setIsLogin to false
				setIsLogin(false);
			}
		};
		checkLogin();
	}, []);

	return (
		<div className="App">
			{/* if isLogin is true redirect to the MainContainer and if false to the Login page */}
			{isLogin ? (
				<MainContainer setIsLogin={setIsLogin} />
			) : (
				<Login setIsLogin={setIsLogin} />
			)}
		</div>
	);
}

export default App;

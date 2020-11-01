import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainContainer from './Containers/MainContainer.jsx';
import LoginPage from './Login/LoginPage.jsx';

function App() {
 const [isLogin, setIsLogin] = useState(false);
   
  useEffect(()=> {
   const checkLogin = async () => {
     const token = localStorage.getItem('tokenStore');
     if (token) {
       const verified = await axios.get('./users/verify', {
         headers:{Authorization: token}
       })
       setIsLogin(verified.data)
       if(verified.data === false) return localStorage.clear();
     } else {
       setIsLogin(false)
     }
   }
   checkLogin()
 }, [])


return (
  <div className="App">

    {
      isLogin 
      ? <MainContainer setIsLogin={setIsLogin} />
      : <LoginPage setIsLogin={setIsLogin} />
    }
  </div>
)
}

export default App;

{/* <div>
<h1>Hello</h1>
<MainContainer />
</div> */}

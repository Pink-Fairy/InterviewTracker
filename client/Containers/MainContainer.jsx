import React, { Component } from 'react';
import Mainmenu from "./Mainmenu.jsx";
import Welcome from "./Welcome.jsx";


export default class MainContainer extends Component {
  render() {
    return (
      <div>
        <>
          <Mainmenu />
         <Welcome />
        </>
        
      </div>
    )
  }
}

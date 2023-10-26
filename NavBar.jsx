import React, { useState } from "react";

import './NavBar.css'
function navbar(){

    return(
            <div class="topnav">
      <a class="active" href="#home"> DEV@Deakin </a>
      <input type="text" placeholder="Search.."/>
      <a class="a" href="#post">Post</a>
      <a class="a" href="#contact">Login</a>

        </div>
    )
}
export default navbar 
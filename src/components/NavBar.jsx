import React from "react";
import stylled from "styled-components"

const NavbarDiv= stylled.div`
display: flex;
justify-contents : space-between;
padding : 50px;
background-color: teal;
color : white;
text-decoration :none; 
gap : 200px;

`


const NavBar= () => {
    return (
        <> 
        <NavbarDiv >
            <a href="./Home.jsx">HOME</a> 
            <a href="">Movies</a> <a href="./Login.jsx">Login</a><a href="">Bookings</a>
            
        </NavbarDiv>
        </>
    )
}


export default NavBar
import React from "react";
import NavBar from "./NavBar";


const Movies = React.useEffect(() => {
    const data=fetch(``).then(()=>{return data1.json()}).then((res)=>{
        console.log(res)
    }).catch(()=>{
        console.log(error)
    })

},[]) 

const Home = () => {
    return (
        <>
        <NavBar></NavBar>
        <h1>Home</h1>

       
        </>
    )
}


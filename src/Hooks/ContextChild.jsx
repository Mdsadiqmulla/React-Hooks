import React, { useContext } from "react"
import { data, data1 } from "../App"



const ContextChild = () => {
    const name = useContext(data);
    const profession = useContext(data1);
    return(
        <>
        <h1> Hi My name is {name} and I'm a {profession} </h1>
        </>
    )

}



export default ContextChild
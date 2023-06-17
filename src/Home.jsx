import React,{useState, } from "react";


const Home = () => {
    const [a, setA] = useState(0);

    

    return (
        <div>
            <button onClick={() => setA(a+1)}>+</button>
            <p>{a}</p>
            <button onClick={() => setA(a-1)}>-</button>
        </div>
    )

}



export default Home;
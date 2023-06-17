import React, { createContext } from "react";
import Home from "./Hooks/Home";
import UseEffect from "./Hooks/UseEffect";
import UseRef from "./Hooks/UseRef";
import Example from "./Hooks/Example";
import ContextChild from "./Hooks/ContextChild";
import UseParams from "./Hooks/UseParams";
import ParamsChild from "./Hooks/ParamsChild";

const data = createContext();
const data1 = createContext();


function App() {

  const name = "Sadiq"
  const profession = "Frontend Engineer"
  
  return (
    <div>
    <Home/>
    <UseEffect/>
    <UseRef></UseRef>
    <Example></Example>
    <data.Provider value={name}>
      <data1.Provider value={profession}>
      <ContextChild></ContextChild>
      </data1.Provider>
    </data.Provider>
    <UseParams></UseParams>
    <ParamsChild></ParamsChild>
    </div>
  )
}

export default App;
export {data, data1}

import React, { useEffect, useState } from "react";

const ExampleEffect:React.FC = () => {
const [count, setCount] = useState(0);
   useEffect(() => {
    console.log("Component render at every update");
   },[count])

    return(
        <>
        <h2>This is {count} </h2>
        <button onClick={() => setCount(count + 1)}>click me</button>
       </>
    )
}

export default ExampleEffect;


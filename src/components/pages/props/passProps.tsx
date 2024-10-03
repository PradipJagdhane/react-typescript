import React from "react";
import GetProps from "./getProps";

const PassProps:React.FC = () => {
    const propsData = ["Pradip", "Adarsh", "Abhi", "AK"];
    return(
        <div>
        <h2> Pass props </h2>
        <GetProps data={propsData}/>
        </div>
    );
};


export default PassProps;
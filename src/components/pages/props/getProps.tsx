import React from "react";

interface DataProps{
    data: string[];
}

const GetProps:React.FC<DataProps> = ({data}) => {
    return(
        <div>
       {data.map((item, index) => (
          <p key={index}>{item}</p>
       ))}
        </div>
        
    )
}

export default GetProps;



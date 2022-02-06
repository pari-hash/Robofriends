import React from "react";
// import { robots } from "./robot";

const Card=(props)=>
{
    return(
       <div className="tc bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5">
           <img alt='robots' src={`https://robohash.org/${props.id}?200X200`}/>
           <div>
               <h2>{props.name}</h2>
               <p>{props.email}</p>
           </div>
       </div>
    );
}

export default Card;
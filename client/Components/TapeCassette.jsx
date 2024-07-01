import React from "react";

const TapeCassette = ({source}) => { 
  return(
    <audio controls src = {source}></audio>
  )
  
}

export default TapeCassette
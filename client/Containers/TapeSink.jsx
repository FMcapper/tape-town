import React, { useState } from 'react';
import FileSelector from '../Components/FileSelector.jsx';
import TapeCassette from '../Components/TapeCassette.jsx';

const TapeSink = () => {
  const [tapeState, updateTape] = useState([
    'dev/test_audio/DOSE_CECE_CALHOUN.m4a',
    'dev/test_audio/Cece Calhoun JOEL.m4a',
  ]);
  const cassettes = [];
  // const sources = [
  //   'dev/test_audio/DOSE_CECE_CALHOUN.m4a',
  //   'dev/test_audio/Cece Calhoun JOEL.m4a',
  // ];

  const tapeChange = (e) => {
    const tapes = [];
    const files = e.target.files;

    console.log(files)

    for(let i = 0; i<files.length; i++){
      tapes.push({url: URL.createObjectURL(files[i]), tapeName: files[i].name})
    }
    
  
    updateTape(tapes)
  };

  tapeState.forEach((el, i) => {
    cassettes.push(<TapeCassette key={`tape${i}`} source={el.url} tapeName = {el.tapeName}/>);

    //cassettes.push(new Audio(el))
  });

  return (
    <div id='sink'>
      <FileSelector tapeChange = {tapeChange}/>
      {cassettes}
    </div>
  );
};

export default TapeSink;

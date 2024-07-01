import React from 'react';
import FileSelector from '../Components/FileSelector.jsx';
import TapeCassette from '../Components/TapeCassette.jsx';

const TapeSink = () => {
  const cassettes = [];
  const sources = [
    'dev/test_audio/DOSE_CECE_CALHOUN.m4a',
    'dev/test_audio/Cece Calhoun JOEL.m4a',
  ];

  sources.forEach((el, i) => {
    cassettes.push(
      <TapeCassette key = {`tape${i}`} source = {el}/>
    )
  })

  return (
    <div id="sink">
      <FileSelector />
      {cassettes}
    </div>
  );
};

export default TapeSink;

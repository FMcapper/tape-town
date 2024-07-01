import React from 'react';

const TapeCassette = ({ source, tapeName }) => {
  return (
    <>
      <h3>{tapeName}</h3>

      <audio controls src={source}></audio>
    </>
  );
};

export default TapeCassette;

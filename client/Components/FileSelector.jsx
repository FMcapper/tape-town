import React from 'react';

const FileSelector = ({tapeChange}) => {
  // const onChange = (e) => {
  //   console.log(URL.createObjectURL(e.target.files[0]));
  // };
  return <input type='file' id='input' multiple onChange={tapeChange} />;
};

export default FileSelector;

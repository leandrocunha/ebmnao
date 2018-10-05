import React from 'react';
import Dropzone from 'react-dropzone';
import applyWatermark from '../utils';

const App = () => (
  <section>
    <h1>#EBMNAO</h1>
    <Dropzone onDrop={file => applyWatermark(file)}>
      <p>Try dropping some files here, or click to select files to upload.</p>
    </Dropzone>
    <div id="composite-image" />
  </section>
);

export default App;

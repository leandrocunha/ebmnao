import React from 'react';
import Dropzone from 'react-dropzone';
import applyWatermark from '../utils';
import Header from './Header';

const App = () => (
  <section>
    <Header />
    <div className="Main">
      <Dropzone onDrop={file => applyWatermark(file)}>
        <p>Try dropping some files here, or click to select files to upload.</p>
      </Dropzone>
      <div id="composite-image" />
    </div>
  </section>
);

export default App;

import React, { Component } from "react";
import watermarkjs from "watermarkjs";
import Dropzone from "react-dropzone";

class App extends Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }

  applyWatermark(avatar) {
    const watermark = "./../images/moldura-ebm.png";

    watermarkjs([avatar[0].preview, watermark])
      .image(watermarkjs.image.lowerRight())
      .then(img => {
        img.style.width = "300px";
        img.style.height = "300px";
        document.getElementById("composite-image").appendChild(img);
      });
  }

  onDrop(file) {
    this.applyWatermark(file);
  }

  render() {
    return (
      <section>
        <h1>#EBMNAO</h1>
        <Dropzone onDrop={this.onDrop}>
          <p>
            Try dropping some files here, or click to select files to upload.
          </p>
        </Dropzone>
        <div id="composite-image" />
      </section>
    );
  }
}

export default App;

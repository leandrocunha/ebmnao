import React, { Component } from 'react';
import watermarkjs from 'watermarkjs';

class App extends Component {
  componentDidMount() {
    const file = '../images/user.jpeg';
    const watermark = '../images/crf.png';

    watermarkjs([file, watermark])
      .image(watermarkjs.image.lowerRight())
      .then((img) => {
        document.getElementById('composite-image').appendChild(img);
      });
  }

  render() {
    return (
      <section>
        <h1>#EBMNAO</h1>
        <div id="composite-image" />
      </section>
    );
  }
}

export default App;

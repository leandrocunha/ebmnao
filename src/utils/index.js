import watermarkjs from 'watermarkjs';

const applyWatermark = (avatar) => {
  const watermark = './../images/moldura-ebm.png';

  watermarkjs([avatar[0].preview, watermark])
    .image(watermarkjs.image.lowerRight())
    .then((img) => {
      document.getElementById('composite-image').appendChild(img);
    });
};

export default applyWatermark;

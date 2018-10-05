import watermarkjs from 'watermarkjs';

function marcadagua(file) {
  const watermark = './../images/moldura-ebm-2.png';

  watermarkjs([file, watermark])
    .image(watermarkjs.image.atPos(() => 0, () => 0, 1))
    .then((img) => {
      const target = document.getElementById('ribbon');
      target.removeChild(target.firstChild);
      target.appendChild(img);
    });
}

function resize(file) {
  const width = 300;
  const height = 300;
  const reader = new FileReader();

  reader.readAsDataURL(file[0]);
  reader.onload = (event) => {
    const img = new Image();
    img.src = event.target.result;

    img.onload = () => {
      const elem = document.createElement('canvas');
      const scaleFactor = width / img.width;
      const center = height - img.height * scaleFactor;

      elem.width = width;
      elem.height = height;

      const ctx = elem.getContext('2d');

      ctx.drawImage(img, 0, center, width, img.height * scaleFactor);

      const URI = elem.toDataURL('image/jpg');
      const imgfinal = new Image();
      imgfinal.src = URI;

      // document.getElementById('ribbon').appendChild(imgfinal);
      marcadagua(URI);
    };
    reader.onerror = error => console.log(error);
  };
}

const applyWatermark = (avatar) => {
  resize(avatar);
};

export default applyWatermark;

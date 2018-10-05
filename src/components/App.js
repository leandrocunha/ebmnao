import React from 'react';
import Dropzone from 'react-dropzone';
import applyWatermark from '../utils';
import Header from './Header';
import Footer from './Footer';

const App = () => (
  <section>
    <Header />
    <p className="Disclaimer">
      {`"Acima de tudo Rubro-Negro!" Apoie essa causa e vamos lutar para ter o nosso Flamengo vencedor
      de volta! #ebmnao`}
    </p>
    <div className="Main">
      <div className="Main__Dropzone">
        <Dropzone onDrop={file => applyWatermark(file)}>
          <p>Arraste a sua foto aqui ou clique para escolher.</p>
        </Dropzone>
      </div>
      <div className="Main__Arrow">
        <img alt="arrow" src="./../images/arrow-right.svg" />
      </div>
      <div className="Main__Output Main__Output--ribbon" id="ribbon">
        <p>Sua foto aparecerá aqui clique com o botão direto e escolha "Salvar como..."</p>
      </div>
    </div>
    <Footer />
  </section>
);

export default App;

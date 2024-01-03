import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Decouvrir(props) {
  const containerStyle = {
    position: 'relative',
    height: '500px',
    margin: '0',
    width: '490px',
  };

  const backgroundStyle = {
    background: 'linear-gradient(to top, #000000, #333333)',
    backgroundSize: 'cover',
    height: '100%',
  };

  const buttonStyle = {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: '1rem',
    zIndex: 2,
  };

  const imageStyle1 = {
    backgroundImage: `url(${require('../images/tenues-cat-1.png')})`,
  };

  const imageStyle2 = {
    backgroundImage: `url(${require('../images/entrainement-cat-1.png')})`,
  };
  const imageStyle3 = {
    backgroundImage: `url(${require('../images/cadeaux-cat-1.png')})`,
  };

  return (
    <div className='d-flex container-fluid w-100  justify-content-between'>
      <div style={containerStyle}>
        <div style={{ ...backgroundStyle, ...imageStyle1 }}>
          <button className="decovriRbutton" style={{ ...buttonStyle }}>
            Découvrir &gt;
          </button>
        </div>
      </div>
      <div style={containerStyle}>
        <div style={{ ...backgroundStyle, ...imageStyle2 }}>
          <button className="decovriRbutton" style={{ ...buttonStyle }}>
            Découvrir &gt;
          </button>
        </div>
      </div>
      <div style={containerStyle}>
        <div style={{ ...backgroundStyle, ...imageStyle3 }}>
          <button className="decovriRbutton" style={{ ...buttonStyle }}>
            Découvrir &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Decouvrir;

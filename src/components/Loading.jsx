import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loading = () => {
  return (
    <div className="loading-container" style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F2F2F2',
      zIndex: 9999
    }}>
      <DotLottieReact
        src="https://lottie.host/fcdd313b-78f9-45b1-bdd4-60116280683d/lFZvOSi50A.lottie"
        loop
        autoplay
        style={{ width: '200px', height: '200px' }}
      />
    </div>
  );
};

export default Loading; 
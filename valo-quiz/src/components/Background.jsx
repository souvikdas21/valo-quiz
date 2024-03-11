import React from 'react';
import bg1 from '../assets/video/neon.mp4';

function Background() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      <video src={bg1} autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
}

export default Background;

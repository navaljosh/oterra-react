import React, { useEffect, useRef } from 'react';

function VideoBG() {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          const constraints = {
            video: {
              facingMode: { exact: 'environment' }, // Use the rear camera if available
              width: { ideal: 1280 },
              height: { ideal: 720 },
            },
          };
          const stream = await navigator.mediaDevices.getUserMedia(constraints);
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } else {
          console.error('getUserMedia is not supported on your browser.');
        }
      } catch (error) {
        console.error('Error accessing the camera: ', error);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);
  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
        zIndex: -1,
        // background: '#000'
      }}
    />
  );
}

export default VideoBG;

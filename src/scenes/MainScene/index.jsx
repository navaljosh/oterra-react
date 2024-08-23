import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import AppHeader from '../../components/AppHeader';
import VideoBG from '../../components/VideoBG';
import AppFooter from '../../components/AppFooter';
import { useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import arIcon from '../../assets/ar.png';
import { getText } from '../../languageTexts';
import AppMenu from '../AppMenu';

export const isObjectEmpty = (obj = {}) => {
  if (obj === null || obj === undefined) return true;
  return Object.keys(obj).length === 0;
};

function MainScene() {
  const selectedApp = useSelector((appReducer) => appReducer.selectedApp);
  const memoizedSelectedApp = useMemo(() => selectedApp || {}, [selectedApp]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isObjectEmpty(memoizedSelectedApp)) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 8000);
    }
  }, [memoizedSelectedApp]);
  return (
    <>
      <AppHeader />
      <VideoBG />
      {/* Iframe */}
      <div
        className={styles.appIFrame}
        style={{
          height: '100vh',
        }}
      >
        <iframe
          id='visor'
          style={{
            border: 'none',
          }}
          src={selectedApp.arLink}
          title='onrix'
          width='100%'
          height='100%'
          allow='web-share;camera;gyroscope;accelerometer;magnetometer;autoplay;fullscreen;xr-spatial-tracking;geolocation;'
        />
      </div>
      {/* Iframe End */}
      <AppFooter />
      <Popup
        open={open}
        modal
        closeOnDocumentClick
        onClose={() => setOpen(false)}
        overlayStyle={{
          background: '#ffffff70'
        }}
      >
        <div className='infoModal'>
          <div className={styles.contentInfo}>
            <div className={styles.arIcon}>
              <img src={arIcon} alt='ar' />
            </div>
            <div className={styles.points}>
              {getText('to_enjoy_ar_title')}
              <ul>
                <li>{getText('maintain_good_lighting')}</li>
                <li>{getText('avoid_direct_sunlight')}</li>
                <li>{getText('avoid_cluttered_space')}</li>
                <li>{getText('keep_two_feet_distance')}</li>
              </ul>
            </div>
          </div>
        </div>
      </Popup>
      <AppMenu />
    </>
  );
}

export default MainScene;

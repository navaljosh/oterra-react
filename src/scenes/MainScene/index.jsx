import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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
  const [footerHeight, setFooterHeight] = useState(104);
  const appSelected =
    useSelector((appReducer) => appReducer.appSelected) || false;

  const iframeRef = useRef();

  useEffect(() => {
    if (!isObjectEmpty(memoizedSelectedApp)) {
      setOpen(true);
    }
  }, [memoizedSelectedApp]);

  const sendDataToIframe = (data) => {
    const iframe = document.getElementById('visor'); // Adjust with your iframe's ID
    if (iframe) {
      iframe.contentWindow.postMessage(data, 'https://studio.onirix.com');
    }
  };

  useLayoutEffect(() => {
    sendDataToIframe({ action: 'customData', payload: 'your data here' });
  }, []);

  const [selectedTab, setSelectedTab] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    const footerHeight = document.getElementById('appFooter').clientHeight;
    setFooterHeight(footerHeight);
  }, []);

  useEffect(() => {
    const handleMessage = (event) => {
      if (!event.data.loaded ?? false) return;
      setLoaded(event.data.loaded);
      console.log('Received data from iframe -->:', event);
    };
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <>
      <AppHeader
        setSelectedTab={setSelectedTab}
        showTip={showTip}
        setShowTip={setShowTip}
        setLoaded={setLoaded}
      />
      <VideoBG />
      {/* Iframe */}
      <div
        className={styles.appIFrame}
        style={{
          height: `calc(100% - ${footerHeight}px)`,
          background: '#31004c',
        }}
      >
        <iframe
          ref={iframeRef}
          id='visor'
          style={{
            border: 'none',
            zIndex: 2,
            // paddingBottom: `${footerHeight}px`
          }}
          src={selectedApp?.arLink}
          title='onrix'
          width='100%'
          height='100%'
          allow='web-share;camera;gyroscope;accelerometer;magnetometer;autoplay;xr-spatial-tracking;geolocation;'
        />
        <div
          style={{
            height: '100%',
            width: '100%',
            display: loaded ? 'none' : appSelected ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            fontWeight: 600,
            zIndex: 1,
            color: '#fff'
          }}
        >
          Loading AR, Please wait...
        </div>
      </div>
      {/* Iframe End */}
      <AppFooter
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        setShowTip={setShowTip}
      />
      <Popup
        open={open}
        modal
        closeOnDocumentClick={false}
        // onClose={() => setOpen(false)}
        overlayStyle={{
          background: '#ffffff70',
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
            <div className={styles.btnBox}>
              <button onClick={() => setOpen(false)}>OK</button>
            </div>
          </div>
        </div>
      </Popup>
      <AppMenu />
    </>
  );
}

export default MainScene;

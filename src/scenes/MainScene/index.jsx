import React from 'react';
import styles from './index.module.scss';
import AppHeader from '../../components/AppHeader';
import VideoBG from '../../components/VideoBG';
import AppFooter from '../../components/AppFooter';
import { useSelector } from 'react-redux';

function MainScene() {
  const selectedApp =
    useSelector(({ appReducer }) => appReducer.selectedApp) || {};
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
          src={selectedApp.arLink}
          title='onrix'
          width='100%'
          height='100%'
        />
      </div>
      {/* Iframe End */}
      <AppFooter />
    </>
  );
}

export default MainScene;

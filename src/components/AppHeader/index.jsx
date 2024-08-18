import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import info from '../../assets/info.png';
import menu from '../../assets/menu.png';
import { getText } from '../../languageTexts';
import Popup from 'reactjs-popup';
import AppPopup from './AppPopup';
import { useSelector } from 'react-redux';

function AppHeader() {
  const [open, setOpen] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const appSelected =
    useSelector(({ appReducer }) => appReducer.appSelected) || false;
  const handleClose = () => setOpen(false);

  
  useEffect(() => {
    const { pathname = '' } = window.location || {};
    setShowTip(!appSelected && pathname !== '/lang');
  }, [appSelected]);
  return (
    <>
      <div className={styles.appHeader}>
        <div className={styles.left}>
          <img src={info} alt='info' />
        </div>
        <div className={styles.appBtn} onClick={() => setOpen(!open)}>
          {getText('applications')}
          <span className={styles.down}></span>
          <div
            className={styles.infoPopup}
            style={{
              display: showTip ? 'block' : 'none',
            }}
          >
            {getText('click_to_select_app')}
          </div>
        </div>
        {/* </Tooltip> */}
        <div className={styles.right}>
          <img src={menu} alt='menu' />
        </div>
      </div>
      <Popup open={open} modal closeOnDocumentClick onClose={handleClose}>
        <div className='modal'>
          <AppPopup handleClose={handleClose} />
        </div>
      </Popup>
    </>
  );
}

export default AppHeader;

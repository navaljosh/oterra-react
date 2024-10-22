import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import info from '../../assets/info.png';
import menu from '../../assets/menu.png';
import { getText } from '../../languageTexts';
import Popup from 'reactjs-popup';
import AppPopup from './AppPopup';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_TYPES } from '../../store/actionTypes';

function AppHeader({ setSelectedTab, showTip, setShowTip, setLoaded }) {
  const showMenu = useSelector((appReducer) => appReducer.showMenu) || false;
  const [open, setOpen] = useState(!showMenu);
  const appSelected =
    useSelector((appReducer) => appReducer.appSelected) || false;
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const { pathname = '' } = window.location || {};
    setShowTip(!appSelected && pathname !== '/lang' && !open);
  }, [appSelected, open, setShowTip]);

  useEffect(() => {
    if (appSelected) {
      setOpen(false);
    }
  }, [appSelected]);
  return (
    <>
      <div className={styles.appHeader}>
        <div className={styles.left} style={{ visibility: 'hidden' }}>
          <img src={info} alt='info' />
        </div>
        <div
          className={styles.appBtn}
          onClick={() => {
            setSelectedTab({});
            setOpen(!open);
          }}
          style={{
            background: open ? '#e34125' : '#fff',
            color: open ? '#fff' : '#e34125',
          }}
        >
          {getText('applications')}
          <span
            className={styles.down}
            style={{
              borderColor: open ? '#fff' : '#e34125',
            }}
          ></span>
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
        <div
          className={styles.right}
          onClick={() => {
            setSelectedTab({});
            dispatch({
              type: ACTION_TYPES.SHOW_MENU,
              payload: true,
            });
            dispatch({
              type: ACTION_TYPES.APP_SELECTED,
              payload: false,
            });
            dispatch({
              type: ACTION_TYPES.SELECTED_APP,
              payload: {},
            });
            setLoaded(false)
          }}
        >
          <img src={menu} alt='menu' />
        </div>
      </div>
      <Popup
        open={open && !showMenu}
        modal
        closeOnDocumentClick
        onClose={handleClose}
      >
        <div className='modal'>
          <AppPopup handleClose={handleClose} setLoaded={setLoaded}/>
        </div>
      </Popup>
    </>
  );
}

export default AppHeader;

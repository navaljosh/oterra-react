import React from 'react';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import back from '../../assets/arrowLeft.svg';
import { ACTION_TYPES } from '../../store/actionTypes';
import { getText } from '../../languageTexts';
import { logOutUser } from '../../store/actions';
import { useNavigate } from 'react-router-dom';

function AppMenu() {
  const showMenu = useSelector((appReducer) => appReducer.showMenu) || false;

  const loggedUser =
    useSelector((appReducer) => appReducer.loggedUser) || false;

  const accessSent =
    useSelector((appReducer) => appReducer.accessSent) || false;

  const fullAccess =
    useSelector((appReducer) => appReducer.fullAccess) || false;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    dispatch({
      type: ACTION_TYPES.SHOW_MENU,
      payload: false,
    });
    navigate(path);
  };

  return (
    <div
      className={styles.appMenu}
      style={{
        height: showMenu ? '100vh' : 0,
        // width: showMenu ? '100vw' : 0,
        // right: showMenu ? 0 : '-450px',
      }}
    >
      <div className={styles.top}>
        <div className={styles.backHeader}>
          <img
            src={back}
            alt='back'
            onClick={() =>
              dispatch({
                type: ACTION_TYPES.SHOW_MENU,
                payload: false,
              })
            }
          />
          <span
            onClick={() =>
              dispatch({
                type: ACTION_TYPES.SHOW_MENU,
                payload: false,
              })
            }
          >
            {getText('back')}
          </span>
        </div>
        <div className={styles.user}>
          <div className={styles.userIcon}>
            {loggedUser?.name?.substring(0, 1)}
          </div>
          <div className={styles.userName}>{loggedUser?.name}</div>
        </div>
      </div>
      <div className={styles.bottom}>
        {!fullAccess ? (
          <div
            className={styles.menuItem}
            onClick={() => {
              handleNavigate(accessSent ? '/accessSent' : '/fullAccess');
            }}
          >
            {getText('get_full_access')}
          </div>
        ) : null}
        <div
          className={styles.menuItem}
          onClick={() => window.open('https://oterra.com/privacy', '_self')}
        >
          {getText('privacy_policy')}
        </div>
        <div
          className={styles.menuItem}
          onClick={() => window.open('https://oterra.com/contact', '_self')}
        >
          {getText('contact_us')}
        </div>
        <div
          className={styles.menuItem}
          onClick={() => {
            handleNavigate('/langSelect');
          }}
        >
          {getText('language')}
        </div>
        <div
          className={styles.menuItem}
          onClick={() => {
            dispatch(logOutUser());
            handleNavigate('/?logout');
          }}
        >
          {getText('logout')}
        </div>
      </div>
    </div>
  );
}

export default AppMenu;

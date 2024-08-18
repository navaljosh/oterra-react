import React from 'react';
import styles from './index.module.scss';
import { getText } from '../../languageTexts';
import { useNavigate } from 'react-router-dom';
import landingTop from '../../assets/landingTop.png';
import overlay from '../../assets/overlay.png';
import { ACTION_TYPES } from '../../store/actionTypes';
import { useDispatch } from 'react-redux';

function Landing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className={styles.landing}>
      <div className={styles.top}>
        <img src={landingTop} alt='bg' />
      </div>
      <div className={styles.bottom}>
        <img src={overlay} alt='overlay' className={styles.overlay} />
        <div className={styles.tagline}>
          {getText('building_a')}
          <br />
          <span>{getText('sustainable')}</span>
          <br />
          {getText('future')}
        </div>
        <div className={styles.actionBtns}>
          <button onClick={() => navigate('/login')}>
            {getText('enter_with_passcode')}
          </button>
          <button
            onClick={() => {
              dispatch({
                type: ACTION_TYPES.FULL_ACCESS,
                payload: false,
              });
              navigate('/details');
            }}
          >
            {getText('enter_as_guest')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;

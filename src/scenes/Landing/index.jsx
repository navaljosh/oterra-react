import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { getText } from '../../languageTexts';
import { useLocation, useNavigate } from 'react-router-dom';
import landingText from '../../assets/landingText.png';
import oterra from '../../assets/oterra.png';
import { ACTION_TYPES } from '../../store/actionTypes';
import { useDispatch } from 'react-redux';
import LanguageSelect from '../LanguageSelect';

function Landing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const [loading, setLoading] = useState(search !== '?logout');
  // const [showLang, setShowLang] = useState(false);
  const [showLangPopup, setShowLangPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // setShowLang(true);
      setTimeout(() => {
        setShowLangPopup(true);
      }, 1000);
    }, 500);
  }, []);

  if (loading) {
    return (
      <>
        <div
          className={styles.fullScreen}
          style={{
            height: '100%',
          }}
        >
          <img
            src={oterra}
            alt='OTERRA'
            className={styles.brandLogo}
            data-aos='fade-up'
            data-aos-delay='50'
            data-aos-duration='1000'
          />
        </div>
        {showLangPopup ? (
          <LanguageSelect onSelect={() => setLoading(false)} />
        ) : null}
        {/* {showLang ? (
          <img src={landingTop} alt='landingTop' className={styles.overlayBg} />
        ) : null} */}
      </>
    );
  }

  return (
    <div className={styles.landing}>
      {/* <div className={styles.top} data-aos='fade-up'>
        <img src={landingTop} alt='bg' />
      </div> */}
      <div className={styles.bottom} data-aos='fade-down'>
        {/* <img src={overlay} alt='overlay' className={styles.overlay} /> */}
        <div className={styles.tagline}>
          {/* {getText('building_a')}
          <br />
          <span>{getText('sustainable')}</span>
          <br />
          {getText('future')} */}
          <img src={landingText} alt='savor' className={styles.appText} />
          <img
            src={oterra}
            alt='OTERRA'
            className={styles.brandLogo}
            data-aos='fade-down'
            data-aos-delay='50'
            data-aos-duration='1000'
          />
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

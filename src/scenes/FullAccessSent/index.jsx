import React from 'react';
import styles from './index.module.scss';
import back from '../../assets/arrowLeft.svg';
import { useNavigate } from 'react-router-dom';
import { getText } from '../../languageTexts';
import tick from '../../assets/tick.gif';

function FullAccessSent() {
  const navigate = useNavigate();
  return (
    <div className={styles.fullAccessSent}>
      <div className={styles.backHeader}>
        <img src={back} alt='back' onClick={() => navigate('/app')} />
        <span onClick={() => navigate('/app')}>{getText('home')}</span>
      </div>
      <div className={styles.thanks}>
        <div className={styles.wrapper}>
          <img src={tick} alt='sent' />
          <div className={styles.text}>
            {getText('full_access_thank_you')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullAccessSent;

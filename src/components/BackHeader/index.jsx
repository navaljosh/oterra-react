import React from 'react';
import styles from './index.module.scss';
import back from '../../assets/arrowLeft.svg';
import { getText } from '../../languageTexts';
import { useNavigate } from 'react-router-dom';

const BackHeader = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.backHeader}>
      <img src={back} alt='back' onClick={() => navigate(-1)} />
      <span onClick={() => navigate(-1)}>{getText('back')}</span>
    </div>
  );
};

export default BackHeader;

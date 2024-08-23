import React from 'react';
import styles from './index.module.scss';
import LanguageSelect from '../LanguageSelect';
import BackHeader from '../../components/BackHeader';
import { useNavigate } from 'react-router-dom';

function LanguageScreen() {
  const navigate = useNavigate();
  return (
    <div className={styles.langScreen}>
      <BackHeader />
      <LanguageSelect isScreen onSelect={() => navigate('/app')} />
    </div>
  );
}

export default LanguageScreen;

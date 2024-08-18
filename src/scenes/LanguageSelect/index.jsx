import React, { useState } from 'react';
import styles from './index.module.scss';
import AppHeader from '../../components/AppHeader';
import { getText } from '../../languageTexts';
import ScrollSelect from './ScrollSelector/ScrollSelect';
import { useNavigate } from 'react-router-dom';
import VideoBG from '../../components/VideoBG';
import AppFooter from '../../components/AppFooter';

const LANG = [
  {
    label: 'English',
    value: 'EN',
  },
  {
    label: 'Mandarin',
    value: 'CMN',
  },
  {
    label: 'Spanish',
    value: 'SPA',
  },
];

function LanguageSelect() {
  const [lang, setLang] = useState('EN');
  const navigate = useNavigate();
  const selectedIndex = LANG.findIndex((entry) => entry.value === lang.value);

  return (
    <>
      <AppHeader />
      <VideoBG />
      <div className={styles.langSelect}>
        <div className={styles.langOptions}>
          <div className={styles.boxHeader}>{getText('language')}</div>
          <div className={styles.langScroll}>
            <ScrollSelect
              options={LANG}
              onSelect={(val) => setLang(val)}
              selectedIndex={selectedIndex}
            />
          </div>
          <div className={styles.nextBtn}>
            <button
              onClick={() => {
                localStorage.setItem('language', lang.value);
                navigate('/lang');
                setTimeout(() => {
                  navigate('/app');
                }, 1000);
              }}
            >
              {getText('next')}
            </button>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
}

export default LanguageSelect;

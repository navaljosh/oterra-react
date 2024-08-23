import React, { useState } from 'react';
import styles from './index.module.scss';
import { getText } from '../../languageTexts';
import ScrollSelect from './ScrollSelector/ScrollSelect';
// import { useNavigate } from 'react-router-dom';

const LANG = [
  {
    label: 'English',
    value: 'EN',
  },
  {
    label: '普通话',
    value: 'CMN',
  },
  {
    label: 'Español',
    value: 'SPA',
  },
  {
    label: 'Português',
    value: 'POR',
  },
];

function LanguageSelect({ onSelect, isScreen }) {
  const [lang, setLang] = useState('EN');
  // const navigate = useNavigate();
  const selectedIndex = LANG.findIndex((entry) => entry.value === lang.value);

  return (
    <>
      {isScreen ? (
        <div className={styles.chooseLang}>
          {getText('choose_your_language')}
        </div>
      ) : null}
      <div
        className={styles.langOptions}
        style={{
          background: isScreen ? 'none' : 'rgba(255, 255, 255, 0.5)',
          boxShadow: isScreen ? 'none' : '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        }}
      >
        {isScreen ? null : (
          <div className={styles.boxHeader}>{getText('language')}</div>
        )}
        <div className={styles.langScroll}>
          <ScrollSelect
            options={LANG}
            onSelect={(val) => setLang(val)}
            selectedIndex={selectedIndex}
          />
        </div>
        <div
          className={styles.nextBtn}
          style={{
            marginTop: isScreen ? '150px' : 'auto',
          }}
        >
          <button
            onClick={() => {
              localStorage.setItem('language', lang.value);
              // navigate('/app');
              onSelect();
            }}
          >
            {getText(isScreen ? 'confirm' : 'next')}
          </button>
        </div>
      </div>
    </>
  );
}

export default LanguageSelect;

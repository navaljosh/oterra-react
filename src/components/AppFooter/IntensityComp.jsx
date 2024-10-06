import React, { useLayoutEffect, useState } from 'react';
import styles from './index.module.scss';
import { getText } from '../../languageTexts';
import ReactHtmlParser from 'react-html-parser';

export default function IntensityComponent({
  setSelectedTab,
  // variant,
  content,
  appName,
}) {
  const [intensity, setIntensity] = useState(true);
  const [minH, setMinH] = useState(null);

  useLayoutEffect(() => {
    setMinH(document.getElementById('intensityInfo')?.clientHeight);
  }, []);

  return (
    <div className={styles.infoContent} id='infoContent'>
      <div className={styles.header}>{getText('color_intensity')}</div>
      <div className={styles.close} onClick={() => setSelectedTab(false)}>
        <img
          width='28'
          height='28'
          src='https://img.icons8.com/sf-regular/48/delete-sign.png'
          alt='delete-sign'
        />
      </div>
      <div className={styles.intensityContent}>
        <div className={styles.intensityHeader}>
          <div className={styles.wrapper}>
            <div
              className={styles.left}
              onClick={() => setIntensity(true)}
              style={{
                outline: intensity ? `2px solid #E34125` : 'none',
              }}
            >
              <img src={content?.intensityIcons[0]} alt={`bright-${appName}`} />
            </div>
            <div
              className={styles.intensityName}
              style={{
                fontWeight: intensity ? 'bold' : 'normal',
              }}
            >
              {getText('bright')}
            </div>
          </div>
          <div className={styles.wrapper}>
            <div
              className={styles.right}
              onClick={() => setIntensity(false)}
              style={{
                outline: !intensity ? `2px solid #E34125` : 'none',
              }}
            >
              <img src={content?.intensityIcons[1]} alt={`bright-${appName}`} />
            </div>
            <div
              className={styles.intensityName}
              style={{
                fontWeight: intensity ? 'normal' : 'bold',
              }}
            >
              {getText('pastel')}
            </div>
          </div>
        </div>
        <div
          className={styles.intensityInfo}
          id='intensityInfo'
          style={{
            minHeight: minH,
          }}
        >
          {ReactHtmlParser(
            getText(
              intensity
                ? content?.intensityTextBright
                : content.intensityTextPastel
            )
          )}
        </div>
      </div>
    </div>
  );
}

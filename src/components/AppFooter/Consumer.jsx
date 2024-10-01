import React from 'react';
import styles from './index.module.scss';
import { getText } from '../../languageTexts';

export default function Consumer({ showScroll, content, setSelectedTab }) {
  console.warn('showScroll', showScroll);
  return (
    <div className={styles.infoContent} id='infoContent'>
      <div className={styles.header}>{getText('consumer_persona')}</div>
      <div className={styles.close} onClick={() => setSelectedTab(false)}>
        <img
          width='28'
          height='28'
          src='https://img.icons8.com/sf-regular/48/delete-sign.png'
          alt='delete-sign'
        />
      </div>
      {getText(content.text)}
      <br />
      <br />
      {content.text2 ? getText(content.text2) : null}
      <div className={styles.progress}>
        <div
          className={styles.bar}
          style={{
            height: content.slabs.nonAppealing < 20 ? 60 : 40,
          }}
        >
          <div
            className={styles.appealing}
            style={{
              width: `${
                content.slabs.nonAppealing < 10
                  ? content.slabs.appealing - 20
                  : content.slabs.appealing
              }%`,
            }}
          >
            <div className={styles.percent}>{content.slabs.appealing}%</div>
            <div className={styles.label}>{getText('appealing')}</div>
          </div>
          <div
            className={styles.neutral}
            style={{
              width: `${
                content.slabs.nonAppealing < 10
                  ? content.slabs.neutral + 10
                  : content.slabs.neutral
              }%`,
            }}
          >
            <div className={styles.percent}>{content.slabs.neutral}%</div>
            <div className={styles.label}>{getText('neutral')}</div>
          </div>
          <div
            className={styles.unappealing}
            style={{
              width: `${
                content.slabs.nonAppealing < 10
                  ? content.slabs.nonAppealing + 10
                  : content.slabs.nonAppealing
              }%`,
            }}
          >
            <div className={styles.percent}>{content.slabs.nonAppealing}%</div>
            <div className={styles.label}>{getText('unappealing')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

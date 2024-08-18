import React, { useState } from 'react';
import styles from './index.module.scss';
import consumer from '../../assets/Footer/consumer.png';
import emotion from '../../assets/Footer/emotion.png';
import flavor from '../../assets/Footer/flavor.png';
import intensity from '../../assets/Footer/intensity.png';
import solution from '../../assets/Footer/solution.png';
import { getText } from '../../languageTexts';
import { useSelector } from 'react-redux';

function AppFooter() {
  const signedIn =
    useSelector(({ appReducer }) => appReducer.fullAccess) || false;
  const appSelected =
    useSelector(({ appReducer }) => appReducer.appSelected) || false;
  const OPTIONS = [
    {
      name: 'consumer',
      icon: consumer,
      active: appSelected,
      component: () => {
        return (
          <>
            <div className={styles.header}>{getText('consumer_persona')}</div>
            Consumers who find pink burgers appealing also show great interest
            to trying out savory foods in this color. They are usually females
            and see themselves as very adventurous when it come to trying
            unfamiliar food. When it comes to priorities regarding food, they
            enjoy culinary exploration and trying new flavours , cuisines and
            ingredients.
          </>
        );
      },
    },
    {
      name: 'emotion',
      icon: emotion,
      active: appSelected,
      component: () => {},
    },
    {
      name: 'flavor',
      icon: flavor,
      active: signedIn && appSelected,
      component: () => {},
    },
    {
      name: 'intensity',
      icon: intensity,
      active: signedIn && appSelected,
      component: () => {},
    },
    {
      name: 'solution',
      icon: solution,
      active: signedIn && appSelected,
      component: () => {},
    },
  ];
  const [selectedTab, setSelectedTab] = useState(false);
  return (
    <div className={styles.appFooter}>
      {selectedTab ? (
        <div className={styles.footerContent}>{selectedTab.component()}</div>
      ) : null}
      <div className={styles.optionsRow}>
        {OPTIONS.map((entry) => {
          return (
            <div
              key={entry.name}
              className={styles.option}
              style={{
                opacity: entry.active ? 1 : 0.5,
              }}
              onClick={() => {
                if (entry.active) {
                  setSelectedTab(entry);
                }
              }}
            >
              <div className={styles.icon}>
                <img src={entry?.icon} alt={entry.name} />
              </div>
              <div>{getText(entry.name)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AppFooter;

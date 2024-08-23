import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import consumer from '../../assets/Footer/consumer.png';
import emotion from '../../assets/Footer/emotion.png';
import flavor from '../../assets/Footer/flavor.png';
import intensity from '../../assets/Footer/intensity.png';
import solution from '../../assets/Footer/solution.png';
import consumerS from '../../assets/Footer/consumerS.png';
import emotionS from '../../assets/Footer/emotionS.png';
import flavorS from '../../assets/Footer/flavorS.png';
import intensityS from '../../assets/Footer/intensityS.png';
import solutionS from '../../assets/Footer/solutionS.png';
import emotionFooter from '../../assets/Footer/emotionFooter.png';
import { getText } from '../../languageTexts';
import { useDispatch, useSelector } from 'react-redux';
import { isObjectEmpty } from '../../scenes/MainScene';
import { ACTION_TYPES } from '../../store/actionTypes';

function AppFooter() {
  const signedIn = useSelector((appReducer) => appReducer.fullAccess) || false;
  const appSelected =
    useSelector((appReducer) => appReducer.appSelected) || false;

  const showMenu = useSelector((appReducer) => appReducer.showMenu) || false;
  const [activeElement, setActiveElement] = useState(null);
  const selectedApp = useSelector((appReducer) => appReducer.selectedApp);
  const dispatch = useDispatch();
  const { variant = 'yellow' } =
    useSelector((appReducer) => appReducer.awsUserData) || 'yellow';

  const OPTIONS = [
    {
      name: 'consumer',
      icon: consumer,
      iconSelected: consumerS,
      active: appSelected,
      needVariant: true,
      component: (variant) => {
        return (
          <div className={styles.infoContent}>
            <div className={styles.header}>{getText('consumer_persona')}</div>
            <div className={styles.close} onClick={() => setSelectedTab(false)}>
              <img
                width='28'
                height='28'
                src='https://img.icons8.com/sf-regular/48/delete-sign.png'
                alt='delete-sign'
              />
            </div>
            {getText('consumers_who_find')} {variant} {selectedApp?.displayName}{' '}
            {getText('appealing_text')}
            <div className={styles.progress}>
              <div className={styles.bar}>
                <div className={styles.appealing}>
                  <div className={styles.percent}>60%</div>
                  <div className={styles.label}>Appealing</div>
                </div>
                <div className={styles.neutral}>
                  <div className={styles.percent}>30%</div>
                  <div className={styles.label}>Neutral</div>
                </div>
                <div className={styles.unappealing}>
                  <div className={styles.percent}>10%</div>
                  <div className={styles.label}>Unappealing</div>
                </div>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      name: 'emotion',
      icon: emotion,
      iconSelected: emotionS,
      active: appSelected,
      needVariant: false,
      component: () => {
        return (
          <div className={styles.infoContent}>
            <div className={styles.header}>{getText('top_5_emotions')}</div>
            <div className={styles.close} onClick={() => setSelectedTab(false)}>
              <img
                width='28'
                height='28'
                src='https://img.icons8.com/sf-regular/48/delete-sign.png'
                alt='delete-sign'
              />
            </div>
            <div className={styles.emotionImg}>
              <img src={emotionFooter} alt='emotions' />
            </div>
          </div>
        );
      },
    },
    {
      name: 'flavor',
      icon: flavor,
      iconSelected: flavorS,
      active: signedIn && appSelected,
      needVariant: true,
      component: (variant) => {
        return (
          <div className={styles.infoContent}>
            <div className={styles.header}>{getText('color_n_flovor')}</div>
            <div className={styles.close} onClick={() => setSelectedTab(false)}>
              <img
                width='28'
                height='28'
                src='https://img.icons8.com/sf-regular/48/delete-sign.png'
                alt='delete-sign'
              />
            </div>
            <div className={styles.flovorContent}>
              {getText('consumer_rank')} {variant}&nbsp;
              {getText('top_3_preferred_color')}
              <br />
              {getText('they_associate')} {variant}{' '}
              {getText('color_savory_food')}
            </div>
          </div>
        );
      },
    },
    {
      name: 'intensity',
      icon: intensity,
      iconSelected: intensityS,
      active: signedIn && appSelected,
      needVariant: true,
      component: () => {
        return (
          <div className={styles.infoContent}>
            <div className={styles.header}>{getText('color_intensity')}</div>
            <div className={styles.close} onClick={() => setSelectedTab(false)}>
              <img
                width='28'
                height='28'
                src='https://img.icons8.com/sf-regular/48/delete-sign.png'
                alt='delete-sign'
              />
            </div>
            <div className={styles.emotionImg}>
              <img src={emotionFooter} alt='emotions' />
            </div>
          </div>
        );
      },
    },
    {
      name: 'solution',
      icon: solution,
      iconSelected: solutionS,
      active: signedIn && appSelected,
      needVariant: false,
      component: () => {
        return (
          <div className={styles.infoContent}>
            <div className={styles.header}>{getText('top_5_emotions')}</div>
            <div className={styles.close} onClick={() => setSelectedTab(false)}>
              <img
                width='28'
                height='28'
                src='https://img.icons8.com/sf-regular/48/delete-sign.png'
                alt='delete-sign'
              />
            </div>
            <div className={styles.emotionImg}>
              <img src={emotionFooter} alt='emotions' />
            </div>
          </div>
        );
      },
    },
  ];
  const [selectedTab, setSelectedTab] = useState(false);

  useEffect(() => {
    if (activeElement) {
      const timer = setTimeout(() => {
        setActiveElement(null);
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeElement]);

  if (showMenu) {
    return null;
  }
  const togglePseudo = (elementId) => {
    setActiveElement((prevElement) =>
      prevElement === elementId ? null : elementId
    );
  };

  const checkApi = (callback) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      body: '{"email":"test@example.com"}',
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      mode: 'cors',
    };

    fetch(
      'https://w0516ks3hd.execute-api.ap-southeast-2.amazonaws.com/dev/get-user-data',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const parsedData = JSON.parse(result?.body);
        dispatch({
          type: ACTION_TYPES.AWS_USER_DATA,
          payload: parsedData,
        });
        // setColor(parsedData?.variant);
        callback();
      })
      .catch((error) => console.error(error));
  };

  const callbackFn = (entry, index) => {
    if (appSelected) {
      if (entry.active && entry.name !== selectedTab.name) {
        setSelectedTab(entry);
        setActiveElement({});
      } else {
        setSelectedTab({});
        togglePseudo(`footerOption${index}`);
      }
    }
  };

  return (
    <>
      <div
        className={styles.overlay}
        style={{
          display: !isObjectEmpty(selectedTab) ? 'block' : 'none',
        }}
        onClick={() => {
          setSelectedTab({});
        }}
      ></div>
      <div className={styles.appFooter}>
        {!isObjectEmpty(selectedTab) ? (
          <div className={styles.footerContent}>
            {selectedTab.component(variant)}
          </div>
        ) : null}
        <div className={styles.optionsRow}>
          {OPTIONS.map((entry, index) => {
            return (
              <div
                key={entry.name}
                id={`footerOption${index}`}
                className={`${styles.option} ${
                  activeElement === `footerOption${index}`
                    ? 'optionBlocked'
                    : ''
                }`}
                onClick={() => {
                  if (
                    entry?.needVariant &&
                    entry.active &&
                    entry.name !== selectedTab.name
                  ) {
                    // checkApi(callbackFn(entry, index));
                    callbackFn(entry, index);
                  } else {
                    callbackFn(entry, index);
                  }
                }}
              >
                <div className={styles.icon}>
                  <img
                    src={
                      entry.name === selectedTab.name
                        ? selectedTab?.iconSelected
                        : entry?.icon
                    }
                    style={{
                      opacity: entry.active ? 1 : 0.5,
                    }}
                    alt={entry.name}
                  />
                </div>
                <div
                  style={{
                    opacity: entry.active ? 1 : 0.5,
                  }}
                >
                  {getText(entry.name)}
                </div>
                <div
                  onClick={(e) => e.stopPropagation()}
                  className={styles.fullAccessError}
                  id={`accessPopup${index}`}
                  style={{
                    display:
                      activeElement === `footerOption${index}`
                        ? 'block'
                        : 'none',
                    left: `calc(${3 - index} * 10px)`,
                  }}
                >
                  Get full access to more insights on consumer color preferences
                  and flavor associations by completing the form{' '}
                  <span>Here.</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AppFooter;

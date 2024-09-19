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
import emotionBlack from '../../assets/Footer/emotions/black.png';
import emotionBlue from '../../assets/Footer/emotions/blue.png';
import emotionBrown from '../../assets/Footer/emotions/brown.png';
import emotionGreen from '../../assets/Footer/emotions/green.png';
import emotionOrange from '../../assets/Footer/emotions/orange.png';
import emotionPink from '../../assets/Footer/emotions/pink.png';
import emotionPurple from '../../assets/Footer/emotions/purple.png';
import emotionRed from '../../assets/Footer/emotions/red.png';
import emotionYellow from '../../assets/Footer/emotions/yellow.png';
import { getText } from '../../languageTexts';
import { useDispatch, useSelector } from 'react-redux';
import { isObjectEmpty } from '../../scenes/MainScene';
import { ACTION_TYPES } from '../../store/actionTypes';
import { useNavigate } from 'react-router-dom';
import { getContentForAppVariant } from './getContent';

function AppFooter() {
  const fullAccess =
    useSelector((appReducer) => appReducer.fullAccess) || false;
  const appSelected =
    useSelector((appReducer) => appReducer.appSelected) || false;

  const showMenu = useSelector((appReducer) => appReducer.showMenu) || false;
  const [activeElement, setActiveElement] = useState(null);
  const selectedApp = useSelector((appReducer) => appReducer.selectedApp);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { variant = 'yellow' } =
    useSelector((appReducer) => appReducer.awsUserData) || 'yellow';

  console.warn('selectedApp', selectedApp);
  const { name: appName } = selectedApp || {};

  const content = getContentForAppVariant({
    variant,
    appName,
  });
  console.warn('getContentForAppVariant', content);

  const OPTIONS = [
    {
      name: 'consumer',
      icon: consumer,
      iconSelected: consumerS,
      active: appSelected,
      needVariant: true,
      component: () => {
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
                  style={{ width: `${content.slabs.appealing}%` }}
                >
                  <div className={styles.percent}>
                    {content.slabs.appealing}%
                  </div>
                  <div className={styles.label}>{getText('appealing')}</div>
                </div>
                <div
                  className={styles.neutral}
                  style={{ width: `${content.slabs.neutral}%` }}
                >
                  <div className={styles.percent}>{content.slabs.neutral}%</div>
                  <div className={styles.label}>{getText('neutral')}</div>
                </div>
                <div
                  className={styles.unappealing}
                  style={{ width: `${content.slabs.nonAppealing}%` }}
                >
                  <div className={styles.percent}>
                    {content.slabs.nonAppealing}%
                  </div>
                  <div
                    className={styles.label}
                    style={{
                      bottom:
                        content.slabs.nonAppealing < 20 ? '-40px' : '-20px',
                      right: content.slabs.nonAppealing < 20 ? 0 : 'auto',
                    }}
                  >
                    {getText('unappealing')}
                  </div>
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
      component: (variant) => {
        const getEmotionIcon = () => {
          switch (variant) {
            case 'yellow':
              return emotionYellow;
            case 'black':
              return emotionBlack;
            case 'blue':
              return emotionBlue;
            case 'brown':
              return emotionBrown;
            case 'green':
              return emotionGreen;
            case 'orange':
              return emotionOrange;
            case 'pink':
              return emotionPink;
            case 'purple':
              return emotionPurple;
            case 'red':
              return emotionRed;
            default:
              return emotionFooter;
          }
        };
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
              <img
                src={getEmotionIcon()}
                alt='emotions'
                style={{
                  maxHeight: 126,
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        );
      },
    },
    {
      name: 'flavor',
      icon: flavor,
      iconSelected: flavorS,
      active: fullAccess && appSelected,
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
              {getText(content.flavourText)}
              <br />
              <br />
              {getText(content.flavourText2)}
            </div>
          </div>
        );
      },
    },
    {
      name: 'intensity',
      icon: intensity,
      iconSelected: intensityS,
      active: fullAccess && appSelected,
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
      active: fullAccess && appSelected,
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
                  <span onClick={() => navigate('/fullAccess')}>Here.</span>
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

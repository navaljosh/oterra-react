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
import { useNavigate } from 'react-router-dom';

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
  const { variant = 'pink' } =
    useSelector((appReducer) => appReducer.awsUserData) || 'yellow';

  console.warn('selectedApp', selectedApp);
  const { name: appName } = selectedApp || {};

  const pinkSet1 = ['burger_bun', 'noodle', 'puff_snacks', 'dumpling'];
  const pinkSet2 = ['savory_dip', 'burger_sauce', 'salad_dressing'];
  const pinkSet3 = ['nugget', 'french_fries', 'potato_chip'];

  const getContentForAppVariant = () => {
    if (variant === 'pink') {
      if (pinkSet1.includes(appName)) {
        return {
          slabs: {
            appealing: 58,
            neutral: 22,
            nonAppealing: 20,
          },
          text: `Globally, 58% of consumers find pink-colored foods in this application appealing. More than half of them are Millennials aged 25-44, who are also more likely to cook at home.`,
          text2: `When encountering food, whether unwrapping from a package or served to them, most of them first smell it to appreciate its aroma.`,
        };
      } else if (pinkSet2.includes(appName)) {
        return {
          slabs: {
            appealing: 71,
            neutral: 18,
            nonAppealing: 11,
          },
          text: `Pink-colored sauces, dips, and dressings are particularly popular, with 71% of global consumers finding them appealing and showing the highest interest in trying them compared to other pink-colored foods.`,
          text2: `They often consider themselves to be ‘adventurous eaters’, are open to experimenting with diverse cuisines and enjoy trying new and unfamiliar foods. Some even actively seek out exotic foods from different cultures and are always eager to explore new flavors.`,
        };
      } else if (pinkSet3.includes(appName)) {
        return {
          slabs: {
            appealing: 59,
            neutral: 20,
            nonAppealing: 21,
          },
          text: `Globally, 59% of consumers find pink-colored foods in this application appealing.  More than half of them are millennials aged between 25-44.`,
          text2: `They are also likely to cook more at home and consider themselves health-conscious, prioritizing fresh, natural, and organic options, while still seeking good value for their money.`,
        };
      }
    }
  };

  const text = getContentForAppVariant();
  console.warn('getContentForAppVariant', text);

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
            &nbsp;
            {getText('appealing_text')}
            <div className={styles.progress}>
              <div className={styles.bar}>
                <div className={styles.appealing} style={{ width: '58%' }}>
                  <div className={styles.percent}>58%</div>
                  <div className={styles.label}>{getText('appealing')}</div>
                </div>
                <div className={styles.neutral} style={{ width: '22%' }}>
                  <div className={styles.percent}>22%</div>
                  <div className={styles.label}>{getText('neutral')}</div>
                </div>
                <div className={styles.unappealing} style={{ width: '20%' }}>
                  <div className={styles.percent}>20%</div>
                  <div className={styles.label}>{getText('unappealing')}</div>
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

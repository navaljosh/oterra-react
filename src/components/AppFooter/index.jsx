import { useEffect, useLayoutEffect, useState } from 'react';
import styles from './index.module.scss';
import consumer from '../../assets/Footer/consumer.png';
import emotion from '../../assets/Footer/emotion.png';
import flavor from '../../assets/Footer/flavor.png';
import intensityIcon from '../../assets/Footer/intensity.png';
import solution from '../../assets/Footer/solution.png';
import consumerS from '../../assets/Footer/consumerS.png';
import emotionS from '../../assets/Footer/emotionS.png';
import flavorS from '../../assets/Footer/flavorS.png';
import intensityS from '../../assets/Footer/intensityS.png';
import solutionS from '../../assets/Footer/solutionS.png';
import downAnimate from '../../assets/downAnimate.gif';
import emotionFooter from '../../assets/Footer/emotionFooter.png';
import { getText } from '../../languageTexts';
import { useDispatch, useSelector } from 'react-redux';
import { isObjectEmpty } from '../../scenes/MainScene';
import { ACTION_TYPES } from '../../store/actionTypes';
import { useNavigate } from 'react-router-dom';
import { getContentForAppVariant } from './getContent';
import { EmoteLangImageServer } from './imageServer';
import IntensityComponent from './IntensityComp';
import SolutionComp from './SolutionComp';
import Consumer from './Consumer';
import ReactHtmlParser from 'react-html-parser';
import { API_ENDPOINTS, API_KEY } from '../../api/api.constants';

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

  const { name: appName } = selectedApp || {};

  const content =
    getContentForAppVariant({
      variant,
      appName,
    }) || {};
  console.warn('getContentForAppVariant', content);

  const [selectedTab, setSelectedTab] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useLayoutEffect(() => {
    if (selectedTab) {
      const scrollHeight = document.getElementById('infoContent')?.scrollHeight;
      console.warn('scrollHeight', scrollHeight, scrollHeight > 232);
      setShowScroll(scrollHeight > 232);
    }
  }, [selectedTab]);

  const OPTIONS = [
    {
      name: 'consumer',
      icon: consumer,
      iconSelected: consumerS,
      active: appSelected,
      needVariant: true,
      component: () => {
        return <Consumer setSelectedTab={setSelectedTab} content={content} />;
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
              return EmoteLangImageServer('yellow.png');
            case 'black':
              return EmoteLangImageServer('black.png');
            case 'blue':
              return EmoteLangImageServer('blue.png');
            case 'brown':
              return EmoteLangImageServer('brown.png');
            case 'green':
              return EmoteLangImageServer('green.png');
            case 'orange':
              return EmoteLangImageServer('orange.png');
            case 'pink':
              return EmoteLangImageServer('pink.png');
            case 'purple':
              return EmoteLangImageServer('purple.png');
            case 'red':
              return EmoteLangImageServer('red.png');
            default:
              return emotionFooter;
          }
        };
        return (
          <div className={styles.infoContent} id='infoContent'>
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
          <div className={styles.infoContent} id='infoContent'>
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
              {ReactHtmlParser(getText(content.flavourText))}
              <br />
              <br />
              {ReactHtmlParser(getText(content.flavourText2))}
            </div>
          </div>
        );
      },
    },
    {
      name: 'intensity',
      icon: intensityIcon,
      iconSelected: intensityS,
      active: fullAccess && appSelected,
      needVariant: true,
      component: (variant) => {
        return (
          <IntensityComponent
            appName={appName}
            variant={variant}
            setSelectedTab={setSelectedTab}
            content={content}
          />
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
          <SolutionComp
            solutionData={content?.solutionData}
            setSelectedTab={setSelectedTab}
          />
        );
      },
    },
  ];

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
    myHeaders.append('x-api-key', API_KEY);

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

    fetch(API_ENDPOINTS.GET_USER_DATA, requestOptions)
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
      if (entry.active) {
        setSelectedTab(entry);
        setActiveElement({});
        if (entry.name === selectedTab.name) {
          setSelectedTab({});
        }
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
          <div
            className={styles.footerContent}
            id='footerContent'
            onScroll={() => {
              const scrollTop =
                document.getElementById('footerContent')?.scrollTop;
              setShowScroll(scrollTop === 0);
            }}
          >
            {selectedTab.component(variant, showScroll)}
            {showScroll ? (
              <div className={styles.showScroll}>
                Scroll <img src={downAnimate} alt='down' />
              </div>
            ) : null}
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

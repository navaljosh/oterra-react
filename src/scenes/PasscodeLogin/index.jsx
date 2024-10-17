import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { getText } from '../../languageTexts';
import BackHeader from '../../components/BackHeader';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../components/CustomInput';
import { useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../../store/actionTypes';
import { loginUser } from '../../store/actions';
import { API_ENDPOINTS, API_KEY } from '../../api/api.constants';

function PassCodeLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('test@example.com');
  const [passcode, setPasscode] = useState('Colorbynature');
  const [loading, setLoading] = useState(false);
  const disabled = !email.length || !passcode.length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();

  const checkEmail = () => {
    setLoading(true);
    dispatch({
      type: ACTION_TYPES.FULL_ACCESS,
      payload: true,
    });
    sessionStorage.setItem(btoa('fullAccess'), btoa('true'));
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('x-api-key', API_KEY);

    const raw = JSON.stringify({
      body: JSON.stringify({
        email: email,
      }),
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
        console.warn('result', result);
        if (result.statusCode === 200) {
          dispatch(loginUser({ user: result?.body }));
          navigate('/app');
        } else {
          navigate('/details', { state: { email } });
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <>
      <BackHeader />
      <div className={styles.passcodeLogin}>
        <div className={styles.header}>{getText('welcome')}</div>
        <div className={styles.info}>{getText('enter_passcode_to_access')}</div>
        <div className={styles.form}>
          <CustomInput
            label={getText('email')}
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            label={getText('passcode')}
            defaultValue={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            type='password'
            maxLength={4}
          />
        </div>
        <div className={styles.footer}>
          <button
            style={{ opacity: disabled || loading ? 0.5 : 1 }}
            disabled={disabled || loading}
            onClick={() => {
              if (passcode === atob('Q29sb3JieW5hdHVyZQ==')) {
                checkEmail();
              }
            }}
          >
            {getText(loading ? 'please_wait' : 'submit')}
          </button>
        </div>
      </div>
    </>
  );
}

export default PassCodeLogin;

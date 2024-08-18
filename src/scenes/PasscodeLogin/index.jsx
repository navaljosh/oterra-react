import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { getText } from '../../languageTexts';
import BackHeader from '../../components/BackHeader';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../components/CustomInput';
import { useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../../store/actionTypes';

function PassCodeLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('test@example.com');
  const [passcode, setPasscode] = useState('1111');
  const disabled = !email.length || !passcode.length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
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
            style={{ opacity: disabled ? 0.5 : 1 }}
            disabled={disabled}
            onClick={() => {
              dispatch({
                type: ACTION_TYPES.FULL_ACCESS,
                payload: true,
              });
              navigate('/details');
            }}
          >
            {getText('submit')}
          </button>
        </div>
      </div>
    </>
  );
}

export default PassCodeLogin;

import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import BackHeader from '../../components/BackHeader';
import { getText } from '../../languageTexts';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../components/CustomInput';
import CustomSelectBox from '../../components/CustomSelectBox';
import { useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../../store/actionTypes';
import { loginUser } from '../../store/actions';

function DetailsForm() {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [userData, setUserData] = useState({
    name: 'Akash',
    email: 'test@example.com',
    phone: '+45 9465498988',
    position: 'Developer',
    company: 'NXT Interactive',
    country: 'Singapore',
    apps: ['Pet Food'],
  });
  const dispatch = useDispatch();
  return (
    <>
      <BackHeader />
      <div className={styles.detailsForm}>
        <div className={styles.header}>{getText('welcome')}</div>
        <div className={styles.info}>{getText('fill_in_details')}</div>
        <div className={styles.formData}>
          <CustomInput
            label={getText('name')}
            defaultValue='Akash'
            onChange={(e) => {
              setUserData({
                ...userData,
                name: e.target.value,
              });
            }}
          />
          <CustomInput
            label={getText('email')}
            defaultValue='test@example.com'
            onChange={(e) => {
              setUserData({
                ...userData,
                email: e.target.value,
              });
            }}
          />
          <CustomInput
            label={getText('phone')}
            defaultValue='+45 9465498988'
            onChange={(e) => {
              setUserData({
                ...userData,
                phone: e.target.value,
              });
            }}
          />
          <CustomInput
            label={getText('position')}
            defaultValue='Developer'
            onChange={(e) => {
              setUserData({
                ...userData,
                position: e.target.value,
              });
            }}
          />
          <CustomInput
            label={getText('company')}
            defaultValue='NXT Interactive'
            onChange={(e) => {
              setUserData({
                ...userData,
                company: e.target.value,
              });
            }}
          />
          <CustomInput
            label={getText('country')}
            defaultValue='Singapore'
            onChange={(e) => {
              setUserData({
                ...userData,
                country: e.target.value,
              });
            }}
          />
          <CustomSelectBox
            label={getText('interested_apps')}
            onSelect={(apps) => {
              setUserData({
                ...userData,
                apps,
              });
            }}
          />
        </div>
        <div className={styles.policy}>
          <input
            type='checkbox'
            style={{
              margin: '0 8px 0 0',
              accentColor: '#E03A21',
            }}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <div>
            {getText('i_agree_to')}&nbsp;
            <span>{getText('privacy_policy')}</span>
          </div>
        </div>
        <div className={styles.footer}>
          <button
            disabled={!agreed}
            onClick={() => {
              console.warn('userData', userData);
              // navigate('/app')
              // @TODO Add API call to save data to DB
              dispatch(loginUser({ user: userData }));
              navigate('/app');
            }}
            style={{
              opacity: agreed ? 1 : 0.5,
            }}
          >
            {getText('submit')}
          </button>
        </div>
      </div>
    </>
  );
}

export default DetailsForm;

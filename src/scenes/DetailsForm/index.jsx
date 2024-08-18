import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import BackHeader from '../../components/BackHeader';
import { getText } from '../../languageTexts';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../components/CustomInput';
import CustomSelectBox from '../../components/CustomSelectBox';

function DetailsForm() {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BackHeader />
      <div className={styles.detailsForm}>
        <div className={styles.header}>{getText('welcome')}</div>
        <div className={styles.info}>{getText('fill_in_details')}</div>
        <div className={styles.formData}>
          <CustomInput label={getText('name')} defaultValue='Akash' />
          <CustomInput
            label={getText('email')}
            defaultValue='test@example.com'
          />
          <CustomInput label={getText('phone')} defaultValue='+45 9465498988' />
          <CustomInput label={getText('position')} defaultValue='Manager' />
          <CustomInput
            label={getText('company')}
            defaultValue='NXT Interactive'
          />
          <CustomInput label={getText('country')} defaultValue='Singapore' />
          <CustomSelectBox label={getText('interested_apps')} />
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
            onClick={() => navigate('/lang')}
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

import React, { useState } from 'react';
import styles from './index.module.scss';
import back from '../../assets/arrowLeft.svg';
import { getText } from '../../languageTexts';
import CustomSelectBox from '../../components/CustomSelectBox';
import { useNavigate } from 'react-router-dom';

const OPTIONS4 = [
  'new_product_ideas',
  'color_solutions',
  'market_trends',
  'value_to_brand',
  'other',
  'none',
];

const OPTIONS5 = [
  'do_not_know_about_colors',
  'need_help_about_colors',
  'need_help_with_compliance',
  'need_market_and_consumers',
  'other',
  'none',
];

function FullAccessForm() {
  const [details, setDetails] = useState({
    ques1: '',
    ques2: '',
    ques3: '',
    ques4: '',
    ques5: '',
  });
  console.warn('details', details);
  const { ques1, ques2, ques3, ques4, ques4Text, ques5, ques5Text } = details;

  const disabled =
    !ques1 ||
    !ques2 ||
    !ques3 ||
    (ques4 === 'other' ? !ques4Text : !ques4) ||
    (ques5 === 'other' ? !ques5Text : !ques5);

  const navigate = useNavigate();

  return (
    <div className={styles.fullAccessForm}>
      <div className={styles.backHeader}>
        <img src={back} alt='back' onClick={() => navigate(-1)} />
        <span onClick={() => navigate(-1)}>{getText('back')}</span>
      </div>
      <div className={styles.header}>{getText('please_fill_out_form')}</div>
      <div className={styles.formBox}>
        <CustomSelectBox
          label={getText('full_access_ques1')}
          options={['yes', 'no']}
          multiSelect={false}
          onSelect={(val) =>
            setDetails({
              ...details,
              ques1: val,
            })
          }
          closeOnSelect
        />
        <CustomSelectBox
          label={getText('full_access_ques2')}
          options={['yes', 'no']}
          multiSelect={false}
          onSelect={(val) =>
            setDetails({
              ...details,
              ques2: val,
            })
          }
          closeOnSelect
        />
        <CustomSelectBox
          label={getText('full_access_ques3')}
          options={['yes', 'no']}
          multiSelect={false}
          onSelect={(val) =>
            setDetails({
              ...details,
              ques3: val,
            })
          }
          closeOnSelect
        />
        <CustomSelectBox
          label={getText('full_access_ques4')}
          options={OPTIONS4}
          multiSelect={false}
          onSelect={(val) =>
            setDetails({
              ...details,
              ques4: val,
            })
          }
          closeOnSelect
        />
        {details.ques4 === 'other' ? (
          <textarea
            style={{
              width: '100%',
              boxSizing: 'border-box',
              borderRadius: 4,
              border: '1px solid #8a8a8a',
              padding: '10px 20px',
            }}
            placeholder={getText('type_here')}
            onChange={(e) => {
              setDetails({
                ...details,
                ques4Text: e.target.value,
              });
            }}
          />
        ) : null}
        <CustomSelectBox
          label={getText('full_access_ques5')}
          options={OPTIONS5}
          multiSelect={false}
          onSelect={(val) =>
            setDetails({
              ...details,
              ques5: val,
            })
          }
          closeOnSelect
        />
        {details.ques5 === 'other' ? (
          <textarea
            style={{
              width: '100%',
              boxSizing: 'border-box',
              borderRadius: 4,
              border: '1px solid #8a8a8a',
              padding: '10px 20px',
            }}
            placeholder={getText('type_here')}
            onChange={(e) => {
              setDetails({
                ...details,
                ques5Text: e.target.value,
              });
            }}
          />
        ) : null}
      </div>
      <div className={styles.footer}>
        <button
          disabled={disabled}
          style={{
            opacity: disabled ? 0.6 : 1,
          }}
          onClick={() => {
            console.warn('userData details', details);
          }}
        >
          {getText('submit')}
        </button>
      </div>
    </div>
  );
}

export default FullAccessForm;

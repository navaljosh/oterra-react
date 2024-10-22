import React from 'react';
import styles from './index.module.scss';
import { getText } from '../../../languageTexts';
import burger_bun from '../../../assets/apps/burger_bun.png';
import dumpling from '../../../assets/apps/dumpling.png';
import puff_snacks from '../../../assets/apps/puff_snacks.png';
import noodle from '../../../assets/apps/noodle.png';
import burger_sauce from '../../../assets/apps/burger_sauce.png';
import salad_dressing from '../../../assets/apps/salad_dressing.png';
import savory_dip from '../../../assets/apps/savory_dip.png';
import nugget from '../../../assets/apps/nugget.png';
import potato_chip from '../../../assets/apps/potato_chip.png';
import french_fries from '../../../assets/apps/french_fries.png';
import { useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../../../store/actionTypes';
// import { updateVariantColor } from '../../../api/awsApi';

const APPS = [
  {
    name: 'burger_bun',
    displayName: 'Burgers',
    icon: burger_bun,
    arLink:
      `https://studio.onirix.com/projects/47121bef41674ef39c8d8986648cd77d/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJyb2xlIjoxLCJpYXQiOjE3MjkyMzY3Mjd9.DSusaNFMJmJXiBaPTfJtp-DpnGwBfGPMI9ecMvG7ZyQ&email=${localStorage.getItem('loggedUserId')}`,
  },
  {
    name: 'dumpling',
    displayName: 'Dumplings',
    icon: dumpling,
    arLink:
      `https://studio.onirix.com/projects/4d1103e872a54f03bbaa94bd02dca26a/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJyb2xlIjoxLCJpYXQiOjE3MjkyMzY3Mjd9.DSusaNFMJmJXiBaPTfJtp-DpnGwBfGPMI9ecMvG7ZyQ&email=${localStorage.getItem('loggedUserId')}`,
  },
  {
    name: 'puff_snacks',
    displayName: 'Puffs',
    icon: puff_snacks,
    arLink:
      `https://studio.onirix.com/projects/617fd8874c8a4add94f0ed443830ad71/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJyb2xlIjoxLCJpYXQiOjE3MjkyMzY3Mjd9.DSusaNFMJmJXiBaPTfJtp-DpnGwBfGPMI9ecMvG7ZyQ&email=${localStorage.getItem('loggedUserId')}`,
  },
  {
    name: 'noodle',
    displayName: 'Noodles',
    icon: noodle,
    arLink:
      `https://studio.onirix.com/projects/ec93933fa3b9433090da70eb19a990bb/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJyb2xlIjoxLCJpYXQiOjE3MjkyMzY3Mjd9.DSusaNFMJmJXiBaPTfJtp-DpnGwBfGPMI9ecMvG7ZyQ&email=${localStorage.getItem('loggedUserId')}`,
  },
  {
    name: 'burger_sauce',
    displayName: 'Sauce',
    icon: burger_sauce,
    arLink:
      `https://studio.onirix.com/projects/0762c4918bc44536bd61f9635144bcea/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJyb2xlIjoxLCJpYXQiOjE3MjkyMzY3Mjd9.DSusaNFMJmJXiBaPTfJtp-DpnGwBfGPMI9ecMvG7ZyQ&email=${localStorage.getItem('loggedUserId')}`,
  },
  {
    name: 'salad_dressing',
    displayName: 'Salad',
    icon: salad_dressing,
    arLink:
      `https://studio.onirix.com/projects/2c3253648dbd41f9a2e9c24743782ede/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJyb2xlIjoxLCJpYXQiOjE3MjkyMzY3Mjd9.DSusaNFMJmJXiBaPTfJtp-DpnGwBfGPMI9ecMvG7ZyQ&email=${localStorage.getItem('loggedUserId')}`,
  },
  {
    name: 'savory_dip',
    displayName: 'Dips',
    icon: savory_dip,
    arLink:
      `https://studio.onirix.com/projects/1b076167888540059377b1dd91e5f83d/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJyb2xlIjoxLCJpYXQiOjE3MjkyMzY3Mjd9.DSusaNFMJmJXiBaPTfJtp-DpnGwBfGPMI9ecMvG7ZyQ&email=${localStorage.getItem('loggedUserId')}`,
  },
  {
    name: 'nugget',
    displayName: 'Nuggets',
    icon: nugget,
    arLink:
      `https://studio.onirix.com/projects/2ca729059bf54eb196de91df669347ec/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJyb2xlIjoxLCJpYXQiOjE3MjkyMzY3Mjd9.DSusaNFMJmJXiBaPTfJtp-DpnGwBfGPMI9ecMvG7ZyQ&email=${localStorage.getItem('loggedUserId')}`,
  },
  {
    name: 'potato_chip',
    displayName: 'Chips',
    icon: potato_chip,
    arLink:
      `https://studio.onirix.com/projects/8466a8ef15f6440db671161e627af27d/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJyb2xlIjoxLCJpYXQiOjE3MjkyMzY3Mjd9.DSusaNFMJmJXiBaPTfJtp-DpnGwBfGPMI9ecMvG7ZyQ&email=${localStorage.getItem('loggedUserId')}`,
  },
  {
    name: 'french_fries',
    displayName: 'Fries',
    icon: french_fries,
    arLink:
      `https://studio.onirix.com/projects/03fb7c60355e40d293af4e0be9e6f9d6/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJyb2xlIjoxLCJpYXQiOjE3MjkyMzY3Mjd9.DSusaNFMJmJXiBaPTfJtp-DpnGwBfGPMI9ecMvG7ZyQ&email=${localStorage.getItem('loggedUserId')}`,
  },
];

function AppPopup({ handleClose, setLoaded }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.appPopup}>
      <div className={styles.header}>{getText('choose_app')}</div>
      <div className={styles.content}>
        {APPS.map((entry) => {
          return (
            <div
              className={styles.appOption}
              key={entry.name}
              onClick={() => {
                dispatch({
                  type: ACTION_TYPES.APP_SELECTED,
                  payload: true,
                });
                dispatch({
                  type: ACTION_TYPES.SELECTED_APP,
                  payload: entry,
                });
                // @TODO AKASH API
                // updateVariantColor('yellow')
                handleClose();
                setLoaded(false)
              }}
            >
              <div className={styles.appIcon}>
                <img src={entry.icon} alt={entry.name} />
              </div>
              <div className={styles.appName}>{getText(entry.name)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AppPopup;

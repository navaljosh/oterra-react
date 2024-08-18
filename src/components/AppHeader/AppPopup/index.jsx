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

const APPS = [
  {
    name: 'burger_bun',
    icon: burger_bun,
    arLink: 'https://studio.onirix.com/projects/a75434af9a1f4ed08689fd55c4a9da88/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExMjY1LCJwcm9qZWN0SWQiOjMzODc4LCJyb2xlIjozLCJpYXQiOjE2NjY3ODAxMjJ9.W7IGyoX-pinIB7aVgcN9mpvTzu9kl9uC-qLLKP_9_D4&background=%23dbd5fb&preview=true&hide_controls=true&ar_button=true',
  },
  {
    name: 'dumpling',
    icon: dumpling,
    arLink: 'https://player.onirix.com/exp/3OkQaz',
  },
  {
    name: 'puff_snacks',
    icon: puff_snacks,
    arLink: 'https://player.onirix.com/exp/3OkQaz',
  },
  {
    name: 'noodle',
    icon: noodle,
    arLink: 'https://player.onirix.com/exp/3OkQaz',
  },
  {
    name: 'burger_sauce',
    icon: burger_sauce,
    arLink: 'https://player.onirix.com/exp/3OkQaz',
  },
  {
    name: 'salad_dressing',
    icon: salad_dressing,
    arLink: 'https://player.onirix.com/exp/3OkQaz',
  },
  {
    name: 'savory_dip',
    icon: savory_dip,
    arLink: 'https://player.onirix.com/exp/3OkQaz',
  },
  {
    name: 'nugget',
    icon: nugget,
    arLink: 'https://player.onirix.com/exp/3OkQaz',
  },
  {
    name: 'potato_chip',
    icon: potato_chip,
    arLink: 'https://player.onirix.com/exp/3OkQaz',
  },
  {
    name: 'french_fries',
    icon: french_fries,
    arLink: 'https://player.onirix.com/exp/3OkQaz',
  },
];

function AppPopup({ handleClose }) {
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
                handleClose();
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

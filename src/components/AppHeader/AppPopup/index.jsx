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
      'https://studio.onirix.com/projects/1b076167888540059377b1dd91e5f83d/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJwcm9qZWN0SWQiOjg2MzI1LCJyb2xlIjozLCJpYXQiOjE3MjQwMjMwOTF9.ccZJqbtGSgGSx2AZwHyi5bLCyb3CRNwvY9kiGnDKBv8',
  },
  {
    name: 'dumpling',
    displayName: 'Dumplings',
    icon: dumpling,
    arLink:
      'https://studio.onirix.com/projects/1b076167888540059377b1dd91e5f83d/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJwcm9qZWN0SWQiOjg2MzI1LCJyb2xlIjozLCJpYXQiOjE3MjQwMjMwOTF9.ccZJqbtGSgGSx2AZwHyi5bLCyb3CRNwvY9kiGnDKBv8&background=alpha&preview=true&hide_controls=true&ar_button=false',
  },
  {
    name: 'puff_snacks',
    displayName: 'Puffs',
    icon: puff_snacks,
    arLink:
      'https://studio.onirix.com/projects/1b076167888540059377b1dd91e5f83d/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJwcm9qZWN0SWQiOjg2MzI1LCJyb2xlIjozLCJpYXQiOjE3MjQwMjMwOTF9.ccZJqbtGSgGSx2AZwHyi5bLCyb3CRNwvY9kiGnDKBv8&background=alpha&preview=true&hide_controls=true&ar_button=false',
  },
  {
    name: 'noodle',
    displayName: 'Noodles',
    icon: noodle,
    arLink:
      'https://studio.onirix.com/projects/1b076167888540059377b1dd91e5f83d/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJwcm9qZWN0SWQiOjg2MzI1LCJyb2xlIjozLCJpYXQiOjE3MjQwMjMwOTF9.ccZJqbtGSgGSx2AZwHyi5bLCyb3CRNwvY9kiGnDKBv8&background=alpha&preview=true&hide_controls=true&ar_button=false',
  },
  {
    name: 'burger_sauce',
    displayName: 'Sauce',
    icon: burger_sauce,
    arLink:
      'https://studio.onirix.com/projects/1b076167888540059377b1dd91e5f83d/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJwcm9qZWN0SWQiOjg2MzI1LCJyb2xlIjozLCJpYXQiOjE3MjQwMjMwOTF9.ccZJqbtGSgGSx2AZwHyi5bLCyb3CRNwvY9kiGnDKBv8&background=alpha&preview=true&hide_controls=true&ar_button=false',
  },
  {
    name: 'salad_dressing',
    displayName: 'Salad',
    icon: salad_dressing,
    arLink:
      'https://studio.onirix.com/projects/1b076167888540059377b1dd91e5f83d/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJwcm9qZWN0SWQiOjg2MzI1LCJyb2xlIjozLCJpYXQiOjE3MjQwMjMwOTF9.ccZJqbtGSgGSx2AZwHyi5bLCyb3CRNwvY9kiGnDKBv8&background=alpha&preview=true&hide_controls=true&ar_button=false',
  },
  {
    name: 'savory_dip',
    displayName: 'Dips',
    icon: savory_dip,
    arLink:
      'https://studio.onirix.com/projects/1b076167888540059377b1dd91e5f83d/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJwcm9qZWN0SWQiOjg2MzI1LCJyb2xlIjozLCJpYXQiOjE3MjQwMjMwOTF9.ccZJqbtGSgGSx2AZwHyi5bLCyb3CRNwvY9kiGnDKBv8&background=alpha&preview=true&hide_controls=true&ar_button=false',
  },
  {
    name: 'nugget',
    displayName: 'Nuggets',
    icon: nugget,
    arLink:
      'https://studio.onirix.com/projects/1b076167888540059377b1dd91e5f83d/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJwcm9qZWN0SWQiOjg2MzI1LCJyb2xlIjozLCJpYXQiOjE3MjQwMjMwOTF9.ccZJqbtGSgGSx2AZwHyi5bLCyb3CRNwvY9kiGnDKBv8&background=alpha&preview=true&hide_controls=true&ar_button=false',
  },
  {
    name: 'potato_chip',
    displayName: 'Chips',
    icon: potato_chip,
    arLink:
      'https://studio.onirix.com/projects/1b076167888540059377b1dd91e5f83d/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJwcm9qZWN0SWQiOjg2MzI1LCJyb2xlIjozLCJpYXQiOjE3MjQwMjMwOTF9.ccZJqbtGSgGSx2AZwHyi5bLCyb3CRNwvY9kiGnDKBv8&background=alpha&preview=true&hide_controls=true&ar_button=false',
  },
  {
    name: 'french_fries',
    displayName: 'Fries',
    icon: french_fries,
    arLink:
      'https://studio.onirix.com/projects/1b076167888540059377b1dd91e5f83d/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMzI0LCJwcm9qZWN0SWQiOjg2MzI1LCJyb2xlIjozLCJpYXQiOjE3MjQwMjMwOTF9.ccZJqbtGSgGSx2AZwHyi5bLCyb3CRNwvY9kiGnDKBv8&background=alpha&preview=true&hide_controls=true&ar_button=false',
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
                // @TODO AKASH API
                // updateVariantColor('yellow')
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

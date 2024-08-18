import React, { useRef, useState } from 'react';
import styles from './index.module.scss';
import { getText } from '../../languageTexts';

const appsOptions = [
  'beverage',
  'confectionary',
  'dairy_n_fruit',
  'ice_creme',
  'bakery_n_cereals',
  'savory_n_meat',
  'plant_based',
  'pet_food',
  'none',
];

function CustomSelectBox({ label, options = appsOptions, multiSelect = true }) {
  const divRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const selectedOpts = [...selected];
  return (
    <>
      <div
        onClick={() => {
          setOpen(false);
        }}
        style={{
          position: 'fixed',
          height: open ? '100vh' : 0,
          width: open ? '100vw' : 0,
          background: '#00000060',
          top: 0,
          left: 0,
        }}
      ></div>
      <div
        className={styles.customSelectBox}
        style={{
          overflow: open ? 'visible' : 'hidden',
        }}
        ref={divRef}
      >
        <label>{label}</label>
        <div
          className={styles.inputOptions}
          style={{
            minHeight: open ? options.length * 40 : 40,
            maxHeight: open ? options.length * 40 : 40,
            padding: selected.length & !open ? '10px 20px' : '0 20px',
            outlineWidth: open ? 1 : 0,
          }}
        >
          {selected.length && !open ? (
            <>
              <div
                onClick={() => setOpen(true)}
                style={{
                  display: 'flex',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  height: 40,
                  alignItems: 'center',
                  whiteSpace: 'nowrap',
                }}
              >
                {selectedOpts.splice(0, 2).join(', ')}
                {selected.length > 1 ? '...' : null}
              </div>
            </>
          ) : (
            options.map((entry, index) => {
              return (
                <div
                  onClick={() => {
                    if (!open) {
                      setOpen(true);
                    } else {
                      if (index === options.length - 1) {
                        setSelected(['None']);
                      } else {
                        if (selected.includes(entry)) {
                          const filtered = selected.filter(
                            (item) => item !== entry
                          );
                          setSelected(filtered);
                        } else {
                          const noneOptionRemoved = selected.filter(
                            (item) => item !== 'None'
                          );
                          setSelected([...noneOptionRemoved, entry]);
                        }
                      }
                    }
                  }}
                  key={index}
                  style={{
                    minHeight: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    accentColor: '#E34125',
                  }}
                >
                  <div>{getText(entry)}</div>
                  {open ? (
                    <input type='radio' checked={selected.includes(entry)} />
                  ) : (
                    <div className={styles.down}></div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default CustomSelectBox;

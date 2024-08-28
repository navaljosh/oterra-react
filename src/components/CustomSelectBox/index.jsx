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

function CustomSelectBox({
  label,
  options = appsOptions,
  onSelect = () => {},
  multiSelect = true,
  closeOnSelect = false,
}) {
  const divRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const selectedOpts = selected.map((entry) => getText(entry));

  return (
    <>
      <div
        onClick={(e) => {
          setOpen(false);
          onSelect(multiSelect ? selectedOpts : selectedOpts[0]);
        }}
        style={{
          position: 'fixed',
          height: open ? '100vh' : 0,
          width: open ? '100vw' : 0,
          // background: '#00000060',
          top: 0,
          left: 0,
          zIndex: open ? 4 : -1,
        }}
      ></div>
      <div
        className={styles.customSelectBox}
        style={{
          overflow: open ? 'visible' : 'hidden',
          zIndex: open ? 5 : 0,
        }}
        ref={divRef}
      >
        <label>{label}</label>
        <div
          className={styles.inputOptions}
          style={{
            // minHeight: open ? options.length * 40 : 40,
            maxHeight: open ? 'max-content' : 40,
            padding: selected.length & !open ? '10px 20px' : '0 20px',
            outlineWidth: open ? 1 : 0,
          }}
        >
          {selected.length && !open ? (
            <>
              <div
                onClick={() => setOpen(!open)}
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
                      setOpen(!open);
                    } else {
                      if (index === options.length - 1) {
                        setSelected([options[options.length - 1]]);
                        if (closeOnSelect) {
                          setOpen(false);
                          onSelect(entry);
                        }
                      } else {
                        if (selected.includes(entry)) {
                          const filtered = selected.filter(
                            (item) => item !== entry
                          );
                          setSelected(filtered);
                        }
                        if (multiSelect) {
                          const noneOptionRemoved = selected.filter(
                            (item) => item !== 'None'
                          );
                          setSelected([...noneOptionRemoved, entry]);
                        } else {
                          setSelected([entry]);
                          if (closeOnSelect) {
                            setOpen(false);
                            onSelect(entry);
                          }
                        }
                      }
                    }
                  }}
                  key={index}
                  style={{
                    // minHeight: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    accentColor: '#E34125',
                    zIndex: open ? 5 : 0,
                    marginBottom: 7,
                    marginTop: 7
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

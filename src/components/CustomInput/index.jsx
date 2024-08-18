import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';

function CustomInput({ label, onChange = () => {}, defaultValue, type, maxLength = 50 }) {
  const [value, setValue] = useState(defaultValue);
  const myRef = useRef(null);
  const inputRef = useRef(null);
  const divRef = useRef(null);

  const animateLabel = useCallback(() => {
    const { style = {} } = myRef.current || { style: {} };
    style.color = '#8A8A8A';
    style.top = '-3px';
    style.zIndex = 0;
    style.fontSize = '12px';
    style.padding = '10px 20px';
    style.width = 'auto';
  }, []);

  const restoreLabel = () => {
    const { style: styleDiv = {} } = divRef.current || { style: {} };
    if (value) {
      styleDiv.borderColor = '#8a8a8a';
      return;
    } else {
      const { style = {} } = myRef.current || { style: {} };
      style.color = '#000000';
      style.top = 'calc(50% - 9px)';
      style.fontSize = '15px';
      style.padding = '0 20px';
      style.zIndex = 1;
      style.width = 'calc(100% - 30px)';
      styleDiv.borderColor = '#8a8a8a';
    }
  };

  useEffect(() => {
    if (defaultValue || defaultValue === '') {
      setValue(defaultValue);
      if (defaultValue) {
        animateLabel();
      }
    }
  }, [animateLabel, defaultValue]);

  return (
    <div className={styles.customInput} ref={divRef}>
      <label
        ref={myRef}
        onClick={() => {
          inputRef.current.focus();
          animateLabel();
        }}
        style={{
          transition: 'all .4s ease',
          maxHeight: 56,
        }}
      >
        {label}
      </label>
      <input
        ref={inputRef}
        type={type}
        autoComplete='off'
        maxLength={maxLength}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e);
        }}
        defaultValue={defaultValue}
        onFocus={() => {
          const { style: styleDiv = {} } = divRef.current || { style: {} };
          styleDiv.borderColor = '#E03A21';
          animateLabel();
        }}
        onBlur={restoreLabel}
      />
    </div>
  );
}

export default CustomInput;

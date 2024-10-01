import React, { useState } from 'react';
import styles from './index.module.scss';
import arrowNav from '../../assets/arrowNav.svg';

const getSoltionImage = (name) => {
  return require(`../../assets/Solutions/${name}.png`);
};

export default function SolutionComp({
  solutionData,
  setSelectedTab = () => {},
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const selected = solutionData[currentIndex];
  const tabName = selected.name;

  return (
    <div className={styles.solution} id='infoContent'>
      <div className={styles.tabName}>{tabName}</div>
      <div className={styles.close} onClick={() => setSelectedTab(false)}>
        <img
          width='28'
          height='28'
          src='https://img.icons8.com/sf-regular/48/delete-sign.png'
          alt='delete-sign'
        />
      </div>
      <div className={styles.slider}>
        <div
          className={styles.leftControl}
          onClick={() => {
            if (currentIndex > 0) {
              setCurrentIndex((prev) => prev - 1);
              document.getElementById('scrollDiv').scrollTo({
                left: (currentIndex - 1) * 181,
                behavior: 'smooth',
              });
            }
          }}
          style={{
            visibility: currentIndex > 0 ? 'visible' : 'hidden',
          }}
        >
          <img src={arrowNav} alt='prev' />
        </div>
        <div className={styles.content} id='scrollDiv'>
          {solutionData.map((entry, index) => {
            return (
              <div
                className={styles.box}
                // style={{
                //   transform: `translateX(${currentIndex * -182}px)`,
                // }}
              >
                <div className={styles.imgBox}>
                  <img src={getSoltionImage(entry.icon)} alt={tabName} />
                </div>
                <div className={styles.knowMore}>
                  <button onClick={() => window.open(entry.link, '_blank')}>
                    Know More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={styles.rightControl}
          style={{
            visibility:
              currentIndex < solutionData.length - 1 ? 'visible' : 'hidden',
          }}
          onClick={() => {
            if (currentIndex < solutionData.length - 1) {
              setCurrentIndex((prev) => prev + 1);
              document.getElementById('scrollDiv').scrollTo({
                left: (currentIndex + 1) * 181,
                behavior: 'smooth',
              });
            }
          }}
        >
          <img
            src={arrowNav}
            alt='next'
            style={{
              transform: 'rotate(180deg)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

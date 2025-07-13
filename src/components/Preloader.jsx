import React from 'react';
import styles from '../styles/Preloader.module.css';

const Preloader = () => {
  return (
    <div className={styles.loader}>
      <svg
        className={styles.svg}
        viewBox="0 0 850 600"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* Closer top-left text */}
        <text
          x="17%"
          y="33%"
          textAnchor="start"
          className={styles.subText}
        >
          welcome to
        </text>

        {/* Center big text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className={styles.mainText}
        >
          Bilal's
        </text>

        {/* Closer bottom-right text */}
        <text
          x="74%"
          y="62%"
          textAnchor="end"
          className={styles.subText}
        >
          Portfolio
        </text>
      </svg>
    </div>
  );
};

export default Preloader;
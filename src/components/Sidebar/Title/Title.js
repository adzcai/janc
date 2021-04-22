import React from 'react';
import styles from './Title.module.scss';

const Title = ({ title, subtitle }) => (
  <div className={styles['title']}>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
);

export default Title;

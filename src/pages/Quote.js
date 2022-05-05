import React from 'react';
import styles from './Quote.module.scss';

const Quote = () => (
  <div className={styles.quoteContainer}>
    <p className={styles.quote}>
      Mathematics is not about numbers, equations, computations, or algorithms:
      It is about understanding.
    </p>
    <p className={styles.author}>- William Paul Thurston</p>
  </div>
);

export default Quote;

import React from 'react';
import styles from './OfflineIndicator.module.css';
// import { ReactComponent as OfflineIcon } from './offlineIcon.svg';

const OfflineIndicator = () => {
  return (
    <div className={styles.offlineContainer}>
        <img src="./W.png" alt="" style={{width: "13rem"}}/>
      <p className={styles.offlineText}>You are offline. Please check your internet connection.</p>
    </div>
  );
};

export default OfflineIndicator;

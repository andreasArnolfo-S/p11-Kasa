import React, { FC } from 'react';
import styles from './host.module.css';

interface HostProps { 
  host: {
    name: string,
    picture: string,
  }
}

const Host: FC<HostProps> = (props) => (
  <div className={styles.Host}>
    <p>{props.host.name}</p>
    <img
      src={props.host.picture}
      alt={'Photo de profile de' + props.host.name}
    />
  </div>
);

export default Host;

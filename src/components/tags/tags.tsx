import { FC } from 'react';
import styles from './tags.module.css';

interface TagsProps {
  tags: string[];
}

const Tags: FC<TagsProps> = (props) => (
  <div className={styles.logement_tags}>
    {props.tags.map((e) => (
      <p className={styles.tag} key={e}>{e}</p>
    ))}
  </div>
);

export default Tags;

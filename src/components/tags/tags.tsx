import { FC } from 'react';
import styles from './tags.module.css';

interface TagsProps {
  tags: string[];
}

const Tags: FC<TagsProps> = (props) => (
<>
  {props.tags.map((e) => (
    <p className={styles.tag} key={e}>{e}</p>
  ))}
</>
);

export default Tags;

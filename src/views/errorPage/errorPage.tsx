import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './errorPage.module.css';

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = () => (
  <div className={styles.ErrorPage}>
    <h1 className={styles.errorNumber}>404</h1>
    <h2 className={styles.errorTxt}>Oups ! La page que vous demandez n'existe pas.</h2>
    <Link className={styles.linkToHome} to={'/'}>Retourner sur la page d'accueil</Link>
  </div>
);

export default ErrorPage;

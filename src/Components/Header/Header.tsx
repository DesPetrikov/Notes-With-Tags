import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Notes with #tags</h1>
    </header>
  );
};

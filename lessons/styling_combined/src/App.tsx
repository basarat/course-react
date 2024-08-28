import styles from './App.module.css';

export default function App() {
  return (
    <>
      <div className={styles.red} style={{ fontWeight: 'bold' }}>
        Hello Fam!
      </div>
      <div className={styles.blue} style={{ fontStyle: 'italic' }}>
        Hope you have a great day!
      </div>
    </>
  );
}
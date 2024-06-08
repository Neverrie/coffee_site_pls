import Link from 'next/link';
import styles from './profile.css';

export default function Login() {
  return (
    <div className={styles.videoBackground}>
      
      <div className={styles.border}>
        <h1 className={styles.title}>Авторизация</h1>
        <form className={styles.form}>
          <input type="text" placeholder="Логин" className={styles.input} />
          <input type="password" placeholder="Пароль" className={styles.input} />
          <button type="submit" className={styles.submitButton}>Войти</button>
        </form>
       
      </div>
    </div>
  );
}

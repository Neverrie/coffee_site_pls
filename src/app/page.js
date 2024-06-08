import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import Header from './components/Header';
import VideoContainer from './components/VideoContainer';

export default function Home() {
  return (
    <div className={styles.videoBackground}>
      <VideoContainer src="/video.mp4" />
      <div className={styles.border}>
        <Header />
        <div className={styles.buttons}>
          <Link href="/profile" className={styles.link_button}>
            Профиль
          </Link>
          <Link href="/menu" className={styles.link_button}>
            Меню
          </Link>
          <Link href="/location" className={styles.link_button}>
            Местоположение
          </Link>
          <Link href="/about" className={styles.link_button}>
            О нас
          </Link>
        </div>
      </div>
    </div>
  );
}

'use client'
import React from 'react';
import Header from '../components/Header';
import VideoContainer from '../components/VideoContainer';
import styles from '../login/login.module.css';
import Link from 'next/link';
import useAuthStore from '../store/store';

const ProfilePage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    // Перенаправление на страницу входа после выхода
    window.location.href = '/login';
  };

  return (
    <div className={styles.container}>
      <VideoContainer src="/ugabuga.mp4" />
      <div className={styles.content}>
        <Header />
        <div className={styles.profileContainer}>
          <h2>Welcome, {user ? user.username : 'Guest'}!</h2>
          <button onClick={handleLogout} className={styles.link_button}>Выйти</button>
        </div>
        <div className={styles.linksContainer}>
          <Link href="/about" className={styles.link_button}>
            About Us
          </Link>
          <Link href="/location" className={styles.link_button}>
            Location
          </Link>
          <Link href="/" className={styles.link_button}>
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
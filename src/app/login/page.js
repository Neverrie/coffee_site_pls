// pages/login.js
"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import VideoContainer from '../components/VideoContainer';
import styles from './login.module.css';
import { useRouter } from 'next/navigation';
import useAuthStore from '../store/store';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuthStore();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Пример аутентификации
    if (username === 'user' && password === 'password') {
      login({ username });
      router.push('/profile');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={styles.container}>
      <VideoContainer src="/ugabuga.mp4" />
      <div className={styles.content}>
        <Header />
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.link_button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
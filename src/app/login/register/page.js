'use client'
import React, { useState } from 'react';
import Header from '../../components/Header';
import VideoContainer from '../../components/VideoContainer';
import styles from '../login.module.css';
import { useRouter } from 'next/navigation';
import useAuthStore from '../../store/store';
import Link from 'next/link';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuthStore();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      register({ username, password }); 

      router.push('/profile');
    } else {
      alert('Please fill out all fields');
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
import { useState } from 'react'
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';

// author ( avatar_url: "", name: "", role: "")
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/falivith.png',
      name: 'Gabriel Ramires',
      role: 'Web Developer'
    },
    content: [
      
    ]
  }
];

export function App() {
  return (
    <div>
      <Header/>
      <div className = {styles.wrapper}>
        <Sidebar/>
        <main>
          <Post/>
          <Post/>
        </main>
      </div>
    </div>
  )
}
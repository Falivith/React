import { useState } from 'react'
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/falivith.png',
      name: 'Gabriel Ramires',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Lorem, ipsum dolor sit amet consecteturp adipisicing elit. Cupiditate, officia quam sunt placeat suscipit, vero non laudantium debitis doloribus, magni dolore maxime temporibus culpa saepe dolor cumque. Eveniet, eum in!'},
      { type: 'link', content: 'github.com/falivith'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/rafamattia2.png',
      name: 'Rafael Mattia',
      role: 'Java Developer'
    },
    content: [
      { type: 'paragraph', content: 'Lorem, ipsum dolor sit amet consecteturp adipisicing elit. Cupiditate, officia quam sunt placeat suscipit, vero non laudantium debitis doloribus, magni dolore maxime temporibus culpa saepe dolor cumque. Eveniet, eum in!'},
      { type: 'link', content: 'github.com/falivith'}
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
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
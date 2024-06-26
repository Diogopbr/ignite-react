import { Header } from './components/Header'
import { Post } from './components/Post';
import { Sidebar } from './components/sidebar';


import styles from './App.module.css';

import './global.css'

export default function App() {

  return (
   <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post
          author="Diogo Pereira"
          content="blablablablablablablablablablabla"
        />
        <Post
          author="Kauan"
          content="Diamante lixo"
        />
      </main>
    </div>
  </div>
  )
}
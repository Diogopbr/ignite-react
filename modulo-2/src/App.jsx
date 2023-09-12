import { Header } from './components/Header'
import { Post } from "./Post"

import styles from './App.module.css';

import './global.css'
import { Sidebar } from './components/sidebar';

export function App() {
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

export default App
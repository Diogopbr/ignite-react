import { Post } from "./Post"
import { Header } from './components/Header'
import './global.css'

function App() {
  return (
   <div>
    <Header />

      <Post
        author="Diogo Pereira"
        content="blablablablablablablablablablabla"
      />
      <Post
        author="Kauan"
        content="Diamante lixo"
      />
  </div>
  )
}

export default App
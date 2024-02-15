import { Header } from "./Components/Header.tsx"
import { Post, PostType } from "./Components/Post.tsx"
import { Sidebar } from "./Components/Sidebar.tsx"
import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/anjosmarcos.png",
      name: "Marcos Alexandre",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', text: 'Fala galeraa 👋'},
      {type: 'paragraph', text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'paragraph', text: '👉 jane.design/doctorcare'},
      {type: 'link', text: '#novoprojeto #nlw #rocketseat'}
    ],
    publishedAt: new Date('2024-02-12 19:44:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO na Rocketseat"
    },
    content: [
      {type: 'paragraph', text: 'Fala galeraa 👋'},
      {type: 'paragraph', text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'paragraph', text: '👉 jane.design/doctorcare'},
      {type: 'link', text: '#novoprojeto #nlw #rocketseat'}
    ],
    publishedAt: new Date('2024-01-12 19:44:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Instrutor na Rocketseat"
    },
    content: [
      {type: 'paragraph', text: 'Fala galeraa 👋'},
      {type: 'paragraph', text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'paragraph', text: '👉 jane.design/doctorcare'},
      {type: 'link', text: '#novoprojeto #nlw #rocketseat'}
    ],
    publishedAt: new Date('2024-02-12 19:42:00'),
  },
]



function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return ( 
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App


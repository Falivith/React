import { useState } from 'react'
import { Header } from './components/Header';
import { Post } from './Post';
import './global.css';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Post 
        author="Gabriel Ramires" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe dicta officiis odio nemo perferendis omnis? Quod voluptas veritatis sit laboriosam sunt vero vitae at, similique quaerat molestiae, odio placeat." 
      />
        <Post 
        author="Júlia Braga" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe dicta officiis odio nemo perferendis omnis? Quod voluptas veritatis sit laboriosam sunt vero vitae at, similique quaerat molestiae, odio placeat." 
      />
    </div>
  )
}
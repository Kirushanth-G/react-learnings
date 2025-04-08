import { useState } from 'react'
import HeaderCard from './components/HeaderCard'
import CreatePostCard from './components/CreatePostCard'
import './App.css'

function App() {
  

  return (
    <div className="container">
      <HeaderCard />
      <CreatePostCard />
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

import Container from 'react-bootstrap/Container';

function App() {

  return (

    <Container className='mt-5 p-5 col-12 col-lg-8' >
      <TodoCreate />
      <TodoList />
    </Container>

  )
}

export default App

import React from 'react'
import { render } from 'react-dom'
import './index.css'

const App = () => {
  return <div className='w-screen bg-black'>App</div>
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)

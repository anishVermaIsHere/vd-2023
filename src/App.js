import React from 'react'
import VouchApp from './app/VouchApp'
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <VouchApp />
    </Router>
  )
}

export default App
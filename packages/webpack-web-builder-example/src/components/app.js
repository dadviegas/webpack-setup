// Dependencies
import React from 'react'
import 'assets/index.scss'
// Components
import Header from './header'
import Content from './content'
import Footer from './footer'

// Styles
import 'assets/App.scss'

const App = () => {
  return (
    <div className='site-wrapper'>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App

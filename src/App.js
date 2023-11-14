import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
import Fashion from './pages/Fashion'
import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'
import Channel from './pages/Channel'



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/channel/:channelId" element={<Channel />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
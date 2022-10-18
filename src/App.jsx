import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import About from './pages/About'
import Location from './pages/Location'

import GlobalStyle from './utils/style/GlobalStyle'




function App() {
  return (
    <div className="App">
      <GlobalStyle />
          
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
            <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
          
    </div>
  )
}

export default App
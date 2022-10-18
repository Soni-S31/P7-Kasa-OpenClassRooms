import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
//import Footer from './components/Footer'
import GlobalStyle from './utils/style/GlobalStyle'


function App() {
  return (
    <div className="App">
      <GlobalStyle />
          
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
          
        
    </div>
  )
}

export default App

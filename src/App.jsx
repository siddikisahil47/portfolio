import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Footer from './sections/Footer/Footer'
import Header from './sections/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Characters } from './pages/Characters'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { ButtonToTop } from './components/ButtonToTop'
import './styles/global.css'

function App() {

  return (
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/characters/:id" element={<Characters />} />
      <Route path="/search" element={<Search />} />
    </Routes>
    <ButtonToTop />
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Characters } from './pages/Characters'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Search } from './pages/Search'
import './styles/global.css'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/characters/:id" element={<Characters />} />
      <Route path="/search" element={<Search />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

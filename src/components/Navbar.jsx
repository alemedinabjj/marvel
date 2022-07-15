import { NavLink } from 'react-router-dom'
import { SearchBar } from './SearchBar'

export function Navbar() {
  return (
    <nav className='w-full h-fit p-5 bg-red-900 text-white'>
      <ul className='flex gap-3 text-sm'>
        <NavLink
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          to="/contact"
        >
          Contact
        </NavLink>
      </ul>
      <SearchBar />
    </nav>
  )
}
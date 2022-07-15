import { NavLink } from 'react-router-dom'
import { SearchBar } from './SearchBar'

export function Navbar() {
  return (
    <nav className='w-full  text-white'>
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
    </nav>
  )
}
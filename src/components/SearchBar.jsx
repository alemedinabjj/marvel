import { Button } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

export function SearchBar() {

  const navigate = useNavigate();
  const [hero, setHero] = useState();

  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value)
  }

  const onButtonClickHandler = async (hero) => {
    console.log(hero)
    navigate(`/search?q=${search}`)
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      onButtonClickHandler(search)
    }
  })

  return (
    <div className='flex items-center justify-center gap-5 sm:gap-5 m-2'>
      <h1 className="text-xl text-white drop-shadow-2xl drop-s bold" >Marvel Char</h1>
    <input type='search' className='text-white bg-transparent border-2 rounded p-2 border-red-900 focus:border-red-800 outline-none' value={search} onChange={handleChange}  />
    <Button variant="contained" size="small" onClick={onButtonClickHandler}>Search</Button>
  </div>
  )
}
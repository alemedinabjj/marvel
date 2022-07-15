import { TextField } from "@mui/material"
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

  return (
    <div className='flex items-center justify-center gap-2 sm:gap-5 m-5'>
    <TextField size="small" className='w-full dark:bg-transparent text-white' id="filled-basic"  variant='filled'  label="Character" type="search"  value={search} onChange={handleChange}  />
    <Button variant="contained" size="small" onClick={onButtonClickHandler}>Search</Button>
  </div>
  )
}
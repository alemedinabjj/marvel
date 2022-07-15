import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";
import { useState, useEffect } from "react";


export function Header () {

  const [Header, setHeader] = useState(false);

  function scrollHeader() {
    if (window.scrollY > 50) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollHeader();
    })
  },[]) 


  return (
      <>
      
      
      {

        Header === true ? (
          <header className="w-full shadow-xl p-0 transition-all fixed z-10 bg-red-700 flex flex-col gap-4">
          <SearchBar />
        </header>

        ) :
        (
          <header className="w-full shadow-2xl p-5 z-10 fixed transition-all bg-red-700 flex flex-col gap-4">
          <Navbar />
          <SearchBar />
        </header>
        )

      }
      
      
      </>

  )
}
import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";
import { useState, useEffect } from "react";


export function Header () {

  const [Header, setHeader] = useState(false);

  function scrollHeader() {
    if (window.scrollY > 100) {
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
          <header className="w-full p-0 transition fixed z-10 bg-red-700 flex flex-col gap-4">
          <SearchBar />
        </header>

        ) :
        (
          <header className="w-full p-5 transition bg-red-700 flex flex-col gap-4">
          <Navbar />
          <SearchBar />
        </header>
        )

      }
      
      
      </>

  )
}
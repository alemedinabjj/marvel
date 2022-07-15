import { useState, useEffect } from 'react'

export function ButtonToTop() {

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    } )
  },[])


  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div>
      {
        showTopBtn && (
        <button className="fixed bottom-0 right-0 m-2 p-2 bg-red-700 text-white rounded-full shadow-2xl border-2 border-white text-center transition hover:shadow-2xl hover:bg-red-800 w-10 h-10 animate-bounce" onClick={toTop}>
          ↑
        </button>
        ) 
      }
      
    </div>
  )
}
import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";

export function Header () {
  return (
    <header className="w-full p-5 bg-red-700 flex flex-col gap-4">
      <Navbar />
      <SearchBar />
    </header>
  )
}
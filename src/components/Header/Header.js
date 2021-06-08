import SearchBar from "./SearchBar"
import TopLeftMenu from "./TopLeftMenu"

import "../../styles/header.css"

function Header() {
  return(
    <header className="header">
      <TopLeftMenu />
      <SearchBar />
     </header>
  )
}

export default Header
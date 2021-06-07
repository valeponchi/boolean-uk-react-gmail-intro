import TopLeftMenu from "./TopLeftMenu"
import TopRightMenu from "./TopRightMenu"

function Header() {
  return(
    <header className="header">
      <TopLeftMenu />
      <TopRightMenu />
     </header>
  )
}

export default Header
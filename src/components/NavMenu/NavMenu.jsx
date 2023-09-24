import '../../App.css'
import NavHomePageButton from '../NavHomePageButton/NavHomePageButton'
import NavMyPlaylistButton from '../NavMyPlaylistButton/NavMyPlaylistButton'
import NavSighInButton from '../NavSighInButton/NavSighInButton'

function NavMenu() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger">
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
      <div className="nav__menu menu">
        <ul className="menu__list">
          <NavHomePageButton />
          <NavMyPlaylistButton />
          <NavSighInButton />
        </ul>
      </div>
    </nav>
  )
}

export default NavMenu

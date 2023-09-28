function NavBurgerButton({ handleClick }) {
  return (
    <div onClick={handleClick} role="button" className="nav__burger burger">
      <span className="burger__line" />
      <span className="burger__line" />
      <span className="burger__line" />
    </div>
  )
}

export default NavBurgerButton

import { Link } from 'react-router-dom'
import './SignIn.styled.css'

export function SignIn() {
  return (
    <div className="wrapper">
      <div className="container-enter">
        <div className="modal__block">
          <form className="modal__form-login" action="#">
            <a href="../">
              <div className="modal__logo">
                <img src="../img/logo_modal.png" alt="logo" />
              </div>
            </a>
            <input
              className="modal__input login"
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className="modal__input password"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button type="button" className="modal__btn-enter">
              <Link to="/">Войти</Link>
            </button>
            <button type="button" className="modal__btn-signup">
              <Link to="/registration">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

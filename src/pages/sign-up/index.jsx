import { Link } from 'react-router-dom'
import * as S from './index.styled'

export function SignUp() {
  return (
    <S.Wrapper>
      <S.ContainerSignup>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <a href="../">
              <S.ModalLogo>
                <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </a>
            <S.ModalInput type="text" name="login" placeholder="Почта" />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <S.ModalBtnSignupEnt type="button">
              <Link
                onClick={() => {
                  localStorage.setItem('user', 'true')
                }}
                to="/login"
              >
                Зарегистрироваться
              </Link>
            </S.ModalBtnSignupEnt>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignup>
    </S.Wrapper>
  )
}

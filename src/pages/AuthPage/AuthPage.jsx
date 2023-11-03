import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import * as S from './AuthPage.styles'
import { postLogin, postRegistration } from '../../modules/api'
import { UserContext } from '../../contexts/useAuthContexts'

export default function AuthPage({ isLoginMode = false }) {
  const [error, setError] = useState(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const user = useContext(UserContext)

  const handleLogin = async ({ email, password }) => {
    setIsLoading(true)
    if (!email) {
      setError('Укажите Email')
      return
    }

    if (!password) {
      setError('Укажите пароль')
      return
    }

    postLogin({ email, password })
      .then(() => {
        user.logIn(email, password)
        user.setUser({ userName: email, password })
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false))
  }

  const handleRegister = async () => {
    setIsLoading(true)
    if (!email) {
      setError('Укажите Email')
      return
    }

    if (!password) {
      setError('Укажите пароль')
      return
    }

    if (!repeatPassword) {
      setError('Повторите пароль')
      return
    }

    if (password !== repeatPassword) {
      setError('Пароли не совпадают')
      return
    }

    postRegistration({ email, password })
      .then(() => {
        user.logIn(email, password)
        user.setUser({ userName: email, password })
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => setIsLoading(false))
  }

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null)
  }, [isLoginMode, email, password, repeatPassword])

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton
                $isLoading={isLoading}
                onClick={() => handleLogin({ email, password })}
              >
                Войти
              </S.PrimaryButton>

              <Link to="/registration">
                <S.SecondaryButton $isLoading={isLoading}>
                  Зарегистрироваться
                </S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton $isLoading={isLoading} onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>{' '}
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}

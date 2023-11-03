import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from './routes'
import { UserContext } from './contexts/useAuthContexts'

export function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null,
  )

  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem('user')
    navigate('/login', { replace: true })
  }

  const logIn = (email, password) => {
    localStorage.setItem('user', JSON.stringify({ userName: email, password }))
    navigate('/', { replace: true })
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ user, setUser, logIn, logOut }}>
      <AppRoutes />
    </UserContext.Provider>
  )
}

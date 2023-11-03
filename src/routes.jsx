import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { MainPage } from './pages/main'
import { Page404 } from './pages/not-found'
import { MyPlaylist } from './pages/playlist'
import { MyCategory } from './pages/category'
import AuthPage from './pages/AuthPage/AuthPage'

export function ProtectedRoute({ redirectPath = '/login' }) {
  const isUser = localStorage.getItem('user')
  if (!isUser) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/playlist" element={<MyPlaylist />} />
        <Route path="/category/:id" element={<MyCategory />} />
      </Route>
      <Route path="/login" element={<AuthPage isLoginMode />} />
      <Route path="/registration" element={<AuthPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

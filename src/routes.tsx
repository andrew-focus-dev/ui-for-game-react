import { Routes, Route, Navigate } from 'react-router-dom'

import UiScreen from '@/components/screens/ui-screen'
import MainScreen from '@/components/screens/main-screen'

const useRoutes = () => {
  return (
    <Routes>
      <Route path='/ui' element={<UiScreen />} />
      <Route path='/main' element={<MainScreen />} />

      <Route path='*' element={<Navigate to={'/ui'} />} />
    </Routes>
  )
}

export default useRoutes

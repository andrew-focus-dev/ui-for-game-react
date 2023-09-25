import { BrowserRouter as Router } from 'react-router-dom'

import useRoutes from '@/routes.tsx'
import Navbar from './components/navbar'

const App = () => {
  const routes = useRoutes()

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <main>{routes}</main>
      </Router>
    </div>
  )
}

export default App

import { NavLink } from 'react-router-dom'

import cls from './index.module.css'

const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <NavLink
        to='/main'
        className={({ isActive }) =>
          isActive ? `${cls.navItem} ${cls.active}` : cls.navItem
        }
      >
        Main
      </NavLink>
      <NavLink
        to='/ui'
        className={({ isActive }) =>
          isActive ? `${cls.navItem} ${cls.active}` : cls.navItem
        }
      >
        UI
      </NavLink>
    </nav>
  )
}

export default Navbar

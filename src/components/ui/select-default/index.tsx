import { FC, useState } from 'react'

import svgBg from '@/assets/images/select-value-bg.svg'
import svgMenuBg from '@/assets/images/select-menu-wrap.svg'

import cls from './index.module.css'

interface ISelectDefault {
  options: Record<string, any>[]
  value: Record<string, any>
  submit: any
}

const SelectDefault: FC<ISelectDefault> = ({ options, value, submit }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const arrWithoutValue = options.filter(item => value.value !== item.value)

  return (
    <div className={cls.wrap}>
      <div
        className={cls.menu}
        style={{
          backgroundImage: `url("${svgMenuBg}")`,
          display: isMenuOpen ? 'block' : 'none',
        }}
      >
        {arrWithoutValue.map(item => (
          <div
            key={Math.random()}
            className={cls.option}
            onClick={() => submit(item)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div
        className={cls.valueWrap}
        style={{ backgroundImage: `url("${svgBg}")` }}
      >
        <span className={cls.value}>{value.label}</span>
      </div>

      <svg
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{ transform: `rotate(${isMenuOpen ? 180 : 0}deg)` }}
        className={cls.toggle}
        xmlns='http://www.w3.org/2000/svg'
        width='35'
        height='34'
        viewBox='0 0 35 34'
        fill='none'
      >
        <path
          d='M1 1.00002L24.5252 1L33.395 9.86982V32.526L9.86982 32.526L1 23.6562L1 1.00002Z'
          fill='#021713'
          stroke='#0DAA8E'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <path
          d='M9 13L16.5 20.5L24 13'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
      </svg>
    </div>
  )
}

export default SelectDefault

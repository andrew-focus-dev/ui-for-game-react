import { FC } from 'react'

import cls from './index.module.css'

interface ICheckboxSimple {
  isActive: boolean
  submit?: (v: boolean) => any
}

const CheckboxSimple: FC<ICheckboxSimple> = ({ isActive, submit }) => {
  return (
    <div
      className={cls.wrap}
      onClick={submit ? () => submit(!isActive) : () => {}}
    >
      {isActive ? (
        <svg
          width='28'
          height='24'
          viewBox='0 0 28 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M28 3.03436L10.9879 20L0 9.0421L3.04267 6.00773L10.9879 13.9313L24.9573 0L28 3.03436Z'
            fill='#0DAA8E'
          />
          <path
            d='M21 15.2273V7.02273L18 4H3V19.9773L6 23H21'
            stroke='#0DAA8E'
            strokeLinecap='round'
          />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='21'
          viewBox='0 0 20 21'
          fill='none'
        >
          <path
            d='M19 12.2273V4.02273L16 1H1V16.9773L4 20H19'
            stroke='#0DAA8E'
            strokeLinecap='round'
          />
        </svg>
      )}
    </div>
  )
}

export default CheckboxSimple

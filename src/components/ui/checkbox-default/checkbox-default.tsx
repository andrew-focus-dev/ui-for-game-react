import { FC } from 'react'

import cls from './index.module.css'

interface ICheckboxDefault {
  isActive: boolean
  submit?: (v: boolean) => any
}

const CheckboxDefault: FC<ICheckboxDefault> = ({ isActive, submit }) => {
  return (
    <div
      className={cls.wrap}
      onClick={submit ? () => submit(!isActive) : () => {}}
    >
      {isActive ? (
        <svg
          width='14'
          height='10'
          viewBox='0 0 14 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M14 1.51718L5.49395 10L0 4.52105L1.52134 3.00387L5.49395 6.96564L12.4787 0L14 1.51718Z'
            fill='#0DAA8E'
          />
        </svg>
      ) : (
        <svg
          width='20'
          height='21'
          viewBox='0 0 20 21'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
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

export default CheckboxDefault

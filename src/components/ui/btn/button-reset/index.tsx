import { FC } from 'react'

import cls from './index.module.css'

export const IButtonStates = {
  simple: { bg: '#0DAA8E', color: '#fff' },
  hover: { bg: '#29D6B7', color: '#fff' },
  disabled: { bg: '#04372E', color: '#000' },
}

export type IButtonStatesKey = keyof typeof IButtonStates

interface IButtonReset {
  state: IButtonStatesKey
  title: string
  text: string
  onlyIcon?: boolean
}

const ButtonReset: FC<IButtonReset> = ({ state, title, text, onlyIcon }) => {
  const config = IButtonStates[state]

  return (
    <div className={cls.wrap}>
      {!onlyIcon && <span>{title}</span>}

      <div className={cls.iconWrap}>
        <svg
          width='38'
          height='38'
          viewBox='0 0 38 38'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M35.3791 26.9815L35.3791 28.6736L35.3791 38L0 38L1.07419e-06 14.0185L0.000322315 14.0185L0.000322241 12.3264L9.42424 3L35.3795 2.99999L35.3795 26.9815L35.3791 26.9815Z'
            fill={config.bg}
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2.62086 11.0185L2.62086 9.32636L2.62087 -1.5299e-06L38 3.03889e-06L38 23.9815L37.9997 23.9815L37.9997 25.6736L28.5758 35L2.62054 35L2.62054 11.0185L2.62086 11.0185Z'
            fill={config.bg}
          />
        </svg>
        <span>{text}</span>
      </div>
    </div>
  )
}

export default ButtonReset

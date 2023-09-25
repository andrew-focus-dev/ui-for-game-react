import { FC } from 'react'

import hardActive from '@/assets/images/left-bar.svg'
import middleActive from '@/assets/images/yellow-bar.svg'
import lowActive from '@/assets/images/red-bar.svg'

import cls from './index.module.css'

interface ITimeLeftToggle {
  isActive: boolean
  submit: (val: boolean) => void
  formattedTime: string
}

const TimeLeftBarStates = {
  low: { color: '#FF0F00', icon: lowActive },
  middle: { color: '#FFA800', icon: middleActive },
  hard: { color: '#0DAA8E', icon: hardActive },
}

type TimeLeftBarStatesKey = keyof typeof TimeLeftBarStates

interface ITimeLeftBar {
  type: TimeLeftBarStatesKey
  formattedTime: string
}

const TimeLeftBar: FC<ITimeLeftBar> = ({ type, formattedTime }) => {
  const config = TimeLeftBarStates[type]

  return (
    <div
      className={cls.top}
      style={{ backgroundImage: `url("${config.icon}")` }}
    >
      <div style={{ backgroundColor: config.color }} className={cls.title}>
        залишилось
      </div>
      <div className={cls.time} style={{ color: config.color }}>
        {formattedTime}
      </div>
    </div>
  )
}

const TimeLeftToggle: FC<ITimeLeftToggle> = ({
  isActive,
  submit,
  formattedTime,
}) => {
  return (
    <div className={cls.wrap}>
      <TimeLeftBar formattedTime={formattedTime} type='hard' />
      <div className={cls.buttons}>
        <div
          style={{ backgroundColor: isActive ? '#0DAA8E' : 'transparent' }}
          onClick={() => submit(true)}
        >
          ВКЛ
        </div>
        <div
          style={{ backgroundColor: !isActive ? '#0DAA8E' : 'transparent' }}
          onClick={() => submit(false)}
        >
          ВИКЛ
        </div>
      </div>
    </div>
  )
}

export { TimeLeftToggle, TimeLeftBar }

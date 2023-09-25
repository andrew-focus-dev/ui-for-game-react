import { FC } from 'react'

import cls from './index.module.css'

interface IStatusToggle {
  isActive: boolean
  submit?: (v: boolean) => any
  titles: string[]
}

const StatusToggle: FC<IStatusToggle> = ({ isActive, submit, titles }) => {
  return (
    <div className={cls.wrap}>
      <div
        style={{ backgroundColor: isActive ? '#0DAA8E' : 'transparent' }}
        onClick={submit ? () => submit(true) : () => {}}
      >
        {titles[0]}
      </div>
      <div
        onClick={submit ? () => submit(false) : () => {}}
        style={{ backgroundColor: !isActive ? '#0DAA8E' : 'transparent' }}
      >
        {titles[1]}
      </div>
    </div>
  )
}

export default StatusToggle

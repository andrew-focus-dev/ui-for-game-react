import { FC } from 'react'

import cls from './index.module.css'

const StandardControlButtonTypes = {
  simple: { bg: '#3E5B56', color: '#fff' },
  hover: { bg: '#16907B', color: '#fff' },
  superHover: { bg: '#2CB79E', color: '#fff' },
  darkIcon: { bg: '#04372E', color: '#000' },
}

interface IStandardControlButton {
  type: keyof typeof StandardControlButtonTypes
}

const StandardControlButton: FC<IStandardControlButton> = ({ type }) => {
  const config = StandardControlButtonTypes[type]

  return (
    <div style={{ background: config.bg, borderRadius: '8px' }}>
      <svg
        width='14'
        height='11'
        viewBox='0 0 14 11'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5.81199 0.718569C6.1648 0.149799 7.04684 0.1498 7.39965 0.71857L12.9565 9.6767C13.3093 10.2455 12.8683 10.9564 12.1627 10.9564H1.04899C0.343358 10.9564 -0.0976592 10.2455 0.255156 9.6767L5.81199 0.718569Z'
          fill={config.color}
        />
      </svg>
    </div>
  )
}

interface IStandardControl {
  buttonTypes: Array<keyof typeof StandardControlButtonTypes>
}
const StandardControl: FC<IStandardControl> = ({ buttonTypes }) => {
  return (
    <div className={cls.block}>
      <div className={cls.wrap}>
        <div></div>
        <StandardControlButton type={buttonTypes[0]} />
        <div></div>
        <StandardControlButton type={buttonTypes[1]} />
        <StandardControlButton type={buttonTypes[2]} />
        <StandardControlButton type={buttonTypes[3]} />
      </div>
    </div>
  )
}

export default StandardControl

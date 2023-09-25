import { FC } from 'react'

import darkIcon from '@/assets/images/button-dark.svg'
import greenIcon from '@/assets/images/button-green.svg'
import darkGreenIcon from '@/assets/images/button-dark-green.svg'
import redIcon from '@/assets/images/button-red.svg'
import darkRedIcon from '@/assets/images/button-dark-red.svg'
import greenSimple from '@/assets/images/button-green-simple.svg'
import darkGreenSimple from '@/assets/images/button-green-dark-simple.svg'

import cls from './index.module.css'

const ButtonTypes = {
  dark: { icon: darkIcon, color: '#0DAA8E' },
  green: { icon: greenIcon, color: '#fff' },
  greenSimple: { icon: greenSimple, color: '#fff' },
  darkGreen: { icon: darkGreenIcon, color: '#04372E' },
  darkGreenSimple: { icon: darkGreenSimple, color: '#04372E' },
  red: { icon: redIcon, color: '#fff' },
  darkRed: { icon: darkRedIcon, color: '#370404' },
} as const

const ButtonsPositions = {
  top: cls.btnTop,
  center: cls.btnCenter,
  bottom: cls.btnBottom,
} as const

const getButtonIconByType = (type: keyof typeof ButtonTypes) => {
  return ButtonTypes[type].icon
}

const getColorByType = (type: keyof typeof ButtonTypes) => {
  return ButtonTypes[type].color
}

const getPositionClass = (position: keyof typeof ButtonsPositions) => {
  return ButtonsPositions[position]
}

interface IButtonDark {
  text: string
  submit: any
  position?: keyof typeof ButtonsPositions
  type: keyof typeof ButtonTypes
  fontSize?: string
}

const ButtonSimple: FC<IButtonDark> = ({
  text,
  submit,
  position,
  type,
  fontSize,
}) => {
  const btnAdditionalClass = position ? getPositionClass(position) : ''
  const btnClass = `${cls.btn} ${btnAdditionalClass}`

  const image = getButtonIconByType(type)

  return (
    <div
      style={{
        backgroundImage: `url("${image}")`,
        color: getColorByType(type),
      }}
      className={btnClass}
      onClick={submit}
    >
      <div
        className={cls.body}
        style={{ fontSize: fontSize ? fontSize : '24px' }}
      >
        {text}
      </div>
    </div>
  )
}

export default ButtonSimple

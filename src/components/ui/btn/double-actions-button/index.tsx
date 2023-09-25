import { FC } from 'react'

import darkBg from '@/assets/images/action-wrap-dark.svg'
import greenBg from '@/assets/images/action-green-bg.svg'
import greenDarkBg from '@/assets/images/action-bg-green-dark.svg'
import redBg from '@/assets/images/action-red-bg.svg'
import redTransparentBg from '@/assets/images/action-red-tranparent-bg.svg'
import redDarkBg from '@/assets/images/action-red-dark-bg.svg'
import darkDec from '@/assets/images/action-dec-dark.svg'
import greenDec from '@/assets/images/action-green-bg.svg'
import greenDarkDec from '@/assets/images/action-green-dark-dec.svg'
import redDec from '@/assets/images/action-red-dec.svg'
import redTransparentDec from '@/assets/images/action-red-transparent-dec.svg'
import redDarkDec from '@/assets/images/action-red-dark-svg.svg'

import cls from './index.module.css'

const DoubleActionsButtonTypes = {
  dark: { bg: darkBg, color: '#0DAA8E', icon: darkDec },
  green: { bg: greenBg, color: '#fff', icon: greenDec },
  greenDark: { bg: greenDarkBg, color: '#04372E', icon: greenDarkDec },
  redTransparent: {
    bg: redTransparentBg,
    color: '#C42424',
    icon: redTransparentDec,
  },
  red: { bg: redBg, color: '#fff', icon: redDec },
  redDark: { bg: redDarkBg, color: '#440707', icon: redDarkDec },
}

type IActionsType = keyof typeof DoubleActionsButtonTypes

interface IDoubleActionsButton {
  type: IActionsType
  titles: string[]
  submit: any
  cancel: any
}

const DoubleActionsButton: FC<IDoubleActionsButton> = ({
  type,
  titles,
  submit,
  cancel,
}) => {
  const config = DoubleActionsButtonTypes[type]

  return (
    <div
      style={{
        color: config.color,
        backgroundImage: `url("${config.bg}"`,
      }}
      className={cls.wrap}
    >
      <div onClick={submit}>{titles[0]}</div>
      <div
        onClick={cancel}
        style={{
          backgroundImage: `url("${config.icon}"`,
        }}
      >
        {titles[1]}
      </div>
    </div>
  )
}

export default DoubleActionsButton

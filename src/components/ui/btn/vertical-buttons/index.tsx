import { FC } from 'react'

import darkWrap from '@/assets/images/center-dark.svg'
import greenWrap from '@/assets/images/center-green-light-button.svg'
import greenDarkWrap from '@/assets/images/green-dark-button-wrap.svg'
import imgDec from '@/assets/images/dec-dark-right.svg'
import greenDec from '@/assets/images/dec-right-green.svg'
import greenDarkDec from '@/assets/images/dec-green-right.svg'

import cls from './index.module.css'

const VerticalButtonsTypes = {
  dark: { img: imgDec, color: '#0DAA8E', wrap: darkWrap },
  green: { img: greenDec, color: '#fff', wrap: greenWrap },
  greenDark: { img: greenDarkDec, color: '#fff', wrap: greenDarkWrap },
}

type IVerticalButtonType = keyof typeof VerticalButtonsTypes

interface IVerticalButtons {
  cancel: any
  submit: any
  titles: string[]
  type: IVerticalButtonType
  secondBtn?: IVerticalButtonType
}

const VerticalButtons: FC<IVerticalButtons> = ({
  submit,
  titles,
  cancel,
  type,
  secondBtn,
}) => {
  const config = VerticalButtonsTypes[type]
  const second = secondBtn
    ? VerticalButtonsTypes[secondBtn]
    : VerticalButtonsTypes[type]

  return (
    <div
      className={cls.wrap}
      style={{ backgroundImage: `url("${config.wrap}")`, color: config.color }}
    >
      <div onClick={submit}>{titles[0]}</div>
      <div
        className={cls.right}
        onClick={cancel}
        style={{ backgroundImage: `url("${second.img}")` }}
      >
        {titles[1]}
      </div>
    </div>
  )
}

export default VerticalButtons

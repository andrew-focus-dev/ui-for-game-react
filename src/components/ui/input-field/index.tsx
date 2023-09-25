import { FC } from 'react'

import cls from './index.module.css'

interface IInputField {
  title: string
  type: string
}

const InputField: FC<IInputField> = ({ type, title }) => {
  return (
    <div className={cls.wrap}>
      <div className={cls.name}>{title}</div>
      <div className={cls.inputWrap}>
        <input className={cls.input} type={type} />
      </div>
    </div>
  )
}

export default InputField

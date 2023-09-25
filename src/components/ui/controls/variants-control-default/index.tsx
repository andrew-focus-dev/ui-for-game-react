import { FC } from 'react'

import img from '@/assets/images/varioants-top.svg'
import imgLeft from '@/assets/images/button-reverse-green.svg'
import imgActive from '@/assets/images/button-reverse-green-simple.svg'

import cls from './index.module.css'

interface IVariantControlItem {
  isActive: boolean
  submit: any
  text: string
}

const VariantControlItem: FC<IVariantControlItem> = ({
  isActive,
  submit,
  text,
}) => {
  return (
    <div
      onClick={submit}
      style={isActive ? { backgroundImage: `url("${imgActive}")` } : {}}
      className={isActive ? `${cls.item} ${cls.itemWhite}` : cls.item}
    >
      {text}
    </div>
  )
}

interface IVariantsControl {
  options: Record<string, any>[]
  value: Record<string, any>
  submit: any
  title?: string
  height?: string
  topVertical?: boolean
}

const VariantsControlDefault: FC<IVariantsControl> = ({
  options,
  value,
  submit,
  title,
  height,
  topVertical,
}) => {
  return (
    <div className={cls.wrap}>
      {title && (
        <div
          className={cls.top}
          style={
            !topVertical
              ? { backgroundImage: `url("${img}")` }
              : { backgroundColor: '#0DAA8E' }
          }
        >
          {title}
        </div>
      )}
      <div
        className={cls.body}
        style={{
          backgroundImage: `url("${imgLeft}")`,
          height: height ? height : '32px',
        }}
      >
        <VariantControlItem
          isActive={options[0].value === value.value}
          submit={() => submit(options[0])}
          text={options[0].title}
        />
        <VariantControlItem
          isActive={options[1].value === value.value}
          submit={() => submit(options[1])}
          text={options[1].title}
        />
      </div>
    </div>
  )
}

export default VariantsControlDefault

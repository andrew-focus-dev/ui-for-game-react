import { FC } from 'react'
import { useElementSize } from 'usehooks-ts'

import img from '@/assets/images/varioants-top.svg'
import imgLeft from '@/assets/images/center-dark.svg'
import imgActive from '@/assets/images/button-green-center.svg'

import cls from './index.module.css'

interface IVariantControlItem {
  isActive: boolean
  submit: any
  text: string
  width: number
}

const getItemTextSize = (count: number, width: number) => {
  if (width > 220) return '18px'

  if (count < 10) {
    if (width > 130) return '10px'
    return '8px'
  } else {
    if (width > 130) return '10px'
    return '8px'
  }
}

const VariantControlItem: FC<IVariantControlItem> = ({
  isActive,
  submit,
  text,
  width,
}) => {
  const textSize = getItemTextSize(text.length, width)

  return (
    <div
      onClick={submit}
      style={{
        backgroundImage: isActive ? 'none' : `url("${imgActive}")`,
        fontSize: textSize,
        color: '#fff',
      }}
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
  isSmall?: boolean
}

const VariantsControl: FC<IVariantsControl> = ({
  options,
  value,
  submit,
  title,
  height,
  topVertical,
}) => {
  const [squareRef, { width }] = useElementSize()

  return (
    <div className={cls.wrap} ref={squareRef}>
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
          isActive={options[0].value !== value.value}
          submit={() => submit(options[0])}
          text={options[0].title}
          width={width}
        />
        <VariantControlItem
          isActive={options[1].value !== value.value}
          submit={() => submit(options[1])}
          text={options[1].title}
          width={width}
        />
      </div>
    </div>
  )
}

export default VariantsControl

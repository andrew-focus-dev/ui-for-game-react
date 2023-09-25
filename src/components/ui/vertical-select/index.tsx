import { FC } from 'react'

import ArrowSimple from '@/components/ui/arrows/arrow-simple'

import cls from './index.module.css'

interface IVerticalSelect {
  options: Record<string, any>[]
  value: Record<string, any>
  submit: any
}

const VerticalSelect: FC<IVerticalSelect> = ({ options, value, submit }) => {
  const isFirst = options.indexOf(value) === 0
  const isLast = options.indexOf(value) === options.length - 1
  const next = () => {
    const index = options.indexOf(value)
    if (index >= options.length - 1) return
    submit(options[index + 1])
  }

  const prev = () => {
    const index = options.indexOf(value)
    if (index === 0) return
    submit(options[index - 1])
  }

  return (
    <div className={cls.wrap}>
      <div className={cls.btn}>
        <ArrowSimple
          submit={prev}
          rotate={-180}
          type={isFirst ? 'simple' : 'hover'}
        />
      </div>
      <div className={cls.value}>{value.label}</div>
      <div className={cls.btn}>
        <ArrowSimple submit={next} type={isLast ? 'simple' : 'hover'} />
      </div>
    </div>
  )
}

export default VerticalSelect

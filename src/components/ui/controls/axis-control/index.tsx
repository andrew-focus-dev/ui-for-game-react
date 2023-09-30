import { FC } from 'react'
import {
  ArrowDefault,
  ArrowDefaultTypes,
} from '@/components/ui/arrows/arrow-default'

import cls from './index.module.css'

interface IAxisControl {
  arrowTypes: Array<keyof typeof ArrowDefaultTypes>
}

const AxisControl: FC<IAxisControl> = ({ arrowTypes }) => {
  return (
    <div className={cls.section}>
      <div className={cls.wrap}>
        <ArrowDefault type={arrowTypes[0]} />
        <ArrowDefault type={arrowTypes[1]} />
        <ArrowDefault type={arrowTypes[2]} />
        <ArrowDefault type={arrowTypes[3]} />
      </div>
    </div>
  )
}

export default AxisControl

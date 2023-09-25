import { FC } from 'react'

import bg from '@/assets/images/infor-body-bg.svg'

import cls from './index.module.css'

interface IInfoItem {
  title: string
  icon: any
  value: string | number
}

const InfoItem: FC<IInfoItem> = ({ title, icon, value }) => {
  return (
    <div className={cls.wrap}>
      <div className={cls.top}>{title}</div>
      <div className={cls.body} style={{ backgroundImage: `url("${bg}")` }}>
        <div className={cls.iconWrap}>{icon}</div>
        <span>{value}</span>
      </div>
    </div>
  )
}

export default InfoItem

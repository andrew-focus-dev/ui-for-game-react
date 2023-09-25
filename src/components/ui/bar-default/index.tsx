import { FC } from 'react'

import WifiIcon from '@/components/ui/icon/wifi-icon'
import BatteryIcon from '@/components/ui/icon/battery-icon'

import cls from './index.module.css'

interface IBarDefault {
  isWifiActive: boolean
}

const BarDefault: FC<IBarDefault> = ({ isWifiActive }) => {
  return (
    <div className={cls.wrap}>
      <span className={cls.time}>12:45PM</span>

      <div className={cls.right}>
        <WifiIcon state={isWifiActive} />
        <BatteryIcon state={100} />
      </div>
    </div>
  )
}

export default BarDefault

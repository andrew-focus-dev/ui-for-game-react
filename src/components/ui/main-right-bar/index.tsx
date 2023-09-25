import { useState } from 'react'

import imgActive from '@/assets/images/right-bar-bg.svg'

import BarDefault from '@/components/ui/bar-default'
import { TimeLeftBar } from '@/components/ui/time-left-toggle'
import StatusToggleSmall from '@/components/ui/toggles/status-toggle'

import cls from './index.module.css'

const MainRightBar = () => {
  const [isActive, setIsActive] = useState(true)

  return (
    <div className={cls.wrap}>
      <BarDefault isWifiActive={true} />
      <TimeLeftBar formattedTime='00:52:12' type='hard' />

      <div
        className={cls.body}
        style={{ backgroundImage: `url("${imgActive}")` }}
      >
        <StatusToggleSmall
          isActive={isActive}
          submit={v => setIsActive(v)}
          titles={['ВКЛ', 'ВИКЛ']}
        />
      </div>
    </div>
  )
}

export default MainRightBar

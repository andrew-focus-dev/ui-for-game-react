import Turret from '../ui/turret'

import cls from './index.module.css'

const SelectTurret = () => {
  return (
    <div className={cls.wraper}>
      <div className={cls.container}>
        <div className={cls.head}>
          <h2>Виберіть Турель</h2>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
          >
            <path
              d='M1 1L16 16M31 31L16 16M16 16L31 1L1 31'
              stroke='white'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
          </svg>
        </div>
        <div className={cls.content}>
          <div className={cls.line}></div>
          <div className={cls.row}>
            <div className={cls.tabs}>
              <button className={cls.active}>Online</button>
              <button>Offline</button>
            </div>
            <div className={cls.line}></div>
          </div>
          <div className={cls.line}></div>
          <div className={cls.items}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
              (item: number) => (
                <div key={Math.random()} className={cls.item}>
                  <Turret key={item} item={item} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectTurret

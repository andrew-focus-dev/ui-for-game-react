import { FC } from 'react'
import { Range } from 'react-range'

import ArrowSimple from '@/components/ui/arrows/arrow-simple'

import imgLeft from '@/assets/images/scope-value-vg.svg'
import imgActive from '@/assets/images/vertcal-range-bg.svg'

import cls from './index.module.css'

interface IVerticalRange {
  value: number
  submit?: any
}

const VerticalRange: FC<IVerticalRange> = ({ value, submit }) => {
  const next = () => {
    if (value < 30) {
      submit(value + 1)
    }
  }

  const prev = () => {
    if (value > 1) {
      submit(value - 1)
    }
  }

  return (
    <div className={cls.wrap}>
      <div className={cls.leftWrap}>
        <div className={cls.left}>
          <div>
            <ArrowSimple
              submit={next}
              rotate={270}
              type={value !== 30 ? 'hover' : 'simple'}
            />
          </div>
          <div
            className={cls.value}
            style={{ backgroundImage: `url("${imgLeft}")` }}
          >
            {value}x
          </div>
          <div>
            <ArrowSimple
              submit={prev}
              rotate={90}
              type={value !== 1 ? 'hover' : 'simple'}
            />
          </div>
        </div>
      </div>
      <div className={cls.right}>
        <div className={cls.dec}>
          <span>Макс</span>
          <span>30см</span>
        </div>

        <div>
          <Range
            min={1}
            max={30}
            step={1}
            direction={'to top' as any}
            values={[value]}
            onChange={values => submit(values[0])}
            renderTrack={({ props, children }) => {
              return (
                <div
                  className={cls.bg}
                  key={Math.random()}
                  style={{
                    margin: '0 auto',
                    height: '100%',
                    display: 'flex',
                    width: '14px',
                    backgroundImage: `url("${imgActive}")`,
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      width: '14px',
                    }}
                  >
                    {children}
                  </div>
                </div>
              )
            }}
            renderThumb={({ props }) => (
              <div
                {...props}
                key={Math.random()}
                style={{
                  ...props.style,
                  height: '10px',
                  width: '20px',
                  backgroundColor: '#0DAA8E',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              ></div>
            )}
          />
        </div>

        <div className={cls.dec}>
          <span>Мін</span>
          <span>1см</span>
        </div>
      </div>
    </div>
  )
}

export default VerticalRange

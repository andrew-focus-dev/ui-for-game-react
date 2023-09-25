import { FC } from 'react'
import { Range } from 'react-range'

import ArrowSimple from '@/components/ui/arrows/arrow-simple'

import imgActive from '@/assets/images/horizontal-range-bg.svg'
import imgLeft from '@/assets/images/scope-value-vg.svg'

import cls from './index.module.css'

interface IHorizontalRange {
  value: number
  submit?: any
}

const HorizontalRange: FC<IHorizontalRange> = ({ value, submit }) => {
  const next = () => {
    if (value < 10) {
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
      <div className={cls.top}>
        <div className={cls.dec}>
          <span>Мін</span>
          <span>1x</span>
        </div>

        <div>
          <Range
            min={1}
            max={10}
            step={1}
            values={[value]}
            onChange={values => submit(values[0])}
            renderTrack={({ props, children }) => {
              return (
                <div
                  className={cls.bg}
                  key={Math.random()}
                  style={{
                    height: '8px',
                    display: 'flex',
                    width: '100%',
                    backgroundImage: `url("${imgActive}")`,
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: '10px',
                      width: '100%',
                      borderRadius: '1px',

                      alignSelf: 'center',
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
                  height: '16px',
                  width: '10px',
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
          <span>Макс</span>
          <span>10x</span>
        </div>
      </div>
      <div className={cls.bottom}>
        <div>
          <ArrowSimple
            submit={prev}
            rotate={180}
            type={value !== 1 ? 'hover' : 'simple'}
          />
        </div>
        <div className={cls.valueWrap}>
          <div
            className={cls.value}
            style={{ backgroundImage: `url("${imgLeft}")` }}
          >
            {value}X
          </div>
        </div>
        <div>
          <ArrowSimple submit={next} type={value !== 10 ? 'hover' : 'simple'} />
        </div>
      </div>
    </div>
  )
}

export default HorizontalRange

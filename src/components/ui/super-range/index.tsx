import { FC, useEffect } from 'react'
import { useElementSize } from 'usehooks-ts'
import { Range } from 'react-range'

import rangeBodyBg from '@/assets/images/super-slider.svg'

import cls from './index.module.css'

interface ISuperRange {
  value: number
  submit: any
}

const TOP_VALUES = [
  '1x',
  '2x',
  '3x',
  '4x',
  '5x',
  '6x',
  '7x',
  '8x',
  '9x',
  '10x',
  '11x',
  '12x',
]

const getTextWidth = (w: number | undefined) => {
  if (!w) return '0px'
  if (w > 220) return '14px'
  if (w > 150) return '8px'
  return '8px'
}
const SuperRange: FC<ISuperRange> = ({ value, submit }) => {
  const [squareRef, { width }] = useElementSize()

  useEffect(() => {}, [])

  const next = () => {
    if (value <= 12) {
      submit(value + 1)
    }
  }

  const prev = () => {
    if (value > 0) {
      submit(value - 1)
    }
  }

  const textSize = getTextWidth(width)

  return (
    <div className={cls.wrap} ref={squareRef}>
      <div className={cls.rangeWrap}>
        <div className={cls.btnLeft} onClick={prev}>
          -
        </div>
        <div className={cls.rangeBodyWrap}>
          <div
            className={cls.rangeBody}
            style={{ backgroundImage: `url("${rangeBodyBg}")` }}
          >
            <div className={cls.top}>
              {TOP_VALUES.map((item: string) => (
                <div
                  style={{
                    opacity:
                      item.slice(0, item.length - 1) === value.toString()
                        ? 1
                        : 0.7,
                    fontSize: textSize,
                  }}
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
            <Range
              min={1}
              max={12}
              step={1}
              values={[value]}
              onChange={values => submit(values[0])}
              renderTrack={({ props, children }) => {
                return (
                  <div
                    className={cls.bg}
                    key={Math.random()}
                    style={{
                      height: '22px',
                      display: 'flex',
                      width: '100%',
                    }}
                  >
                    <div
                      ref={props.ref}
                      style={{
                        height: '22px',
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
                    height: '35px',
                    width: '15px',
                    backgroundColor: '#0DAA8E',
                    clipPath:
                      'polygon(50% 0, 100% 20%, 100% 60%, 100% 100%, 50% 100%, 0 75%, 0 0)',
                  }}
                ></div>
              )}
            />
          </div>
        </div>
        <div onClick={next} className={cls.btnRight}>
          +
        </div>
      </div>
    </div>
  )
}

export default SuperRange

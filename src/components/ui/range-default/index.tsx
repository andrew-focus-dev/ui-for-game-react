import { FC } from 'react'
import { getTrackBackground, Range } from 'react-range'

import cls from './index.module.css'

interface IRangeDefault {
  value: number
  submit: (v: number) => any
}

const RangeDefault: FC<IRangeDefault> = ({ value, submit }) => {
  return (
    <div className={cls.wrap}>
      <Range
        min={0}
        max={100}
        step={1}
        values={[value]}
        onChange={values => submit(values[0])}
        renderTrack={({ props, children }) => {
          return (
            <div
              key={Math.random()}
              style={{
                height: '8px',
                display: 'flex',
                width: '100%',
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '17px',
                  width: '100%',
                  borderRadius: '1px',
                  background: getTrackBackground({
                    values: [value],
                    colors: ['#0DAA8E', 'rgb(102, 99, 106)'],
                    min: 0,
                    max: 100,
                  }),
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
              height: '20px',
              width: '20px',
              borderRadius: '15px',
              backgroundColor: 'transparent',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='22'
              viewBox='0 0 13 22'
              fill='none'
            >
              <path
                d='M8.18454 0L13 4.79465V22L4.81548 22L0 17.2054L9.53674e-07 9.53674e-06L8.18454 0Z'
                fill='white'
              />
            </svg>
          </div>
        )}
      />
      <div>{value}%</div>
    </div>
  )
}

export default RangeDefault

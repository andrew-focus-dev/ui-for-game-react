import { FC } from 'react'

const ArrowSimpleTypes = {
  simple: { bg: '#3E5B56', color: '#fff' },
  hover: { bg: '#16907B', color: '#fff' },
  superHover: { bg: '#2CB79E', color: '#fff' },
  darkIcon: { bg: '#04372E', color: '#000' },
}

interface IArrowSimple {
  type: keyof typeof ArrowSimpleTypes
  rotate?: number
  submit?: any
}

const ArrowSimple: FC<IArrowSimple> = ({ type, rotate, submit }) => {
  const config = ArrowSimpleTypes[type]

  return (
    <svg
      onClick={submit}
      style={{
        transform: rotate ? `rotate(${rotate}deg)` : '',
        cursor: 'pointer',
      }}
      xmlns='http://www.w3.org/2000/svg'
      width='34'
      height='45'
      viewBox='0 0 34 45'
      fill='none'
    >
      <path
        d='M8.71465 44.5787C10.1187 45.0893 11.6903 44.7748 12.7899 43.7633L32.0005 26.0895C34.1535 24.1088 34.1535 20.7109 32.0005 18.7302L12.7899 1.05636C11.6903 0.0448092 10.1187 -0.26967 8.71466 0.240908L2.63317 2.45236C1.05241 3.02718 0.000140946 4.52951 0.000140872 6.21153L0.000139456 38.6081C0.000139383 40.2901 1.05241 41.7925 2.63317 42.3673L8.71465 44.5787Z'
        fill={config.bg}
      />
      <path
        d='M12.4513 43.3953C11.4893 44.2804 10.1141 44.5556 8.88552 44.1088L2.80404 41.8974C1.42087 41.3944 0.500139 40.0799 0.500139 38.6081L0.500141 6.21153C0.500141 4.73976 1.42088 3.42522 2.80404 2.92226L8.88553 0.710805C10.1141 0.264049 11.4893 0.539218 12.4513 1.42432L31.662 19.0981C33.5996 20.8808 33.5996 23.9389 31.662 25.7215L12.4513 43.3953Z'
        stroke={config.color}
        strokeOpacity='0.2'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.4078 20.9768C22.1976 21.7682 22.1976 23.0512 21.4078 23.8425L12.4523 32.8162C11.6625 33.6075 10.3821 33.6075 9.59241 32.8162C8.80269 32.0248 8.80269 30.7419 9.59241 29.9505L17.118 22.4097L9.59242 14.8688C8.80269 14.0775 8.80269 12.7945 9.59242 12.0032C10.3821 11.2118 11.6625 11.2118 12.4523 12.0032L21.4078 20.9768Z'
        fill={config.color}
      />
    </svg>
  )
}

export default ArrowSimple

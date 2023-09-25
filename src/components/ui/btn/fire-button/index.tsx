import cls from './index.module.css'

interface IFireButtonProps {
  title: string
  onClick?: () => void
  children?: any
  borderGreen?: boolean
  green?: boolean
  disabled?: boolean
  red?: boolean
  disabledRed?: boolean
}

const FireButton = (props: IFireButtonProps) => {
  const {
    title,
    onClick,
    children,
    borderGreen,
    green,
    disabled,
    red,
    disabledRed,
  } = props

  const classes = [
    cls.fireButton,
    borderGreen ? cls.borderGreen : '',
    green ? cls.green : '',
    disabled ? cls.disabled : '',
    red ? cls.red : '',
    disabledRed ? cls.disabledRed : '',
  ]

  return (
    <button className={classes.join(' ')} onClick={onClick}>
      {title}
      {children}
    </button>
  )
}

export default FireButton

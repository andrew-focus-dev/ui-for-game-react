import cls from './index.module.css'

interface IButton {
  title: string
  onClick?: () => void
}

interface IDoubleButtonProps {
  green?: boolean
  disabled?: boolean
  btns: IButton[]
}

const DoubleButton = (props: IDoubleButtonProps) => {
  const { green, disabled, btns } = props

  const classes = [
    cls.doubleButton,
    green && cls.green,
    disabled && cls.disabled,
  ].join(' ')

  return (
    <div className={classes}>
      {btns.map((btn: IButton, i: number) => (
        <button key={i} onClick={btn.onClick}>
          {btn.title}
        </button>
      ))}
    </div>
  )
}

export default DoubleButton

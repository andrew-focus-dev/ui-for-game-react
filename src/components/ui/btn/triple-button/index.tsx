import cls from './index.module.css'

interface IButton {
  title: string
  onClick?: () => void
}

interface ITripleButtonProps {
  green?: boolean
  disabled?: boolean
  btns: IButton[]
}

const TripleButton = ({ green, disabled, btns }: ITripleButtonProps) => {
  const classes = [
    cls.tripleButton,
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

export default TripleButton

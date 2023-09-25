import cls from './index.module.css'

interface IDefaultButtonProps {
  title: string
  red?: boolean
  disabled?: boolean
  onClick?: () => void
}

const DefaultButton = (props: IDefaultButtonProps) => {
  const { title, onClick, red, disabled } = props
  const classes = [cls.button, red && cls.red, disabled && cls.disabled].join(
    ' '
  )

  return (
    <button className={classes} onClick={onClick}>
      {title}
    </button>
  )
}

export default DefaultButton

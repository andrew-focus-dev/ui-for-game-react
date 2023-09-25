import cls from './index.module.css'

interface IVariant {
  title: string
  active: boolean
}

interface IToggleProps {
  onChange?: () => void
  title?: string
  variants: IVariant[]
  small?: boolean
  turret?: boolean
}

const Toggle = ({ title, variants, onChange, small, turret }: IToggleProps) => {
  const classes = [
    small && cls.small,
    !title && cls.noTitle,
    turret && cls.turret,
  ].join(' ')

  return (
    <div className={classes}>
      {title && <div className={cls.head}>{title}</div>}
      <div className={cls.toggle}>
        {variants.map((variant: IVariant, i) => {
          return (
            <button
              key={i}
              className={`${cls.btn} ${variant.active && cls.active}`}
              onClick={onChange}
            >
              {variant.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Toggle

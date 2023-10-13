import { FC } from 'react'

import ButtonSimple from '@/components/ui/btn/button-simple'

interface ITripleToggle {
  options: Record<string, any>[]
  value: Record<string, any>
  submit: any
  isSmall?: boolean
}

const TripleToggle: FC<ITripleToggle> = ({
   options,
   value,
   submit,
   isSmall
}) => {
  return (
    <div>
      <ButtonSimple
        type={options[0].value === value.value ? 'green' : 'dark'}
        position='top'
        submit={() => submit(options[0])}
        text={options[0].label}
        fontSize={isSmall ? "14px" : "22px"}
      />

      <ButtonSimple
        type={options[1].value === value.value ? 'green' : 'dark'}
        position='center'
        submit={() => submit(options[1])}
        text={options[1].label}
        fontSize={isSmall ? "14px" : "22px"}
      />

      <ButtonSimple
        type={options[2].value === value.value ? 'green' : 'dark'}
        position='bottom'
        submit={() => submit(options[2])}
        text={options[2].label}
        fontSize={isSmall ? "14px" : "22px"}
      />
    </div>
  )
}

export default TripleToggle

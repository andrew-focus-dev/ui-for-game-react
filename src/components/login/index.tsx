import { useState } from 'react'

import VerticalButtons from '@/components/ui/btn/vertical-buttons'
import InputField from '@/components/ui/input-field'
import CheckboxDefault from '@/components/ui/checkbox-default/checkbox-default.tsx'

import cls from './index.module.css'

const Login = () => {
  const [isAuto, setIsAuto] = useState(false)

  return (
    <div className={cls.wrap}>
      <div className={cls.top}>Підключення до Wi-fi</div>
      <div className={cls.body}>
        <div className={cls.form}>
          <InputField title='Name' type='text' />
          <InputField title='Password' type='password' />
          <div className={cls.auto}>
            <CheckboxDefault isActive={isAuto} submit={v => setIsAuto(v)} />
            <p>Автопідключення</p>
          </div>
        </div>
        <div className={cls.buttons}>
          <VerticalButtons
            secondBtn='dark'
            type='green'
            submit={() => alert('submit')}
            cancel={() => alert('cancel')}
            titles={['Підключитися', 'Назад']}
          />
        </div>
      </div>
    </div>
  )
}

export default Login

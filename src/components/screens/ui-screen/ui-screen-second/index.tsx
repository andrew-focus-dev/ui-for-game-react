import { useState } from 'react'

import BarDefault from '@/components/ui/bar-default'
import BatteryIcon from '@/components/ui/icon/battery-icon'
import { TimeLeftBar, TimeLeftToggle } from '@/components/ui/time-left-toggle'
import VerticalButtons from '@/components/ui/btn/vertical-buttons'
import CheckboxDefault from '@/components/ui/checkbox-default/checkbox-default.tsx'
import DoubleActionsButton from '@/components/ui/btn/double-actions-button'
import ButtonReverse from '@/components/ui/btn/button-reverse'
import VariantsControlDefault from '@/components/ui/controls/variants-control-default'
import RangeDefault from '@/components/ui/range-default'
import SelectDefault from '@/components/ui/select-default'
import CheckboxSimple from '@/components/ui/checkbox-simple/checkbox-default.tsx'
import VerticalSelect from '@/components/ui/vertical-select'
import StatusToggle from '@/components/ui/toggles/status-toggle-small'

import cls from './index.module.css'

const TestVariantsBoolean = [
  { title: 'Так', value: 0 },
  { title: 'Ні', value: 1 },
]

const selectOptions = [
  { label: 'Обраний варіан1', value: 1 },
  { label: 'Обраний варіан2', value: 2 },
  { label: 'Обраний варіант3', value: 3 },
  { label: 'Обраний варіант4', value: 4 },
]

const verticalSelectValues = [
  { label: 'Увімкнути Режим', value: 0 },
  { label: 'Вимкнути Режим', value: 1 },
  { label: 'Спостереження Режим', value: 2 },
]

const UiScreenSecond = () => {
  const [rangeValue, setRangeValue] = useState(1)
  const [activeSelectValue, setActiveSelectValue] = useState(selectOptions[0])
  const [activeVerticalSelectValues, setActiveVerticalSetlectValue] = useState(
    verticalSelectValues[0]
  )

  return (
    <div className={cls.wrap}>
      <div className={cls.barScreen}>
        <div>
          <BarDefault isWifiActive={true} />
        </div>

        <div>
          <BarDefault isWifiActive={false} />
        </div>

        <div className={cls.batteryList}>
          <BatteryIcon state={100} />
          <BatteryIcon state={50} />
          <BatteryIcon state={25} />
          <BatteryIcon state={10} />
        </div>
      </div>
      <div className={cls.barScreenSecond}>
        <TimeLeftToggle
          formattedTime='00:52:12'
          submit={val => console.log(val)}
          isActive={true}
        />
        <TimeLeftToggle
          formattedTime='00:52:12'
          submit={val => console.log(val)}
          isActive={false}
        />
        <div>
          <TimeLeftBar formattedTime='00:52:12' type='middle' />
          <TimeLeftBar formattedTime='00:52:12' type='low' />
        </div>
      </div>
      <div className={cls.doubleScreen}>
        <div>
          <div className={cls.checkboxWrap}>
            <CheckboxDefault isActive={true} />
            <CheckboxDefault isActive={false} />
          </div>

          <div></div>
        </div>
        <div>
          <VerticalButtons
            type='dark'
            submit={() => alert('submit')}
            cancel={() => alert('cancel')}
            titles={['Підключитися', 'Назад']}
          />

          <VerticalButtons
            type='dark'
            submit={() => alert('submit')}
            cancel={() => alert('cancel')}
            titles={['Видалити', 'Назад']}
          />
        </div>

        <div>
          <VerticalButtons
            type='green'
            submit={() => alert('submit')}
            cancel={() => alert('cancel')}
            titles={['Підключитися', 'Назад']}
          />

          <VerticalButtons
            type='green'
            submit={() => alert('submit')}
            cancel={() => alert('cancel')}
            titles={['Видалити', 'Назад']}
          />
        </div>

        <div>
          <VerticalButtons
            type='greenDark'
            submit={() => alert('submit')}
            cancel={() => alert('cancel')}
            titles={['Підключитися', 'Назад']}
          />

          <VerticalButtons
            type='greenDark'
            submit={() => alert('submit')}
            cancel={() => alert('cancel')}
            titles={['Видалити', 'Назад']}
          />
        </div>
      </div>

      <hr />

      <div className={cls.statusTogglesWrap}>
        <StatusToggle
          titles={['Online', 'Offline']}
          submit={v => alert(v)}
          isActive={true}
        />
        <div />
        <StatusToggle
          titles={['Online', 'Offline']}
          submit={v => alert(v)}
          isActive={false}
        />
      </div>
      <div className={cls.actionsWrap}>
        <DoubleActionsButton
          type='dark'
          submit={() => alert('submit')}
          cancel={() => alert('cancel')}
          titles={['Спостерігати', 'Керувати']}
        />
        <DoubleActionsButton
          type='green'
          submit={() => alert('submit')}
          cancel={() => alert('cancel')}
          titles={['Спостерігати', 'Керувати']}
        />
        <div />
        <DoubleActionsButton
          type='greenDark'
          submit={() => alert('submit')}
          cancel={() => alert('cancel')}
          titles={['Спостерігати', 'Керувати']}
        />
        <DoubleActionsButton
          type='redTransparent'
          submit={() => alert('submit')}
          cancel={() => alert('cancel')}
          titles={['Спостерігати', 'Керувати']}
        />
        <DoubleActionsButton
          type='red'
          submit={() => alert('submit')}
          cancel={() => alert('cancel')}
          titles={['Спостерігати', 'Керувати']}
        />
        <div />
        <DoubleActionsButton
          type='redDark'
          submit={() => alert('submit')}
          cancel={() => alert('cancel')}
          titles={['Спостерігати', 'Керувати']}
        />
      </div>

      <hr />
      <div className={cls.selectBlock}>
        <div className={cls.booleanWrap}>
          <VariantsControlDefault
            height='34px'
            options={TestVariantsBoolean}
            value={TestVariantsBoolean[0]}
            submit={(item: any) => console.log(item)}
          />

          <VariantsControlDefault
            height='34px'
            options={TestVariantsBoolean}
            value={TestVariantsBoolean[1]}
            submit={(item: any) => console.log(item)}
          />
        </div>

        <div>
          <RangeDefault value={rangeValue} submit={v => setRangeValue(v)} />
        </div>

        <div className={cls.selectWrap}>
          <SelectDefault
            submit={(v: any) => setActiveSelectValue(v)}
            options={selectOptions}
            value={activeSelectValue}
          />
          <SelectDefault
            submit={(v: any) => setActiveSelectValue(v)}
            options={selectOptions}
            value={activeSelectValue}
          />
        </div>

        <div>
          <VerticalSelect
            options={verticalSelectValues}
            value={activeVerticalSelectValues}
            submit={(v: any) => setActiveVerticalSetlectValue(v)}
          />
        </div>

        <div className={cls.checkboxSecondWrap}>
          <CheckboxSimple isActive={true} submit={v => alert(v)} />
          <CheckboxSimple isActive={false} submit={v => alert(v)} />
        </div>
      </div>
      <hr />

      <div className={cls.loginButtonsWrap}>
        <div>
          <ButtonReverse type='green' submit={() => alert(1)} text='Login in' />
        </div>
        <div>
          <ButtonReverse
            type='greenSimple'
            submit={() => alert(1)}
            text='Login in'
          />
        </div>
        <div>
          <ButtonReverse
            type='greenDarkSimple'
            submit={() => alert(1)}
            text='Login in'
          />
        </div>
        <div>
          <ButtonReverse
            type='greenDarkSimple'
            submit={() => alert(1)}
            text='Login in'
          />
        </div>
      </div>
    </div>
  )
}

export default UiScreenSecond

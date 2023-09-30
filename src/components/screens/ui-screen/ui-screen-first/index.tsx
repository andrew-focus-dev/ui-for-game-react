import ButtonReverse from '@/components/ui/btn/button-reverse'
import ButtonSimple from '@/components/ui/btn/button-simple'
import VariantsControl from '@/components/ui/controls/variants-control'
import VariantsControlDefault from '@/components/ui/controls/variants-control-default'
import ArrowSimple from '@/components/ui/arrows/arrow-simple'
import AxisControl from '@/components/ui/controls/axis-control'
import StandardControl from '@/components/ui/controls/standard-control'
import ButtonReset from '@/components/ui/btn/button-reset'
import ButtonConfig from '@/components/ui/btn/button-config'

import cls from './index.module.css'

export const TestVariants = [
  { title: 'Повний', value: 0 },
  { title: 'Вибрати місце', value: 1 },
]

export const TestVariantsSecond = [
  { title: 'ВКЛ', value: 0 },
  { title: 'ВИКЛ', value: 1 },
]

export const TestVariantsThird = [
  { title: 'ШІ', value: 0 },
  { title: 'РУЧНИЙ', value: 1 },
]

const TestVariantsSubmit = (val: any) => {
  console.log(val, 'val')
}

const UiScreenFirst = () => {
  return (
    <div className={cls.wrap}>
      <div className={cls.doubleButtonsWrap}>
        <div>
          <ButtonSimple
            type='dark'
            position='top'
            submit={() => alert(1)}
            text='Відбій'
          />
          <ButtonSimple
            type='dark'
            position='bottom'
            submit={() => alert(1)}
            text='Вогонь'
          />
        </div>
        <div>
          <ButtonSimple
            type='green'
            position='top'
            submit={() => alert(1)}
            text='Відбій'
          />
          <ButtonSimple
            type='green'
            position='bottom'
            submit={() => alert(1)}
            text='Вогонь'
          />
        </div>
        <div>
          <ButtonSimple
            type='darkGreen'
            position='top'
            submit={() => alert(1)}
            text='Відбій'
          />
          <ButtonSimple
            type='darkGreen'
            position='bottom'
            submit={() => alert(1)}
            text='Вогонь'
          />
        </div>
      </div>
      <div className={cls.simpleButtonsWrap}>
        <div>
          <ButtonSimple type='dark' submit={() => alert(1)} text='Вогонь' />
        </div>
        <div>
          <ButtonSimple type='red' submit={() => alert(1)} text='Вогонь' />
        </div>
        <div>
          <ButtonSimple type='darkRed' submit={() => alert(1)} text='Вогонь' />
        </div>
      </div>
      <div className={cls.tripleButtonsWrap}>
        <div>
          <ButtonSimple
            type='dark'
            position='top'
            submit={() => alert(1)}
            text='Виключити'
          />
          <ButtonSimple
            type='dark'
            position='center'
            submit={() => alert(1)}
            text='Звичайний'
          />
          <ButtonSimple
            type='dark'
            position='bottom'
            submit={() => alert(1)}
            text='Балістичний'
          />
        </div>
        <div>
          <ButtonSimple
            type='greenSimple'
            position='top'
            submit={() => alert(1)}
            text='Виключити'
          />
          <ButtonSimple
            type='greenSimple'
            position='center'
            submit={() => alert(1)}
            text='Звичайний'
          />
          <ButtonSimple
            type='greenSimple'
            position='bottom'
            submit={() => alert(1)}
            text='Балістичний'
          />
        </div>
        <div>
          <ButtonSimple
            type='darkGreenSimple'
            position='top'
            submit={() => alert(1)}
            text='Виключити'
          />
          <ButtonSimple
            type='darkGreenSimple'
            position='center'
            submit={() => alert(1)}
            text='Звичайний'
          />
          <ButtonSimple
            type='darkGreenSimple'
            position='bottom'
            submit={() => alert(1)}
            text='Балістичний'
          />
        </div>
      </div>
      <div className={cls.tripleButtonsWrap}>
        <div>
          <ButtonSimple
            type='dark'
            position='top'
            submit={() => alert(1)}
            text='Виключити'
          />
          <ButtonSimple
            type='dark'
            position='center'
            submit={() => alert(1)}
            text='Камера 01'
          />
          <ButtonSimple
            type='dark'
            position='bottom'
            submit={() => alert(1)}
            text='Камера 02'
          />
        </div>
        <div>
          <ButtonSimple
            type='greenSimple'
            position='top'
            submit={() => alert(1)}
            text='Виключити'
          />
          <ButtonSimple
            type='greenSimple'
            position='center'
            submit={() => alert(1)}
            text='Камера 01'
          />
          <ButtonSimple
            type='greenSimple'
            position='bottom'
            submit={() => alert(1)}
            text='Камера 02'
          />
        </div>
        <div>
          <ButtonSimple
            type='darkGreenSimple'
            position='top'
            submit={() => alert(1)}
            text='Виключити'
          />
          <ButtonSimple
            type='darkGreenSimple'
            position='center'
            submit={() => alert(1)}
            text='Камера 01'
          />
          <ButtonSimple
            type='darkGreenSimple'
            position='bottom'
            submit={() => alert(1)}
            text='Камера 02'
          />
        </div>
      </div>
      <div className={cls.tripleButtonsWrap}>
        <div>
          <ButtonSimple
            type='dark'
            position='top'
            submit={() => alert(1)}
            text='Одиночні'
          />
          <ButtonSimple
            type='dark'
            position='center'
            submit={() => alert(1)}
            text='Черга'
          />
          <ButtonSimple
            type='dark'
            position='bottom'
            submit={() => alert(1)}
            text='Автоматичні'
          />
        </div>
        <div>
          <ButtonSimple
            type='greenSimple'
            position='top'
            submit={() => alert(1)}
            text='Одиночні'
          />
          <ButtonSimple
            type='greenSimple'
            position='center'
            submit={() => alert(1)}
            text='Черга'
          />
          <ButtonSimple
            type='greenSimple'
            position='bottom'
            submit={() => alert(1)}
            text='Автоматичні'
          />
        </div>
        <div>
          <ButtonSimple
            type='darkGreenSimple'
            position='top'
            submit={() => alert(1)}
            text='Одиночні'
          />
          <ButtonSimple
            type='darkGreenSimple'
            position='center'
            submit={() => alert(1)}
            text='Черга'
          />
          <ButtonSimple
            type='darkGreenSimple'
            position='bottom'
            submit={() => alert(1)}
            text='Автоматичні'
          />
        </div>
      </div>
      <div className={cls.iconsList}>
        <div>
          <ButtonReverse
            withIcon={true}
            submit={() => alert(1)}
            text='Вогонь'
            type='grey'
          />
          <ButtonReverse
            withIcon={true}
            submit={() => alert(1)}
            text='Вогонь'
            type='grey'
          />
        </div>

        <div>
          <ButtonReverse
            withIcon={true}
            submit={() => alert(1)}
            text='Вогонь'
            type='green'
          />
          <ButtonReverse
            withIcon={true}
            submit={() => alert(1)}
            text='Вогонь'
            type='green'
          />
        </div>

        <div>
          <ButtonReverse
            withIcon={true}
            submit={() => alert(1)}
            text='Вогонь'
            type='greenSimple'
          />
          <ButtonReverse
            withIcon={true}
            submit={() => alert(1)}
            text='Вогонь'
            type='redSimple'
          />
        </div>

        <div>
          <ButtonReverse
            withIcon={true}
            submit={() => alert(1)}
            text='Вогонь'
            type='greenDarkSimple'
          />
          <ButtonReverse
            withIcon={true}
            submit={() => alert(1)}
            text='Вогонь'
            type='redDarkSimple'
          />
        </div>
      </div>
      <div className={cls.variantsList}>
        <div>
          <VariantsControl
            title='Варіанти'
            options={TestVariants}
            value={TestVariants[0]}
            submit={TestVariantsSubmit}
          />
        </div>

        <div>
          <VariantsControl
            title='Варіанти'
            options={TestVariants}
            value={TestVariants[1]}
            submit={TestVariantsSubmit}
          />
        </div>
      </div>
      <div className={cls.variantsSecondList}>
        <div>
          <VariantsControl
            topVertical={true}
            title='Запобіжники'
            options={TestVariantsSecond}
            value={TestVariantsSecond[0]}
            submit={TestVariantsSubmit}
          />
        </div>

        <div>
          <VariantsControl
            title='Запобіжники'
            options={TestVariantsSecond}
            value={TestVariantsSecond[1]}
            submit={TestVariantsSubmit}
          />
        </div>
      </div>
      <div className={cls.variantsList}>
        <div>
          <VariantsControlDefault
            height='52px'
            options={TestVariantsThird}
            value={TestVariantsThird[0]}
            submit={TestVariantsSubmit}
          />
        </div>

        <div>
          <VariantsControlDefault
            height='52px'
            options={TestVariantsThird}
            value={TestVariantsThird[1]}
            submit={TestVariantsSubmit}
          />
        </div>
      </div>
      <div className={cls.controlSection}>
        <div className={cls.arrowListWrap}>
          <div className={cls.arrowList}>
            <ArrowSimple rotate={-180} type='simple' />
            <ArrowSimple type='hover' />
            <ArrowSimple type='superHover' />
            <ArrowSimple type='darkIcon' />
          </div>
        </div>
        <div className={cls.controlList}>
          <AxisControl arrowTypes={['hover', 'simple', 'simple', 'simple']} />

          <AxisControl
            arrowTypes={['superHover', 'simple', 'simple', 'simple']}
          />
          <AxisControl
            arrowTypes={['darkIcon', 'simple', 'simple', 'simple']}
          />

          <StandardControl
            buttonTypes={['hover', 'simple', 'simple', 'simple']}
          />
          <StandardControl
            buttonTypes={['superHover', 'simple', 'simple', 'simple']}
          />
          <StandardControl
            buttonTypes={['darkIcon', 'simple', 'simple', 'simple']}
          />
        </div>
      </div>

      <div className={cls.resetSection}>
        <ButtonReset text='R' title='Перезарядка' state='simple' />
        <ButtonReset text='R' title='Перезарядка' state='hover' />
        <ButtonReset text='R' title='Перезарядка' state='disabled' />
      </div>

      <div className={cls.settingSection}>
        <ButtonConfig state='simple' />
        <ButtonConfig state='hover' />
        <ButtonConfig state='disabled' />
      </div>
    </div>
  )
}

export default UiScreenFirst

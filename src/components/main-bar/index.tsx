import { FC, useState } from 'react'

import TripleToggle from '@/components/ui/triple-toggle'
import {
  AmmoIcon,
  SimpleFireIcon,
  tripleOptionsFirst,
} from '@/components/screens/main-screen'
import VariantsControl from '@/components/ui/controls/variants-control'
import {
  TestVariants,
  TestVariantsSecond,
  TestVariantsThird,
} from '@/components/screens/ui-screen/ui-screen-first'
import ButtonReverse from '@/components/ui/btn/button-reverse'
import InfoItem from '@/components/ui/info-item'
import VerticalRange from '@/components/ui/vertical-range'
import HorizontalRange from '@/components/ui/horizontal-range'
import AxisControl from '@/components/ui/controls/axis-control'
import VariantsControlDefault from '@/components/ui/controls/variants-control-default'
import ButtonReset from '@/components/ui/btn/button-reset'
import SuperRange from '@/components/ui/super-range'

import cls from './index.module.css'
import {useWindowSize} from "usehooks-ts";

interface IMainBarItem {
  title: string
  children: any
  withoutBorder?: boolean
}

const MainBarItem: FC<IMainBarItem> = ({ title, children, withoutBorder }) => {
  return (
    <div className={cls.item}>
      <div className={cls.itemTop}>{title}</div>
      <div className={cls.itemBody}>
        <div
          className={
            withoutBorder
              ? cls.itemContent
              : `${cls.itemContent} ${cls.itemContentBorder}`
          }
        >
          {children}
        </div>
      </div>
    </div>
  )
}

interface IBarAmmoItem {
  count: number
}
const BarAmmoItem: FC<IBarAmmoItem> = ({ count }) => {
  return (
    <div className={cls.ammoItemWrap}>
      {[...Array(count)].map(() => (
        <div key={Math.random()} className={cls.ammoItem} />
      ))}
    </div>
  )
}

const MainBar = () => {
  const {width} = useWindowSize()
  const [activeTripleFirst, setActiveTripleFirst] = useState(
    tripleOptionsFirst[1]
  )
  const [activeTripleFirst2, setActiveTripleFirst2] = useState(
    TestVariantsSecond[1]
  )
  const [activeVariant, setActiveVariant] = useState(TestVariants[1])
  const [isActive, setIsActive] = useState(true)
  const [activeAI, setActiveAI] = useState(TestVariantsThird[1])
  const [superRangeValue, setSuperRangeValue] = useState(5)
  const [hRangeValue, setHRangeValue] = useState(5)
  const [vRangeValue, setVRangeValue] = useState(5)
  const toggleActive = () => setIsActive(!isActive)

  return (
    <div className={isActive ? `${cls.wrap} ${cls.wrapActive}` : cls.wrap}>
      {isActive && (
        <>
          <div className={cls.ai}>
            <VariantsControlDefault
              height='52px'
              options={TestVariantsThird}
              value={activeAI}
              submit={(v: any) => setActiveAI(v)}
            />
          </div>
          {
            width < 1400 && (
              <div className={cls.mdInfo}>
                <InfoItem
                  value='199999'
                  icon={<SimpleFireIcon />}
                  title='Використано'
                />

                <InfoItem
                  value='199999'
                  icon={<AmmoIcon />}
                  title='Залишилось'
                />
              </div>
            )
          }
        </>
      )}

      <div className={cls.container}>
        <div className={cls.toggle} onClick={toggleActive}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={cls.top}>
          <MainBarItem title='ЗУМ'>
            <div className={cls.firstSection}>
              <div>
                <TripleToggle
                  submit={(v: any) => setActiveTripleFirst(v)}
                  value={activeTripleFirst}
                  options={tripleOptionsFirst}
                  isSmall={width < 1500}
                />
              </div>
              <div>
                <VariantsControl
                  isSmall={true}
                  title='Варіанти'
                  options={TestVariants}
                  value={activeVariant}
                  submit={(v: any) => setActiveVariant(v)}
                />

                <div className={cls.marginTop}>
                  <SuperRange
                    value={superRangeValue}
                    submit={setSuperRangeValue}
                  />
                </div>
              </div>
            </div>
          </MainBarItem>
          <MainBarItem title='Ціль'>
            <div>
              <TripleToggle
                submit={(v: any) => setActiveTripleFirst(v)}
                value={activeTripleFirst}
                options={tripleOptionsFirst}
                isSmall={width < 1500}
              />
            </div>
          </MainBarItem>
          <MainBarItem title='Опції'>
            <div>
              <TripleToggle
                submit={(v: any) => setActiveTripleFirst(v)}
                value={activeTripleFirst}
                options={tripleOptionsFirst}
                isSmall={width < 1500}
              />
            </div>
          </MainBarItem>
          <MainBarItem title='Атака' withoutBorder={true}>
            <div>
              <VariantsControl
                topVertical={true}
                title='Запобіжник'
                options={TestVariantsSecond}
                value={activeTripleFirst2}
                submit={(v: any) => setActiveTripleFirst2(v)}
              />

              <div className={cls.marginTop}>
                <ButtonReverse
                  withIcon={true}
                  text='Вогонь'
                  submit={() => alert(1)}
                  type='greenSimple'
                />
              </div>
            </div>
          </MainBarItem>
          {
            width > 1400 && (
              <MainBarItem title='Патрони' withoutBorder={true}>
                <div>
                  <InfoItem
                    value='199999'
                    icon={<SimpleFireIcon />}
                    title='Використано'
                  />

                  <div className={cls.marginTop}>
                    <InfoItem
                      value='199999'
                      icon={<AmmoIcon />}
                      title='Залишилось'
                    />
                  </div>
                </div>
              </MainBarItem>
            )
          }
          <MainBarItem title='Швидкість'>
            <HorizontalRange
              value={hRangeValue}
              submit={(v: any) => setHRangeValue(v)}
            />
          </MainBarItem>
          <MainBarItem title='Висота'>
            <VerticalRange
              value={vRangeValue}
              submit={(v: any) => setVRangeValue(v)}
            />
          </MainBarItem>
          <MainBarItem title='Управління'>
            <div className={cls.axisControl}>
              <AxisControl
                arrowTypes={['hover', 'simple', 'simple', 'simple']}
              />
            </div>
          </MainBarItem>
        </div>
        <div className={cls.ammoWrap}>
          <div>
            <BarAmmoItem count={10} />
          </div>

          <div className={cls.actions}>
            <ButtonReset
              text='TAB'
              title='Сховати меню кнопок'
              state='simple'
            />
            <ButtonReset text='R' title='Перезарядка' state='simple' />
            <ButtonReset text='F' title='Аттака' state='simple' />
            <ButtonReset text='Esc' title='Налаштування' state='simple' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBar

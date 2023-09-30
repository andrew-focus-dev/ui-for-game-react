import cls from './index.module.css'
import DoubleActionsButton from "@/components/ui/btn/double-actions-button";

const Turret = () => {
  return (
    <div className={cls.turret}>
      <div className={cls.head}>
        <h3 className={cls.title}>
          <span className={cls.num}>01</span>
          Назва Турелі
        </h3>
        <div className={cls.numWraper}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='23'
            height='14'
            viewBox='0 0 23 14'
            fill='none'
          >
            <path
              d='M0.872803 6.549C1.09495 6.22479 1.29417 5.88147 1.54307 5.57854C2.88633 3.94545 4.45665 2.58199 6.35392 1.62135C7.64914 0.965823 9.01478 0.547725 10.4639 0.410179C13.2875 0.142728 15.8386 0.89432 18.1747 2.45755C19.6812 3.46567 20.9382 4.7347 22.0342 6.16966C22.3055 6.52499 22.3066 6.90979 22.0364 7.26348C20.7624 8.9315 19.2734 10.3643 17.4526 11.4297C15.9587 12.3036 14.3583 12.8587 12.6276 13.0224C10.0977 13.2615 7.76158 12.6731 5.58813 11.3877C3.79075 10.325 2.32304 8.8993 1.06602 7.24601C0.98415 7.13849 0.936118 7.00422 0.872803 6.8825C0.872803 6.77115 0.872803 6.6598 0.872803 6.54846V6.549ZM7.06894 6.5692C7.02254 9.08433 8.9662 11.1568 11.4169 11.2054C13.9037 11.2545 15.9958 9.28847 16.04 6.86121C16.0859 4.34662 14.1395 2.27251 11.6898 2.22721C9.19217 2.18082 7.11369 4.13375 7.06894 6.56974V6.5692Z'
              fill='white'
            />
            <path
              d='M13.9725 6.72252C13.9632 8.05323 12.8623 9.13777 11.5272 9.13231C10.2058 9.12685 9.12888 8.02812 9.13707 6.69469C9.14526 5.37217 10.2544 4.29035 11.5943 4.2969C12.9059 4.304 13.9818 5.4011 13.9725 6.72252Z'
              fill='white'
            />
          </svg>
          <span className={cls.num}>150</span>
        </div>
      </div>
      <div className={cls.content}>
        <div className={cls.field}>
          <h2 className={cls.fieldTitle}>Локація:</h2>
          <div className={cls.fieldValue}>Маріуполь, с. Мале. 58032</div>
        </div>
        <div className={cls.field}>
          <h2 className={cls.fieldTitle}>Статус:</h2>
          <div className={cls.fieldValue}>Стабільно</div>
        </div>
      </div>

      <DoubleActionsButton
        type='dark'
        submit={() => alert('submit')}
        cancel={() => alert('cancel')}
        titles={['Спостерігати', 'Керувати']}
      />

      {
        /*

         */
      }
    </div>
  )
}

export default Turret

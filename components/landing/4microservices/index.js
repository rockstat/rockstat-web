import React from 'react';
import cl from 'classnames';

import style from './microservices.css';
import { LeftFront, LeftBg, MobCube } from 'components/icons/microservices';

export class Microservices extends React.Component {

  render() {
    return (
      <div className={style.analyticContainer}>
        <div className={style.bottomGradient} />
        <div className={style.bacgroundM}>
          <div className={cl(style.left, 'rockstat-svg-container')}>
            <LeftBg />
          </div>
          <div className={cl(style.right, 'rockstat-svg-container')}>
            <LeftBg />
          </div>
        </div>
        <div className={style.textContainer}>
          <div className={style.title}>Открытые возможности</div>
          <div className={style.description}>
            Вся сила в простоте создания собственных решений оптимально подходящих под задачи.
          
          </div>
        </div>
        <div className={cl(style.leftBg, 'rockstat-svg-container')}>
          <LeftFront />
        </div>
        <div className={cl(style.RightBg, 'rockstat-svg-container')}>
          <LeftFront />
        </div>
        <div className={style.mobileCenter}>
          <MobCube />
        </div>
        <div className={style.contentCenter}>
          <div className={style.leftText}>
            <div className={style.leftTextTop}>
              <div className={style.title}>Действия по расписанию</div>
              <div className={style.description}>
                Произвольная логика для обработки данных в хранилище, взаимодействия с внешними API и пр.
              </div>
            </div>
            <div className={style.leftTextBottom}>
              <div className={style.title}>Триггерные обработчики</div>
              <div className={style.description}>
                Возможность обработки каждого события в реальном времени.
                Инициация любых операций: HTTP Webhooks, Push, Email и пр.
              </div>
            </div>
          </div>

          <div className={style.rightText}>
            <div className={style.rightTextTop}>
              <div className={style.title}>Готовая основа</div>
              <div className={style.description}>
                Frameworks для Python и TypeScript/JavaScript и набор библиотек делают процесс разработки действительно простым.
              </div>
            </div>
            <div className={style.rightTextBottom}>
              <div className={style.title}>Экосистема</div>
              <div className={style.description}>
                Имеются примеры готовых приложений и интегрированная среда разработки.
                Готовыми решениями можно обмениваться с другими.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
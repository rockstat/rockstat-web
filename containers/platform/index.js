import React from 'react';
import cl from 'classnames';

import style from './style.scss';

import LinesAnalytic from '../../static/images/linesAnalytic.png';

import { Docker, Js, Golang, Python, Ts, Clickhouse } from '../../static/icons/technologies';

export class Platform extends React.Component {

  render() {
    return (
      <div className={style.analyticContainer}>
        <div className={style.textContainer}>
          <div className={style.title}>Эта платформа — ваша</div>
          <div className={style.description}>
            Открыто распространяется в исходным коде под лицензией 
            Apache 2.0 <br /> Установка производится на ваш сервер, а данные собираются в привязке <br />
            к cookie вашего домена.</div>
        </div>
        <div className={style.contentCenter}>
          <Docker />
          <Js />
          <Clickhouse />
          <Python />
          <Ts />
          <Golang />
          
        </div>
      </div>
    )
  }
}

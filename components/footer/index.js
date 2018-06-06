import * as React from 'react';
import Link from 'next/link';
import cl from 'classnames';

import style from './style.scss';

import { LogoIcon } from '../../static/icons';

import { footerMenu, footerRightMenu } from '../../constants';

export class Footer extends React.Component {
  render() {
    return (
      <footer className={style.rockstatFooter}>
        <div className={style.top}>
          <div className={style.logo}>
            <LogoIcon />
            <span>Dmitry Rodin, 2021</span>
          </div>
          <div className={style.menu}>
            {
              footerMenu.map((item, index) => {
                return (
                  <div key={index} className={style.item} >
                    <Link href={item.path} >
                      <a className={style.itemMain} > { item.name } </a>
                    </Link>

                    <div className={style.itemChildren}>

                      {
                        item.children !== undefined &&
                        item.children.map((child, key) => {
                          return (
                            <div key={key} className={style.children}>
                              <Link href={child.path} >
                                <a className={cl({[style.notActive]: !child.active})}>{child.name}</a>
                              </Link>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className={style.menuRight}>
          {
              footerRightMenu.map((item, index) => {
                return (
                  <div key={index} className={style.item} >
                    <Link href={item.path} >
                      <a className={style.itemMain} > { item.name } </a>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className={style.bottom}>
          <span>Cодержимое данного сайта доступно по лицензии Creative Commons Attribution 4.0</span>
          <span>Конфиденциальность и персональные данные</span>
        </div>
      </footer>
    )
  }
}

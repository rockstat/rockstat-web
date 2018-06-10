export const docsMenu = [{
  id: 'getting-started',
  title: 'С чего начать',
  parent: 'docs',
  items:   [{
    id: 'setup',
    title: 'Установка платформы',
    parent: 'getting-started'
  }]
}, {
  id: 'exploitation',
  title: 'Работа с платформой',
  parent: 'docs',
  items: [{
    id: 'exploit-data',
    title: 'Работа с данными',
    parent: 'exploitation'
  }]
}, {
  id: 'collecting',
  title: 'Получение данных',
  parent: 'exploitation',
  items: [{
    id: 'colliect-jslib',
    title: 'Сбор с сайта через JSLib',
    parent: 'collecting'
  }, {
    id: 'collect-webhooks',
    title: 'Получение Webhooks',
    parent: 'collecting'
  }]
}]
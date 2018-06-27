import { IArticlesStore } from "../ArticlesRepository/IArticlesStore";


const articlesStore: IArticlesStore = {
   procuracy: {
      id: 'procuracy',
      date: '23 апреля 2018 года',
      title: 'Прокуратура vs ООО «Черноголовка»',
      image: '/images/article/procuracy.jpg',
      text: require('./texts/procuracy')
   },
   overhaul: {
      id: 'overhaul',
      date: '18 апреля 2018 года',
      title: 'Общественники приняли участие в семинаре «Организация и контроль проведения капитального ремонта в МКД»',
      image: '/images/article/overhaul.jpg',
      text: require('./texts/overhaul')
   },
   upravdom: {
      id: 'upravdom',
      date: '29 марта 2018 года',
      title: 'Форум «Управдом»',
      image: '/images/article/upravdom.jpg',
      text: require('./texts/upravdom')
   },
   elections: {
      id: 'elections',
      date: '20 марта 2018 года',
      title: 'По итогам выборов Президента Российской Федерации',
      image: '/images/article/elections.jpg',
      text: require('./texts/elections')
   },
   roundtable: {
      id: 'roundtable',
      date: '05 февраля 2018 года',
      title: '«Проблемы содержания жилищного фонда, собственником которого является Министерство обороны РФ и взаимоотношений с муниципальными образованиями по землям, находящимся на балансе Минобороны»',
      image: '/images/article/roundtable.jpg',
      text: require('./texts/roundtable')
   },
   upravdomdecember: {
      id: 'upravdomdecember',
      date: '15 декабря 2018 года',
      title: 'Декабрьский форум «Управдом»',
      image: '/images/article/upravdomdecember.jpg',
      text: require('./texts/upravdomdecember')
   },
   leader: {
      id: 'leader',
      date: '24 ноября 2017',
      title: '«Лидерство - это реальность»',
      image: '/images/article/leader.jpg',
      text: require('./texts/leader')
   },
   countryquestion: {
      id: 'countryquestion',
      date: '23 ноября 2017 года',
      title: 'В.С.Карахтанов выступил экспертом в общественной палате г. Москвы',
      image: '/images/article/countryquestion.jpg',
      text: require('./texts/countryquestion')
   }
}


export { articlesStore }
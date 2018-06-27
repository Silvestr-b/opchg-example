import { ITeasersStore } from "../ArticlesRepository/ITeasersStore";


const teasersStore: ITeasersStore = {
   procuracy: {
      id: 'procuracy',
      date: '23 апреля 2018 года',
      title: 'Прокуратура vs ООО «Черноголовка»',
      image: '/images/teaser/procuracy.jpg',
      articleId: 'procuracy'
   },
   overhaul: {
      id: 'overhaul',
      date: '18 апреля 2018 года',
      title: 'Впереди контроль за проведением капремонта',
      image: '/images/teaser/overhaul.jpg',
      articleId: 'overhaul'
   },
   upravdom: {
      id: 'upravdom',
      date: '29 марта 2018 года',
      title: 'Форум «Управдом»',
      image: '/images/teaser/upravdom.jpg',
      articleId: 'upravdom'
   },
   elections: {
      id: 'elections',
      date: '20 марта 2018 года',
      title: 'По итогам выборов Президента Российской Федерации',
      image: '/images/teaser/elections.jpg',
      articleId: 'elections'
   },
   roundtable: {
      id: 'roundtable',
      date: '05 февраля 2018 года',
      title: 'Решаем проблему военного городка',
      image: '/images/teaser/roundtable.jpg',
      articleId: 'elections'
   },
   upravdomdecember: {
      id: 'upravdomdecember',
      date: '15 декабря 2018 года',
      title: 'Декабрьский форум «Управдом»',
      image: '/images/teaser/upravdomdecember.jpg',
      articleId: 'upravdomdecember'
   },
   leader: {
      id: 'leader',
      date: '24 ноября 2017',
      title: '«Лидерство - это реальность»',
      image: '/images/teaser/leader.jpg',
      articleId: 'leader'
   },
   countryquestion: {
      id: 'countryquestion',
      date: '23 ноября 2017 года',
      title: 'Дачный вопрос',
      image: '/images/teaser/countryquestion.jpg',
      articleId: 'countryquestion'
   }
}


export { teasersStore }
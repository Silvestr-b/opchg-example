import * as React from 'react'
import { PageHeader } from '../../common/PageHeader';
import { DocumentFeed } from './components/DocumentFeed'
import './DocumentsPage.scss'


const documents = [{
   name: 'Решение Совета депутатов муниципального образования "Городской округ Черноголовка" МО от 18.02.2014 N 5-10/51',
   path: require('./documents/reshenie_soveta_deputatov.rtf')
},{
   name: 'Об основах общественного контроля в Российской Федерации',
   path: require('./documents/ob_osnovah_obchestvennogo_kontrolja.rtf')
},{
   name: 'О порядке рассмотрения обращений граждан Российской Федерации',
   path: require('./documents/o_porjadke_rassmotrenia_obragenii_gragdan.rtf')
},{
   name: 'Положение о порядке проведения общественной экспертизы',
   path: require('./documents/pologenie_o_porjadke_provedenia_obgestvennoi_ekspertizi.rtf')
},{
   name: 'Об Общественной палате Российской Федерации',
   path: require('./documents/ob_obchestvennoi_palate_rossiiskoi_federacii.rtf')
},{
   name: 'Об общих принципах организации и деятельности общественных палат субъектов Российской Федерации',
   path: require('./documents/ob_obchih_principah_organizacii_dejatelnosti_obchestvennih_palat.rtf')
},{
   name: 'Об общих принципах организации местного самоуправления в Российской Федерации',
   path: require('./documents/ob_obchih_principah_mestnogo_samoupravlenia.rtf')
},{
   name: 'Об общественных объединениях',
   path: require('./documents/ob_obchestvennih_obedineniah.rtf')
},{
   name: 'О бесплатной юридической помощи в Российской Федерации',
   path: require('./documents/o_besplatnoi_uridicheskoi_pomochi.rtf')
}]


function DocumentsPage(props: any){
   return (
      <div>
         <PageHeader text={'Документы'}/>
         <DocumentFeed documents={documents}/>
      </div>
   )
}


export { DocumentsPage }
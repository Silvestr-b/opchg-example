import * as React from 'react'
import { Link } from 'react-router-dom'
import './NewsCard.scss'


const linkStyles: any = {
   position: 'absolute',
   left: '0px',
   right: '0px',
   top: '0px',
   bottom: '0px',
   zIndex: 1
}


class NewsCard extends React.Component<any, {}> {
   render() {
      return (
         <div block="news-card" style={{ backgroundImage: `url(${this.props.image})` }}>
            <Link to={this.props.link || '/'} style={linkStyles}>
               <div elem="text-container">
                  <h2 elem="title">{this.props.title}</h2>
                  <p elem="date-label">{this.props.date}</p>
               </div>
            </Link>
         </div>
      )
   }
}


export { NewsCard }
import React from 'react'
import classes from './PortfolioCard.module.css'
function PortfolioCard({title}) {
  return (
    <div className={classes['card']}>
        <div className={classes['img']}>
            <h3>Image</h3>
        </div>
        <div className={classes['content']}>
            <h3>{title}</h3>
            <p>Photography</p>
        </div>
    </div>
  )
}

export default PortfolioCard
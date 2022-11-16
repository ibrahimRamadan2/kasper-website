import React from 'react'
import classes from './SmallSectionHeading.module.css'
function SmallSectionHeading({title , text}) {
  return (
    <div className={classes['heading']}>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default SmallSectionHeading
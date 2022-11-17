import React from 'react'
import classes from './TextIconRow.module.css'
function TextIconRow({iconClass , text}) {
  return (
    <div className={classes['container']}>
      <i className={`${iconClass}`}></i>
      <p>{text}</p>
    </div>
  )
}

export default TextIconRow
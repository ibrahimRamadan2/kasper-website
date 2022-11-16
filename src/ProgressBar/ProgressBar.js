import React from 'react'
import classes from './ProgressBar.module.css'
function ProgressBar({title , progress}) {
  return (
    <div className={classes['container']}>
      <h3>{title}</h3>
      <div className={classes['bar']}>
        <span data-progress={`${progress}%`} style={{width:`${progress}%`}}></span>
      </div>
    </div>
  )
}

export default ProgressBar
import React from 'react'
import classes from './Comment.module.css'
function Comment({comment , author}) {
  return (
    <div className={classes['container']}>
        <div className={classes['image']}></div>
        <div className={classes['content']}>
            <p  className={classes['comment']}>{comment}</p>
            <p  className={classes['author']}>{author}</p>
        </div>
    </div>
  )
}

export default Comment
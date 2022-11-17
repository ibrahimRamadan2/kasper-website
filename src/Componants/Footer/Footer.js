import React from 'react'
import classes from './Footer.module.css'
function Footer() {
  return (
    <footer>
        <img className={classes['logo']} src='images/logo.png' alt=''/>
        <h3>WE ARE SOCIAL</h3>
        <div className={classes['icon-list']}>
        <a href='#'><i class="fa-brands fa-facebook"></i></a>
        <a href='#'> <i class="fa-brands fa-twitter"></i></a>
        <a href='#'>   <i class="fa-brands fa-google-plus-g"></i></a>
        <a href='#'>  <i class="fa-solid fa-globe"></i></a>
        </div>
        <p className={classes['copy-right']}>
        &copy; 2014-<a href='#'> Kasper </a>
        All Right Reserved

        </p>
    </footer>
  )
}

export default Footer
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import './MainNavigation.css'
import Backdrop from '../UIElements/Backdrop'

const MainNavigation = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const openDrawerHandler = () => {
        setDrawerIsOpen(true)
    }

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false)
    }
 
  return (
    <React.Fragment>
        {/* {
            drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>
        }
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
            <nav className='main-navigation__drawer-nav'>
                <NavLinks />
            </nav>
        </SideDrawer>
         */}
        <MainHeader>
            <div className='container'>
            <h1><a href="index.html">Linh Le</a></h1>
            <a href="index.html" className="mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
            <h2>I'm a passionate <span>full-stack web developer</span> from Helsinki</h2>
            <NavLinks />
            </div>
        </MainHeader>
    </React.Fragment>
  )
}

export default MainNavigation
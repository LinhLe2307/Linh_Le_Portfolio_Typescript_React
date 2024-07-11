import React from 'react'
import '../../../pages/info/Info.css'
import '../../../pages/portfolio/Portfolio.css'
import MainHeader from './MainHeader'
import NavLinks from './NavLinks'

const MainNavigation = () => {
  return (
    <React.Fragment>
        <MainHeader>
            <NavLinks />
        </MainHeader>
    </React.Fragment>
  )
}

export default MainNavigation
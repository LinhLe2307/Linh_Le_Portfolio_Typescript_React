import React from 'react'
import './MainHeader.css'
interface MainHeaderProps {
    children: React.ReactNode
}

const MainHeader = ({children}: MainHeaderProps) => {
  return (
    <header id='header'>
        {children}
    </header>
  )
}

export default MainHeader
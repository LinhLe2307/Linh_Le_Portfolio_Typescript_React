import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Info from '../../../pages/info/Info'
import javascript from '../../../assets/icons/javascript.svg'
import mongodb from '../../../assets/icons/mongodb.svg'
import nodejs from '../../../assets/icons/nodejs.svg'
import postgresql from '../../../assets/icons/postgresql.svg'
import python from '../../../assets/icons/python.svg'
import typescript from '../../../assets/icons/typescript.svg'
import flashcard2 from '../../../assets/projects/flashcard/flashcard2.png'
import Scrolling from '../../../shared/components/UIElements/Scrolling'
import { workExLists } from '../../../utils/aboutLists'
import { projectsDetails } from '../../../utils/projectLists'
import '../../../pages/portfolio/Portfolio.css'
import '../../../pages/info/Info.css'
import MainHeader from './MainHeader'

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
            <Info>
                <div className='info-item info-item-2__row-1'>
                    <h4>Work Experience</h4>
                    <Scrolling items={workExLists}/>
                </div>
                <div className='info-item info-item-2__row-2'>
                        <h4>My Expertise</h4>
                        <div  className='info-expertise'>
                            <div>
                                <div>
                                    <img src={typescript}/>
                                </div>
                                <p className='bold info-ex__text'>Typescript</p>
                            </div>
                            <div>
                                <div>
                                    <img src={javascript}/>
                                </div>
                                <p className='bold info-ex__text'>Javascript</p>
                            </div>
                            <div>
                                <div>
                                    <img src={python}/>
                                </div>
                                <p className='bold info-ex__text'>Python</p>
                            </div>
                            <div> 
                                <div>
                                    <img src={postgresql}/>
                                </div>
                                <p className='bold info-ex__text'>PostgreSQL</p>
                            </div>
                            <div>
                                <div>
                                    <img src={mongodb}/>
                                </div>
                                <p className='bold info-ex__text'>MongoDB</p>
                            </div>
                            <div>
                                <div>
                                    <img src={nodejs}/>
                                </div>
                                <p className='bold info-ex__text'>NodeJs</p>
                            </div>
                        </div>
                </div>
                <div>

                </div>
                <div className='info-item info-item-3'>
                        <div className="portfolio" >
                            <div className="container">
                                <div className='portfolio-recent-projects'>
                                    <h4>Recent Projects</h4>
                                    <Link to="portfolio" >View Projects</Link>
                                </div>
                                <div className='portfolio-container'>
                                    {
                                        Object.values(projectsDetails).map(project => {
                                            if (project.type.indexOf('Ongoing') !== -1) {
                                                return (
                                                    <div className="portfolio-item filter-app" >
                                                        <div className="portfolio-wrap" style={{ borderRadius: "10px" }}>
                                                        <img src={flashcard2} className="img-fluid" alt="" 
                                                            style={{ objectFit: "contain", 
                                                                borderRadius: "10px",
                                                            }}/>
                                                        <div className="portfolio-info">
                                                            <h4>{project.name}</h4>
                                                            <p>ONGOING</p>
                                                            <div className="portfolio-links">
                                                            <Link to="https://flash-card-io.netlify.app/" className='portfolio-more-info' target='_blank'>
                                                                <i className="bx bx-plus"></i>
                                                                <div className="text">
                                                                VIEW DEMO
                                                                </div>
                                                            </Link>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        }
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                </div>
            </Info>
        </MainHeader>
    </React.Fragment>
  )
}

export default MainNavigation
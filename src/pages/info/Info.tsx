import { Link } from 'react-router-dom'
import avatar from '../../assets/img/Avatar.jpg'
import '../portfolio/Portfolio.css'
import './Info.css'
import DownloadCV from '../../shared/components/Download/DownloadCV'
import CopyButton from '../../shared/components/CopyButton/CopyButton'

const Info = ({children}: { children: React.ReactNode }) => {
    return (
    <div className='info-container'>
        <div className='info-item info-item-1'>
            <div className='fixed-item'>
                <img src={avatar} />
                <div className='info-looking-job'>
                    <h2>Linh Le</h2>
                    <Link to='/resume' className='blink_me'>OPEN TO WORK</Link>
                </div>
                <p>I am a passionate <span className='highlight'>full-stack web developer</span> with <span className='highlight'>2 years </span> 
                    of expertise in <span className='highlight'> TypeScript</span>, 
                    <span className='highlight'> REST/GraphQL</span>,
                    <span className='highlight'> ReactJs</span>, 
                    <span className='highlight'> Redux</span>, 
                    <span className='highlight'> PostgreSQL</span>, and 
                    <span className='highlight'> NodeJs</span>, based in Helsinki, Finland. 
                    At Druid Oy, I have demonstrated my ability to deliver 
                    <span className='highlight'> user-friendly interfaces</span> and dedicated 
                    <span className='highlight'> server-side solutions</span>.
                </p>
                <div className='info-download'>
                    <DownloadCV />
                    <CopyButton />
                </div>
                <div className='info-media'>
                    <span className='info-media__item'><Link to="https://github.com/LinhLe2307" target='_blank'><i className="bi bi-github"></i></Link></span>
                    <span className='info-media__item'><Link to="https://www.linkedin.com/in/linh-le-96baaa154/" target='_blank'><i className="bi bi-linkedin"></i></Link></span>
                    <span className='info-media__item'><Link to="https://linh-my-le.netlify.app/" target='_blank'><i className="bi bi-link"></i></Link></span>
                </div>
            </div>
        </div>
        { children}
    </div>
  )
}

export default Info
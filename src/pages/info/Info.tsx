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
                <h2>Linh Le</h2>
                <p>I am a passionate <span style={{ color: "white" }}><strong>full-stack web developer</strong></span> from Helsinki, Finland.
                Graduated from  <span style={{ color: "white" }}><strong>Helsinki Business College</strong></span> as a driven 
                full-stack web developer with hands-on experience at <span style={{ color: "white" }}><strong>Druid Oy</strong></span>, 
                I am looking for a full-stack web developer position.
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
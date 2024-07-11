import resume from "../../../assets/Linh_Le_CV.pdf"
import './DownloadCV.css'

const DownloadCV = () => {
  return (
    <button type="button" className="btn btn-primary btn-download">
        <a href={resume} download="Linh_Le_Resume" style={{ color: "var(--dark-theme-white)" }}>
        Download CV
        </a>
    </button>
    
  )
}

export default DownloadCV
import { Button } from "@mui/material"
import resume from "../../../assets/Linh_Le_CV.pdf"
import './DownloadCV.css'

const DownloadCV = () => {
  return (
    <Button className="btn-download">
        <a href={resume} download="Linh_Le_Resume" style={{ color: "var(--dark-theme-white)" }}>
        Download CV
        </a>
    </Button>
    
  )
}

export default DownloadCV
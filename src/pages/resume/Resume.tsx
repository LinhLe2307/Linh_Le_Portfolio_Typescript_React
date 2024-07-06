import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PlaceIcon from '@mui/icons-material/Place';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IosShareIcon from '@mui/icons-material/IosShare';
import "./Resume.css"
import { workExperience, personalProject, educationList, summaryList, technicalLists } from "../../utils/resumeLists"
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <div className="section-column">
            <h1>Linh Le</h1>
            <h4>Full-stack Web Developer</h4>
            <p>
              Graduated as a driven full-stack web developer from Helsinki Business College 
              with hands-on experience as a full-stack web developer at Druid Oy. 
              My expertise including JavaScript, TypeScript, Python, PostgreSQL, React and Nodejs. 
              I am currently in search of a dynamic role as a Full-stack Developer, 
              where I can leverage my skills to contribute to and create innovative website solutions.
            </p>
          </div>
          <div className="section-column">
            fdg
            <img />
          </div>
          <div className="section-column media">
            <p>lemylinh237@gmail.com <span><i><EmailIcon /></i></span></p>
            <p>+358 46 966 4393 <span><i><PhoneIphoneIcon /></i></span></p>
            <p>Vantaa, Finland <span><i><PlaceIcon /></i></span></p>
            <p>https://linh-my-le.netlify.app/ <span><i><WebAssetIcon /></i></span></p>
            <p>https://www.linkedin.com/in/linh-le-96baaa154/ <span><i><LinkedInIcon /></i></span></p>
            <p>https://github.com/LinhLe2307 <span><i>< GitHubIcon /></i></span></p>
          </div>
        </div>

        <div className='row'>
          <div className="col-lg-6 pr-lg-3">
            <div>
              <h3 className="resume-title">WORK EXPERIENCE</h3>
              {
                workExperience.map(experience => (
                  <div className="resume-item" key={experience.company}>
                    <div>
                      <h4 className='resume-subtitle'>{experience.title}</h4>
                      <h4 className='resume-company'>{experience.company}</h4>
                      <p className='resume-year resume-font resume-color'><span>{experience.year}</span><span>{experience.location}</span></p>
                      <p className='resume-font'>{experience.companyDescription}</p>
                      <p>
                          <p className='resume-font resume-color'>Achievements/Tasks</p>
                        <ul>
                          {
                            experience.tasks && 
                            experience.tasks.map(task => <li key={task}>{task}</li>)
                          }
                        </ul>
                      </p>
                    </div>
                    
                  </div>
                ))
              }
            </div>
            
            <div>
              <h3 className="resume-title">EDUCATION</h3>
              {
                educationList.map(education => (
                  <div className="resume-item">
                    <div>
                      <h4 className='resume-subtitle'>{education.title}</h4>
                      <h4 className='resume-company'>{education.school}</h4>
                      <p className='resume-year resume-font resume-color'><span>{education.year}</span><span>{education.location}</span></p>
                      <p className='resume-font resume-color'>{education.certificates ? 'Certificates:' : 'Courses:'}</p>
                      <ul>
                        {
                          education.certificates ? education.certificates.map(cer =>
                            <li key={cer}>{cer}</li>)
                            : education.courses.map(course =>
                              <li key={course}>{course}</li>)
                        }
                      </ul>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="col-lg-6 pr-lg-3">
            {/* Technical Skills */}
            <div>
              <h3 className="resume-title">TECHNICAL SKILLS</h3>
              <div className="resume-item">
                <ul className='resume-item-list'>
                {
                  technicalLists.map(skill => <li key={skill}>{skill}</li>)
                }
                </ul>
              </div>
            </div>

            {/* Personal projects and activities  */}
            <div>
              <h3 className="resume-title">PERSONAL PROJECTS AND ACTIVITIES</h3>
              {
                personalProject.map(project => (
                  <div className="resume-item">
                    <div>
                      <h5 className='resume-company'>{project.title} 
                        {
                          project.url.length > 1 && <Link to={project.url} target="_blank"><span><i><IosShareIcon /></i></span></Link>
                        }
                      </h5>
                      <p className='resume-font'>{project.shortDescription}</p>
                      <ul>
                        {
                          project.description && 
                          project.description.map(des =>
                            <li key={des}>{des}</li>)
                            }
                      </ul>
                    </div>
                  </div>
                ))
              }
            </div>

            {/* Languages */}
            <div>
              <h3 className="resume-title">LANGUAGES</h3>
              <div className="resume-item">
                <ul className='resume-language'>
                  <li><span>Vietnamese</span>
                    <span className='resume-font resume-color'>
                      Native or Bilingual Proficiency
                    </span>
                  </li>
                  <li><span>English</span><span className='resume-font resume-color'>
                    Full Professional Proficiency
                  </span></li>
                  <li><span>Finnish</span><span className='resume-font resume-color'>
                    Elementary Proficiency
                  </span></li>
                </ul>
              </div>
            </div>

            {/* Soft skills  */}
            <div>
              <h3 className="resume-title">SOFT SKILLS</h3>
              <div className="resume-item">
                <ul className='resume-item-list'>
                  <li>Responsibility and trustworthy</li>
                  <li>Ability to learn</li>
                  <li>Problem solving</li>
                  <li>Cooperation skills</li>
                  <li>Team work and individual work</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

  </section>
  )
}

export default Resume
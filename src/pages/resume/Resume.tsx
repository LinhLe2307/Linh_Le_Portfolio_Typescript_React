import { Link } from 'react-router-dom';
import avatar from '../../assets/img/Avatar.jpg';
import { educationList, personalProject, technicalLists, workExperience } from '../../utils/resumeLists';
import Info from '../info/Info';
import './Resume.css';

const Resume = () => {
  return (
    <Info >
      <section className='resume info-item info-item-4 info-scrolling-content'>
          <div className="section-title-resume">
              <h2>Resume</h2>
              <p>My Resume</p>
            </div>
        <div>
          <div className='container'>
              <div className='section-title'>
                <div className='section-column'>
                  <h2>Linh Le</h2>
                  <h5 className='resume-color'>Full-stack Web Developer</h5>
                  <p>
                    Graduated as a driven full-stack web developer from Helsinki Business College 
                    with hands-on experience as a full-stack web developer at Druid Oy. 
                    My expertise including JavaScript, TypeScript, Python, PostgreSQL, React and Nodejs. 
                    I am currently in search of a dynamic role as a Full-stack Developer, 
                    where I can leverage my skills to contribute to and create innovative website solutions.
                  </p>
                </div>
                <div className='section-column section-img'>
                  <img src={avatar} width='200' height='200'/>
                </div>
                <div className='section-column section-media'>
                  <p>lemylinh237@gmail.com <span><i className='bi bi-envelope-fill' style={{ width: '3rem', height: '3rem' }}></i></span></p>
                  <p>+358 40 635 7668 <span><i className='bi bi-phone-fill'></i></span></p>
                  <p>Vantaa, Finland <span><i className='bi bi-geo-alt-fill'></i></span></p>
                  <p><Link to='https://linh-my-le.netlify.app/' style={{ color: 'black'}} target='_blank'>
                    linh-my-le.netlify.app/ </Link><span><i className='bi bi-link'></i></span>
                  </p>
                  <p><Link to='https://www.linkedin.com/in/linh-le-96baaa154/' style={{ color: 'black'}} target='_blank'>
                    linkedin.com/in/linh-le-96baaa154/ </Link><span><i className='bi bi-linkedin'></i></span>
                  </p>
                  <p><Link to='https://github.com/LinhLe2307' style={{ color: 'black'}} target='_blank'>
                    github.com/LinhLe2307 </Link><span><i className='bi bi-github'></i></span>
                  </p>
                </div>
              </div>

              <div className='row'>
                <div className='col-lg-6' style={{ paddingRight: '2rem' }}>
                  <div>
                    <h4 className='resume-title'>WORK EXPERIENCE</h4>
                    {
                      workExperience.map(experience => (
                        <div className='resume-item' key={experience.company}>
                          <div>
                            <h5 className='resume-subtitle'>{experience.title}</h5>
                            <h5 className='resume-company'>{experience.company}</h5>
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
                            {
                              experience.contact && 
                              <p>
                                <p className='resume-font resume-color'>Contact: </p>
                                {experience.contact.map(task => <p key={task} className='resume-font'>{task}</p>)}
                              </p>
                            }
                            
                          </div>
                          
                        </div>
                      ))
                    }
                  </div>
                  
                  <div>
                    <h4 className='resume-title'>EDUCATION</h4>
                    {
                      educationList.map(education => (
                        <div className='resume-item'>
                          <div>
                            <h5 className='resume-subtitle'>{education.title}</h5>
                            <h5 className='resume-company'>{education.school}</h5>
                            <p className='resume-year resume-font resume-color'><span>{education.year}</span><span>{education.location}</span></p>
                            <p className='resume-font resume-color'>{education.certificates ? 'Certificates:' : 'Courses:'}</p>
                            <ul  className='resume-two-columns'>
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
                <div className='col-lg-6' style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                  {/* Technical Skills */}
                  <div>
                    <h4 className='resume-title-right'>TECHNICAL SKILLS</h4>
                    <div className='resume-item-right'>
                      <ul className='resume-item-list resume-tech-skills'>
                      {
                        technicalLists.map(skill => <li key={skill}>{skill}</li>)
                      }
                      </ul>
                    </div>
                  </div>

                  {/* Personal projects and activities  */}
                  <div style={{ marginBottom: '3rem' }}>
                    <h4 className='resume-title-right'>PERSONAL PROJECTS AND ACTIVITIES</h4>
                    {
                      personalProject.map(project => (
                        <div className='resume-item-right-activity'>
                          <div>
                            <h6 className='resume-company'>{project.title} 
                              {
                                project.url.length > 1 && <Link to={project.url} target='_blank'><span>
                                  <i className="bi bi-box-arrow-up-right resume-color"></i>
                                </span></Link>
                              }
                            </h6>
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
                    <h4 className='resume-title-right'>LANGUAGES</h4>
                    <div className='resume-item-right'>
                      <ul className='resume-language'>
                        <li><span>English</span><span className='resume-font resume-color'>
                          Full Professional Proficiency
                        </span></li>
                        <li><span>Finnish</span><span className='resume-font resume-color'>
                          Elementary Proficiency
                        </span></li>
                        <li><span>Vietnamese</span>
                          <span className='resume-font resume-color'>
                            Native or Bilingual Proficiency
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Soft skills  */}
                  <div>
                    <h4 className='resume-title-right'>SOFT SKILLS</h4>
                    <div className='resume-item-right'>
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
        </div>
      </section>

    </Info>
  )
}

export default Resume
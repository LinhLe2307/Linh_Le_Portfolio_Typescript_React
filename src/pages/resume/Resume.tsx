import "./Resume.css"
import { workExperience, personalProject } from "../../utils/resumeLists"

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
          <p>Check My Resume</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Profile</h3>
            <div className="resume-item pb-0">
              <ul>
                <li>lemylinh237@gmail.com</li>
                <li>+358 46 966 4393</li>
                <li>https://www.linkedin.com/in/linh-le-96baaa154/</li>
                <li>https://linh-my-le.netlify.app/</li>
                <li>https://github.com/LinhLe2307</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Helsinki Business College</h4>
              <h5>January 2022 - June 2023</h5>
              <p><em>Helsinki, Finland</em></p>
              <p>Certificates:</p>
              <ul>
                <li>Getting Started with DevOps on AWS - AWS Skill Builder</li>
                <li>Amazon Elastic Compute Cloud Certificate (AWS EC2) - AWS Skill Builder</li>
                <li>Introduction to Amazon Elastic Compute Cloud (EC2) - AWS Skill Builder</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Laurea University of Applied Sciences</h4>
              <h5>January 2018 - July 2021</h5>
              <p><em>Espoo, Finland</em></p>
              <p><ul>
                <li>Search Engine Optimization (SEO)</li>  
                <li>Google Analytics</li>  
                <li>Content Marketing</li>  
              </ul></p>
            </div>

            <h3 className="resume-title">Skills</h3>
            <div className="resume-item">
              <h4>Technical Skills</h4>
              <p>
                <ul>
                  <li>JavaScript, TypeScript, PHP, Python</li>
                  <li>React, Redux, Redux Saga</li>
                  <li>NodeJs / ExpressJs, AWS, Docker, GraphQL</li>
                  <li>PostgreSQL, MongoDB, Vitest Unit Testing</li>
                  <li>Symfony, Drupal</li>
                  <li>RESTful APIs, Git</li>
                  <li>Jira, Confluence, Slack, Figma</li>
                </ul>
              </p>
            </div>
            <div className="resume-item">
              <h4>Soft Skills</h4>
              <p>
                <ul>
                  <li>Responsibility and trusthworthy</li>
                  <li>Ability to learn</li>
                  <li>Problem solving</li>
                  <li>PostgreSQL, MongoDB, Vitest Unit Testing</li>
                  <li>Cooperation skills</li>
                  <li>Teamwork and individual work</li>
                </ul>
              </p>
            </div>
            <div className="resume-item">
              <h4>Language Skills</h4>
              <p>
                <ul>
                  <li>Vietnamese: Native</li>
                  <li>English: Intermediate</li>
                  <li>Finnish: Elementary</li>
                </ul>
              </p>
            </div>
            <h3 className="resume-title">References</h3>
            <div className="resume-item">
              <h4>Laurie Limsam</h4>
              <p>
                <ul>
                  <li>Full-stack Developer at Druid Oy</li>
                  <li>Email: laurie.limsam@druid.fi</li>
                  <li>Phone: +358 41 314 1556</li>
                </ul>
              </p>
            </div>
            <div className="resume-item">
              <h4>Toni Nissinen</h4>
              <p>
                <ul>
                  <li>Drupal Developer at Druid Oy</li>
                  <li>Email: toni.nissinen@druid.fi</li>
                  <li>Phone: +358 40 509 7130</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Work Expeience</h3>
            {
              workExperience.map(experience => (
                <div className="resume-item" key={experience.company}>
                  <h4>{experience.title}</h4>
                  <p><em>{experience.company}</em></p>
                  <h5>{experience.year}</h5>
                  <p>
                  <ul>
                    <li>{experience.descriptionOne}</li>
                    {
                      experience.descriptionTwo && 
                      <li>{experience?.descriptionTwo}</li>
                    }
                  </ul>
                  </p>
                </div>
              ))
            }
            <h3 className="resume-title">Work Expeience</h3>
            {
              personalProject.map(project => (
                <div className="resume-item" key={project.title}>
                  <h5>{project.year}</h5>
                  <p><em>{project.title}</em></p>
                  {
                    project.url && <p>{project.url}</p>
                  }
                  <p>{project.shortDescription}</p>
                  <p>
                  <ul>
                    {
                      project.description.map(des => <li>{des}</li>)
                    }
                  </ul>
                  </p>
                </div>
              ))
            }
          </div>
        </div>

      </div>

  </section>
  )
}

export default Resume
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsDetails } from '../../utils/projectLists';
import { ObjectType } from '../types/portfolioTypes';
import './Portfolio.css';

const getAllProjects = async () => {
  let requests = Object.keys(projectsDetails).map(id => axios.get(`https://api.github.com/repositories/${id}`)) 
  let results

  try {
    const responses = await Promise.all(requests);
    results = responses.map(response => response.data);
  } catch (error) {
    console.error('Error fetching repositories:', error);
  }

  const filterList = results && results.filter((project: ObjectType<string>) => Object.keys(projectsDetails).find(detail => +detail === +project.id))
  const newData = Object.entries(projectsDetails).reduce((obj: ObjectType<ObjectType<string>>, currValue) => {
    const findProject = filterList && filterList.find((project: ObjectType<string>) => +project.id === +currValue[0])
      obj[currValue[0]] = {
        ...currValue[1],
        homepage: findProject.homepage,
        html_url: findProject.html_url,
        topics: findProject.topics && findProject.topics.map((topic: string) => topic.charAt(0).toUpperCase() + topic.slice(1)),
        description: findProject.description,
        created_at: findProject.created_at.slice(0,10),
        updated_at: findProject.updated_at.slice(0,10)
      }
    return obj
  }, {})

  return newData
  // return [
  //   {
  //     name: 'Countries App',
  //     image: '/src/assets/projects/countries.png',
  //      type: ['All', 'ReactJs'],
  //       homepage: 'findProject.homepage',
  //       html_url: 'findProject.html_url',
  //       topics: ['findProject.topics'],
  //       description: 'findProject.description',
  //       created_at: 'findProject.created_at.slice(0,10)',
  //       updated_at: 'findProject.updated_at.slice(0,10)'
  //   },
  //   {
  //     name: 'CardIO App',
  //     image: '/src/assets/projects/flashcard.png',
  //     type: ['All','Ongoing', 'React', 'TypeScript', 'NodeJs'],
  //     homepage: 'findProject.homepage',
  //       html_url: 'findProject.html_url',
  //       topics: ['findProject.topics'],
  //       description: 'findProject.description',
  //       created_at: 'findProject.created_at.slice(0,10)',
  //       updated_at: 'findProject.updated_at.slice(0,10)'
  //   },
  //   {
  //     name: 'SpeedGame App',
  //     image: '/src/assets/projects/speedgame.png',
  //      type: ['All', 'ReactJs'],
  //      homepage: 'findProject.homepage',
  //       html_url: 'findProject.html_url',
  //       topics: ['findProject.topics'],
  //       description: 'findProject.description',
  //       created_at: 'findProject.created_at.slice(0,10)',
  //       updated_at: 'findProject.updated_at.slice(0,10)'
  //   },
  //   {
  //     name: 'Recipe App',
  //     image: '/src/assets/projects/tasteIt.png',
  //      type: ['All', 'ReactJs'],
  //      homepage: 'findProject.homepage',
  //       html_url: 'findProject.html_url',
  //       topics: ['findProject.topics'],
  //       description: 'findProject.description',
  //       created_at: 'findProject.created_at.slice(0,10)',
  //       updated_at: 'findProject.updated_at.slice(0,10)'
  //   },
  // ]
}
const Portfolio = () => {
  const items = ['All', 'Ongoing', 'TypeScript', 'ReactJs', 'NodeJs'];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const { data, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: getAllProjects
  })

  // Filter the data based on the filter criteria
  const filteredData = data && Object.values(data).filter(project =>
    project.type.indexOf(items[activeIndex]) !== -1
  );

  if (isLoading) {
    return 'isLoading'
  }

  return (
    <section id="portfolio" className="portfolio">
    <div className="container">

      <div className="section-title">
        <h2>Portfolio</h2>
        <p>My Works</p>
      </div>

      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            {items.map((item, index) => (
              <li
                key={index}
                className={index === activeIndex ? "filter-active" : ''}
                onClick={() => handleClick(index)}
              >
                {item}
              </li>
            ))}
            
          </ul>
        </div>
      </div>

      <div className="row portfolio-container">

        {
          filteredData && filteredData.map((portfolio) => {
            return (
              <div className="col-lg-6 col-md-6 portfolio-item filter-app" key={portfolio.name}>
                <div className="portfolio-wrap">
                  <img src={portfolio.image[0]} className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>{portfolio.name}</h4>
                    <p>{items[activeIndex]}</p>
                    <div className="portfolio-links">
                      {/* <Link>
                        <i className="bx bx-plus"><AddIcon /></i>
                      </Link> */}
                      <Link to={`${portfolio.name}`} state={{portfolio}}>
                        <i className="bx bx-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
        })
        }

      </div>
    </div>
    </section>
  )
}

export default Portfolio
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

import CloseIcon from '@mui/icons-material/Close';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../portfolio/Portfolio.css';

const PortfolioDetails = () => {
    const projectDetails = useLocation().state
    const navigate = useNavigate();

  return (
    <div id="portfolio-details" className="portfolio-details">
        <i onClick={() => navigate('/portfolio')} style={{ cursor: 'pointer' }} className="portfolio-close"><CloseIcon /></i>
      <div className="container">

        <div className="row">

          <div className="col-lg-8">
            <h2 className="portfolio-title">{projectDetails.portfolio.name}</h2>

            <div className="portfolio-details-slider swiper">
              <div className="swiper-wrapper align-items-center">

                <div className="swiper-slide">
                  {/* <img src={projectDetails.portfolio.image} alt="" /> */}
                  <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                        {
                            projectDetails.portfolio.image.map((img: string) => (
                            <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                        ))
                        }
                    </Swiper>
                </div>

              </div>
              <div className="swiper-pagination"></div>
            </div>

          </div>

          <div className="col-lg-4 portfolio-info">
            <h3>Project information</h3>
            <p>
              {projectDetails.portfolio.description}
            </p>
            <ul>
              <li><strong>Technology stacks: </strong>
                {/* {projectDetails.portfolio.topics.map((topic: string, index: number) => index === (projectDetails.portfolio.topics.length - 1) ? `${topic}` : `${topic}, `)} */}
                <ul>{
                  projectDetails.portfolio.topics.map((topic: string) => <li>{topic}</li>)
                }</ul>
              </li>
              <li><strong>Project DEMO: </strong>
                <Link to={projectDetails.portfolio.homepage} target='_blank'> 
                  {projectDetails.portfolio.homepage.replace(/^https?:\/\/(www\.)?/, '')}
                </Link>
              </li>
              <li><strong>Github: </strong>
                <Link to={projectDetails.portfolio.html_url} target='_blank'> 
                  {projectDetails.portfolio.html_url.replace(/^https?:\/\/(www\.)?/, '')}
                </Link>
              </li>
              <li><strong>Created At: </strong>{projectDetails.portfolio.created_at}</li>
              <li><strong>Updated At: </strong>{projectDetails.portfolio.updated_at}</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}

export default PortfolioDetails
// import "./About.css"
import Info from "../info/Info"

const About = () => {
  return (
  // <section id="about" className="about">
  //   <div className="about-me container">

  //     <div className="section-title">
  //       <h2>About</h2>
  //       <p>Learn more about me</p>
  //     </div>

  //     <div className="row">
  //       <div className="col-lg-4" data-aos="fade-right">
  //         {/* <img src="https://plus.unsplash.com/premium_photo-1718119451394-18ff492490e4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid" alt="" /> */}
  //       </div>
  //       <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
  //         <h3>Full-stack Web Developer</h3>
  //         <p className="fst-italic">
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
  //           magna aliqua.
  //         </p>
  //         <div className="row">
  //           <div className="col-lg-6">
  //             <ul>
  //               {
  //                 Object.entries(aboutMe[0]).map(([key, value]) => (
  //                   <li key={key}><i className="bi bi-chevron-right"></i> <strong>{key}</strong> <span>{value}</span></li>
  //                 ))
  //               }
  //             </ul>
  //           </div>
  //           <div className="col-lg-6">
  //             <ul>
  //               {
  //               aboutMe[1] && Object.entries(aboutMe[1]).map(([key, value])=> {
  //                 return (
  //                   <li key={key}>
  //                     <i className="bi bi-chevron-right"></i>
  //                     <strong>{key}:</strong> 
  //                     {key === 'Email' ? (
  //                       <span>{value}</span>
  //                     ) : (
  //                       <Link to={value}><span>{value.replace(/^https?:\/\/(www\.)?/, '')}</span></Link>
  //                     )}
  //                 </li>
  //                 )
  //                 }
  //                 )
  //               }
  //             </ul>
  //           </div>
  //         </div>
  //         <p>
  //           Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
  //           Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
  //         </p>
  //       </div>
  //     </div>

  //   </div>
  //   <div className="counts container">

  //     <div className="row">

  //       <div className="col-lg-3 col-md-6">
  //         <div className="count-box">
  //           <i className="bi bi-emoji-smile"></i>
  //           <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
  //           <p>Happy Clients</p>
  //         </div>
  //       </div>

  //       <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
  //         <div className="count-box">
  //           <i className="bi bi-journal-richtext"></i>
  //           <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
  //           <p>Projects</p>
  //         </div>
  //       </div>

  //       <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
  //         <div className="count-box">
  //           <i className="bi bi-headset"></i>
  //           <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
  //           <p>Hours Of Support</p>
  //         </div>
  //       </div>

  //       <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
  //         <div className="count-box">
  //           <i className="bi bi-award"></i>
  //           <span data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1" className="purecounter"></span>
  //           <p>Awards</p>
  //         </div>
  //       </div>

  //     </div>

  //   </div>
  //   <div className="skills container">

  //     <div className="section-title">
  //       <h2>Skills</h2>
  //     </div>

  //     <div className="row skills-content">

  //       <div className="col-lg-6">

  //         <div className="progress">
  //           <span className="skill">HTML <i className="val">100%</i></span>
  //           <div className="progress-bar-wrap">
  //             <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
  //           </div>
  //         </div>

  //         <div className="progress">
  //           <span className="skill">CSS <i className="val">90%</i></span>
  //           <div className="progress-bar-wrap">
  //             <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
  //           </div>
  //         </div>

  //       </div>

  //       <div className="col-lg-6">

  //         <div className="progress">
  //           <span className="skill">PHP <i className="val">80%</i></span>
  //           <div className="progress-bar-wrap">
  //             <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
  //           </div>
  //         </div>

  //       </div>

  //     </div>

  //   </div>
  //   <div className="interests container">

  //     <div className="section-title">
  //       <h2>Interests</h2>
  //     </div>

  //     <div className="row">
  //       <div className="col-lg-3 col-md-4">
  //         <div className="icon-box">
  //           <i className="ri-store-line" style={{color: "#ffbb2c"}}></i>
  //           <h3>Lorem Ipsum</h3>
  //         </div>
  //       </div>
  //       <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
  //         <div className="icon-box">
  //           <i className="ri-bar-chart-box-line" style={{color: "#5578ff"}}></i>
  //           <h3>Dolor Sitema</h3>
  //         </div>
  //       </div>
  //       <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
  //         <div className="icon-box">
  //           <i className="ri-calendar-todo-line" style={{color: "#e80368"}}></i>
  //           <h3>Sed perspiciatis</h3>
  //         </div>
  //       </div>
  //       <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
  //         <div className="icon-box">
  //           <i className="ri-paint-brush-line" style={{color: "#e361ff"}}></i>
  //           <h3>Magni Dolores</h3>
  //         </div>
  //       </div>
  //       <div className="col-lg-3 col-md-4 mt-4">
  //         <div className="icon-box">
  //           <i className="ri-database-2-line" style={{color: "#47aeff"}}></i>
  //           <h3>Nemo Enim</h3>
  //         </div>
  //       </div>
  //       <div className="col-lg-3 col-md-4 mt-4">
  //         <div className="icon-box">
  //           <i className="ri-gradienter-line" style={{color: "#ffa76e"}}></i>
  //           <h3>Eiusmod Tempor</h3>
  //         </div>
  //       </div>
  //       <div className="col-lg-3 col-md-4 mt-4">
  //         <div className="icon-box">
  //           <i className="ri-file-list-3-line" style={{color: "#11dbcf"}}></i>
  //           <h3>Midela Teren</h3>
  //         </div>
  //       </div>
  //       <div className="col-lg-3 col-md-4 mt-4">
  //         <div className="icon-box">
  //           <i className="ri-price-tag-2-line" style={{color: "#4233ff"}}></i>
  //           <h3>Pira Neve</h3>
  //         </div>
  //       </div>
  //       <div className="col-lg-3 col-md-4 mt-4">
  //         <div className="icon-box">
  //           <i className="ri-anchor-line" style={{color: "#b2904f"}}></i>
  //           <h3>Dirada Pack</h3>
  //         </div>
  //       </div>
  //       <div className="col-lg-3 col-md-4 mt-4">
  //         <div className="icon-box">
  //           <i className="ri-disc-line" style={{color: "#b20969"}}></i>
  //           <h3>Moton Ideal</h3>
  //         </div>
  //       </div>
  //       <div className="col-lg-3 col-md-4 mt-4">
  //         <div className="icon-box">
  //           <i className="ri-base-station-line" style={{color: "#ff5828"}}></i>
  //           <h3>Verdo Park</h3>
  //         </div>
  //       </div>
  //       <div className="col-lg-3 col-md-4 mt-4">
  //         <div className="icon-box">
  //           <i className="ri-fingerprint-line" style={{color: "#29cc61"}}></i>
  //           <h3>Flavor Nivelanda</h3>
  //         </div>
  //       </div>
  //     </div>

  //   </div>
  //   <div className="testimonials container">

  //     <div className="section-title">
  //       <h2>Testimonials</h2>
  //     </div>

  //     <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
  //       <div className="swiper-wrapper">

  //         <div className="swiper-slide">
  //           <div className="testimonial-item">
  //             <p>
  //               <i className="bx bxs-quote-alt-left quote-icon-left"></i>
  //               Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
  //               <i className="bx bxs-quote-alt-right quote-icon-right"></i>
  //             </p>
  //             <img src={avatar} className="testimonial-img" alt="" />
  //             <h3>Saul Goodman</h3>
  //             <h4>Ceo &amp; Founder</h4>
  //           </div>
  //         </div>


  //       </div>
  //       <div className="swiper-pagination"></div>
  //     </div>

  //     <div className="owl-carousel testimonials-carousel">

  //     </div>

  //   </div>

  // </section>
  <Info>
    <div className="info-item info-item-4">
      dsfgsdf
    </div>
  </Info>
  )
}

export default About
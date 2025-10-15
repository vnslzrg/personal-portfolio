import './App.css'
import './animate.css'
import './components/styles.css'
import { useCarousel } from './hooks/useCarousel'
import { useAnimate } from './hooks/useAnimate'

function App() {
  useCarousel();
  useAnimate();
  return (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          Appdev1
        </a>
        <button
          className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu" /> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            <li className="nav-item">
              <a href="#home-section" className="nav-link">
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#about-section" className="nav-link">
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume-section" className="nav-link">
                <span>Resume</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#services-section" className="nav-link">
                <span>Hobbies</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills-section" className="nav-link">
                <span>Skills</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects-section" className="nav-link">
                <span>Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact-section" className="nav-link">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section id="home-section" className="hero">
      <div className="home-slider owl-carousel">
        <div className="slider-item ">
          <div className="overlay" />
          <div className="container">
            <div
              className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
              <div
                className="one-third js-fullheight order-md-last img"
                style={{ backgroundImage: "url(images/me2.png)" }}
              >
                <div className="overlay" />
              </div>
              <div
                className="one-forth d-flex  align-items-center ftco-animate"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <div className="text">
                  <span className="subheading">Hello!</span>
                  <h1 className="mb-4 mt-3">
                    I'm <span>Veneese!</span>
                  </h1>
                  <p>
                    <a href="#" className="btn btn-primary py-3 px-4">
                      Hire me
                    </a>{" "}
                    <a
                      href="#"
                      className="btn btn-white btn-outline-white py-3 px-4"
                    >
                      My works
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="overlay" />
          <div className="container">
            <div
              className="row d-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
              <div
                className="one-third js-fullheight order-md-last img"
                style={{ 
                  backgroundImage: "url(images/me3.png)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="overlay" />
              </div>
              <div
                className="one-forth d-flex align-items-center ftco-animate"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <div className="text">
                  <span className="subheading">Hello!</span>
                  <h1 className="mb-4 mt-3">
                    aspiring <span>UI/UX designer & SQA</span> from the Philippines.
                  </h1>
                  <p>
                    <a href="#" className="btn btn-primary py-3 px-4">
                      Hire me
                    </a>{" "}
                    <a
                      href="#"
                      className="btn btn-white btn-outline-white py-3 px-4"
                    >
                      My works
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="ftco-about img ftco-section ftco-no-pb"
      id="about-section"
    >
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 col-lg-5 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay" />
              <div
                className="img d-flex align-self-stretch align-items-center"
                style={{ backgroundImage: "url(images/me2.png)" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section ftco-animate">
                <h1 className="big">About</h1>
                <h2 className="mb-4">About Me</h2>
                <p>
                  Hi! I’m <strong>Veneese</strong>, an aspiring UI/UX designer and Software Quality Assurance (SQA) professional from the Philippines. I’m currently studying and passionate about creating designs and solutions that are both user-friendly and functional. I love learning new skills and exploring ways to make digital experiences better.
                </p>
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex">
                    <span>Name:</span> <span>Veneese Julia Lazaraga</span>
                  </li>
                  <li className="d-flex">
                    <span>Education:</span> <span>Bachelor of Science in Information Systems</span>
                  </li>
                  <li className="d-flex">
                    <span>Location:</span> <span>Pampanga</span>
                  </li>
                  <li className="d-flex">
                    <span>Passion:</span> <span>I’m passionate about exploring, experimenting, and understanding how things work.</span>
                  </li>
                  <li className="d-flex">
                    <span>Email:</span> <span>veneesejulialazaraga@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section ftco-no-pb" id="resume-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center ftco-animate">
            <h1 className="big big-2">Resume</h1>
            <h2 className="mb-4">Resume</h2>
            <p>
              This section presents a comprehensive overview of my skills, experiences, and projects, demonstrating my expertise and growth in UI/UX design, and web development.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="resume-wrap ftco-animate">
              <span className="date">2023–Present</span>
              <h2>Bachelor of Science in Information Systems</h2>
              <span className="position">La Verdad Christian College</span>
              <p className="mt-4">
                Pursuing a Bachelor of Science in Information Systems at La Verdad Christian College, developing my skills in web design, programming, and software quality assurance.
              </p>
            </div>
            <div className="resume-wrap ftco-animate">
              <span className="date">2017–2023</span>
              <h2>Secondary School</h2>
              <span className="position">Sitero Francisco Memorial National High School</span>
              <p className="mt-4">
                Completed my secondary education with a focus on the ICT strand, which strengthened my interest in web design and technology.              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="resume-wrap ftco-animate">
              <span className="date">2022–2023</span>
              <h2>TESDA National Certificate II (NC II) Holder</h2>
              <span className="position">Gtechnica</span>
              <p className="mt-4">
              Earned certification in Computer System Servicing (CSS) under TESDA, demonstrating proficiency in computer assembly, maintenance, troubleshooting, and basic network configuration.</p>
            </div>
            <div className="resume-wrap ftco-animate">
              <span className="date">2023-2024</span>
              <h2>Online Courses Certification</h2>
              <span className="position">Udemy</span>
              <p className="mt-4">
                Earned an online certificate for completing a hands-on course covering C# programming fundamentals.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 text-center ftco-animate">
            <p>
              <a
                href="/Lazaraga_resume.pdf"
                download="Lazaraga_resume.pdf"
                className="btn btn-primary py-3 px-4 small-btn"
              >
                Download CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section" id="services-section">
      <div className="container">
        <div className="row justify-content-center py-5 mt-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2">Hobbies</h1>
            <h2 className="mb-4">Hobbies</h2>
            <p>
              Outside academics, I love exploring web design tools, and discovering new ways to improve my creativity.
              I also enjoy listening to music, and spending time with friends to keep life balanced.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                <i className="fi fi-rr-music"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Listening to music</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                  <i className="fi fi-rr-camera"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Photography</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                <i className="fi fi-rr-search"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Testing User Interfaces </h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                <i className="fi fi-rr-film"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Watching Movies & Series</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                <i className="fi fi-rr-book"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Reading Books</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                <i className="fi fi-rr-restaurant"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Trying new foods</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section" id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2">Skills</h1>
            <h2 className="mb-4">My Skills</h2>
            <p>
              Here are the technologies and tools I’m proficient in, and the areas I love working in.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>VsCode</h3>
              <div className="progress">
                <div
                  className="progress-bar color-1"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "90%" }}
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>Figma</h3>
              <div className="progress">
                <div
                  className="progress-bar color-2"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "85%" }}
                >
                  <span>85%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>Laravel</h3>
              <div className="progress">
                <div
                  className="progress-bar color-3"
                  role="progressbar"
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "95%" }}
                >
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>React</h3>
              <div className="progress">
                <div
                  className="progress-bar color-4"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "70%" }}
                >
                  <span>70%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>CSS</h3>
              <div className="progress">
                <div
                  className="progress-bar color-5"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "70%" }}
                >
                  <span>70%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>HTML</h3>
              <div className="progress">
                <div
                  className="progress-bar color-6"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "80%" }}
                >
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section ftco-project" id="projects-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2">Projects</h1>
            <h2 className="mb-4">Projects</h2>
            <p>
              This section showcases a variety of my projects — from creative designs and written works to digital applications and recipe development. Each project reflects my passion for learning, innovation, and creating meaningful work that connects with people in different ways.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/note.jpg)" }}
            >
              <div className="overlay" />
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Note Application</a>
                </h3>
                <span>A notes app built with JavaScript, allowing users to create, read, update, and delete notes while practicing CRUD and data management.</span>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/tastewise.png)" }}
            >
              <div className="overlay" />
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Tastewise</a>
                </h3>
                <span>A GenAI platform built for the food and beverage industry, used by leading brands to go beyond static insights and drive growth, designed with <strong>Figma</strong>, focusing on design and user experience.</span>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/medium.png)" }}
            >
              <div className="overlay" />
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Medium</a>
                </h3>
                <span>A publishing platform where people can read and share insightful stories on topics that matter most, built with <strong>Figma</strong>, which helped me understand content presentation and user engagement.</span>
              </div>
            </div>
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/ispmnes.png)" }}
            >
              <div className="overlay" />
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Instructor-Centered Classroom Monitoring and Attendance System</a>
                </h3>
                <span>A platform we are currently developing to help instructors efficiently manage attendance and classroom activities.</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="project img ftco-animate d-flex justify-content-center align-items-center"
                  style={{ backgroundImage: "url(images/foodorder.png)" }}
                >
                  <div className="overlay" />
                  <div className="text text-center p-4">
                    <h3>
                      <a href="#">DishDash</a>
                    </h3>
                    <span>A mobile ordering app designed with <strong>Figma</strong>, focusing on UI/UX and efficient order management.</span>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div
                  className="project img ftco-animate d-flex justify-content-center align-items-center"
                  style={{ backgroundImage: "url(images/hibaby.png)" }}
                >
                  <div className="overlay" />
                  <div className="text text-center p-4">
                    <h3>
                      <a href="#">Hi, Baby!</a>
                    </h3>
                    <span>An online baby clothing store where users can browse products, place orders, and manage shopping carts, designed with <strong>Figma</strong>, focusing on UI/UX design.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="ftco-section contact-section ftco-no-pb"
      id="contact-section"
    >
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h1 className="big big-2">Contact</h1>
            <h2 className="mb-4">Contact Me</h2>
            <p>
              Feel free to reach out for collaborations, project inquiries, or just to connect!
            </p>
          </div>
        </div>
        <div className="row d-flex contact-info mb-5">
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
               <i className="fab fa-linkedin fa-2x"style={{ color: '#f9a825' }}></i>
              </div>
              <h3 className="mb-4">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/veneese-julia-lazaraga-571bbb300/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
                style={{ color: '#f9a825', fontWeight: 'bold' }}
              >
              Veneese Julia Lazaraga
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <i className="fa-brands fa-instagram fa-2x" style={{ color: '#f9a825' }}></i>
              </div>
              <h3 className="mb-4">Instagram</h3>
              <p>
                <a
                  href="https://www.instagram.com/onyour_neese/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  style={{ color: '#f9a825', fontWeight: 'bold' }}
                  >
                  onyour_neese
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <i className="fa-solid fa-envelope fa-2x" style={{ color: '#f9a825' }}></i>
              </div>
              <h3 className="mb-4">Email Address</h3>
              <p>
                <a
                  href="mailto:veneesejulialazaraga@gmail.com"
                  className="text-decoration-none"
                  style={{ color: '#f9a825', fontWeight: 'bold' }}
                >
                veneesejulialazaraga@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                 <i className="fa-brands fa-github fa-2x" style={{ color: '#f9a825' }}></i>
              </div>
              <h3 className="mb-4">GitHub</h3>
              <p>
                <a
                  href="https://github.com/vnslzrg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  style={{ color: '#f9a825', fontWeight: 'bold' }}
                  >
                  vnslzrg
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row no-gutters block-9">
          <div className="col-md-6 order-md-last d-flex">
            <form action="#" className="bg-light p-4 p-md-5 contact-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={7}
                  className="form-control"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  defaultValue="Send Message"
                  className="btn btn-primary py-3 px-5"
                />
              </div>
            </form>
          </div>
          <div className="col-md-6 d-flex">
            <div
              className="img"
              style={{ backgroundImage: "url(images/mee.png)" }}
            />
          </div>
        </div>
      </div>
    </section>
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About</h2>
              <p>
                I’m always eager to learn new technologies and improve my craft. My goal is to create impactful digital products that make people’s lives easier and more enjoyable.
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-github" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-facebook" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2" />
                    About
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2" />
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2" />
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker" />
                    <span className="text">
                      Apalit, Pampanga
                    </span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-phone" />
                      <span className="text">09192342331</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
</>
  )
}

export default App;

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
          VENEESE
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
                <span>Services</span>
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
              <a href="#blog-section" className="nav-link">
                <span>My Blog</span>
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
                style={{ backgroundImage: "url(images/bg_1.png)" }}
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
                    I'm <span>Veneese Lazaraga </span>
                  </h1>
                  <h2 className="mb-4">Aspiring SQA Specialist</h2>
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
                  backgroundImage: "url('/images/bg_2.png')",
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
                    I'm a <span>web designer</span> based in Pampanga
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
                style={{ backgroundImage: "url(images/bg_1.png)" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section ftco-animate">
                <h1 className="big">About</h1>
                <h2 className="mb-4">About Me</h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex">
                    <span>Name:</span> <span>Veneese Julia Lazaraga</span>
                  </li>
                  <li className="d-flex">
                    <span>Date of birth:</span> <span>August 25, 2005</span>
                  </li>
                  <li className="d-flex">
                    <span>Address:</span> <span>Pampanga</span>
                  </li>
                  <li className="d-flex">
                    <span>Zip code:</span> <span>2016</span>
                  </li>
                  <li className="d-flex">
                    <span>Email:</span> <span>veneesejulialazaraga@gmail.com</span>
                  </li>
                  <li className="d-flex">
                    <span>Phone: </span> <span>09192342331</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="counter-wrap ftco-animate d-flex mt-md-3">
              <div className="text">
                <p className="mb-4">
                  <span className="number" data-number={120}>
                    0 
                  </span>
                  <span>Project complete</span>
                </p>
                <p>
                  <a href="#" className="btn btn-primary py-3 px-3">
                    Download CV
                  </a>
                </p>
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
              A small river named Duden flows by their place and supplies it with
              the necessary regelialia. It is a paradisematic country, in which
              roasted parts of sentences fly into your mouth.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="resume-wrap ftco-animate">
              <span className="date">2014-2015</span>
              <h2>Master Degree of Design</h2>
              <span className="position">Cambridge University</span>
              <p className="mt-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
            <div className="resume-wrap ftco-animate">
              <span className="date">2014-2015</span>
              <h2>Bachelor's Degree of C.A</h2>
              <span className="position">Cambridge University</span>
              <p className="mt-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
            <div className="resume-wrap ftco-animate">
              <span className="date">2014-2015</span>
              <h2>Diploma in Computer</h2>
              <span className="position">Cambridge University</span>
              <p className="mt-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="resume-wrap ftco-animate">
              <span className="date">2014-2015</span>
              <h2>Art &amp; Creative Director</h2>
              <span className="position">Cambridge University</span>
              <p className="mt-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
            <div className="resume-wrap ftco-animate">
              <span className="date">2014-2015</span>
              <h2>Wordpress Developer</h2>
              <span className="position">Cambridge University</span>
              <p className="mt-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
            <div className="resume-wrap ftco-animate">
              <span className="date">2017-2018</span>
              <h2>UI/UX Designer</h2>
              <span className="position">Cambridge University</span>
              <p className="mt-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 text-center ftco-animate">
            <p>
              <a href="#" className="btn btn-primary py-4 px-5">
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
            <h1 className="big big-2">Services</h1>
            <h2 className="mb-4">Services</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                <i className="flaticon-analysis" />
              </span>
              <div className="desc">
                <h3 className="mb-5">Web Design</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                <i className="flaticon-flasks" />
              </span>
              <div className="desc">
                <h3 className="mb-5">Phtography</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                <i className="flaticon-ideas" />
              </span>
              <div className="desc">
                <h3 className="mb-5">Web Developer</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                <i className="flaticon-analysis" />
              </span>
              <div className="desc">
                <h3 className="mb-5">App Developing</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                <i className="flaticon-flasks" />
              </span>
              <div className="desc">
                <h3 className="mb-5">Branding</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                <i className="flaticon-ideas" />
              </span>
              <div className="desc">
                <h3 className="mb-5">Product Strategy</h3>
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
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>Photoshop</h3>
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
              <h3>jQuery</h3>
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
              <h3>HTML5</h3>
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
              <h3>CSS3</h3>
              <div className="progress">
                <div
                  className="progress-bar color-4"
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
              <h3>WordPress</h3>
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
              <h3>SEO</h3>
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
            <h2 className="mb-4">Our Projects</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/project-4.jpg)" }}
            >
              <div className="overlay" />
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Branding &amp; Illustration Design</a>
                </h3>
                <span>Web Design</span>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/project-5.jpg)" }}
            >
              <div className="overlay" />
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Branding &amp; Illustration Design</a>
                </h3>
                <span>Web Design</span>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/project-1.jpg)" }}
            >
              <div className="overlay" />
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Branding &amp; Illustration Design</a>
                </h3>
                <span>Web Design</span>
              </div>
            </div>
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/project-6.jpg)" }}
            >
              <div className="overlay" />
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Branding &amp; Illustration Design</a>
                </h3>
                <span>Web Design</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="project img ftco-animate d-flex justify-content-center align-items-center"
                  style={{ backgroundImage: "url(images/project-2.jpg)" }}
                >
                  <div className="overlay" />
                  <div className="text text-center p-4">
                    <h3>
                      <a href="#">Branding &amp; Illustration Design</a>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div
                  className="project img ftco-animate d-flex justify-content-center align-items-center"
                  style={{ backgroundImage: "url(images/project-3.jpg)" }}
                >
                  <div className="overlay" />
                  <div className="text text-center p-4">
                    <h3>
                      <a href="#">Branding &amp; Illustration Design</a>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section" id="blog-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h1 className="big big-2">Blog</h1>
            <h2 className="mb-4">Our Blog</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry justify-content-end">
              <a
                href="single.html"
                className="block-20"
                style={{ backgroundImage: 'url("images/image_1.jpg")' }}
              ></a>
              <div className="text mt-3 float-right d-block">
                <div className="d-flex align-items-center mb-3 meta">
                  <p className="mb-0">
                    <span className="mr-2">June 21, 2019</span>
                    <a href="#" className="mr-2">
                      Admin
                    </a>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat" /> 3
                    </a>
                  </p>
                </div>
                <h3 className="heading">
                  <a href="single.html">
                    Why Lead Generation is Key for Business Growth
                  </a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry justify-content-end">
              <a
                href="single.html"
                className="block-20"
                style={{ backgroundImage: 'url("images/image_2.jpg")' }}
              ></a>
              <div className="text mt-3 float-right d-block">
                <div className="d-flex align-items-center mb-3 meta">
                  <p className="mb-0">
                    <span className="mr-2">June 21, 2019</span>
                    <a href="#" className="mr-2">
                      Admin
                    </a>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat" /> 3
                    </a>
                  </p>
                </div>
                <h3 className="heading">
                  <a href="single.html">
                    Why Lead Generation is Key for Business Growth
                  </a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry">
              <a
                href="single.html"
                className="block-20"
                style={{ backgroundImage: 'url("images/image_3.jpg")' }}
              ></a>
              <div className="text mt-3 float-right d-block">
                <div className="d-flex align-items-center mb-3 meta">
                  <p className="mb-0">
                    <span className="mr-2">June 21, 2019</span>
                    <a href="#" className="mr-2">
                      Admin
                    </a>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat" /> 3
                    </a>
                  </p>
                </div>
                <h3 className="heading">
                  <a href="single.html">
                    Why Lead Generation is Key for Business Growth
                  </a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img"
      id="section-counter"
    >
      <div className="container">
        <div className="row d-md-flex align-items-center">
          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18">
              <div className="text">
                <strong className="number" data-number={100}>
                  0
                </strong>
                <span>Awards</span>
              </div>
            </div>
          </div>
          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18">
              <div className="text">
                <strong className="number" data-number={1200}>
                  0
                </strong>
                <span>Complete Projects</span>
              </div>
            </div>
          </div>
          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18">
              <div className="text">
                <strong className="number" data-number={1200}>
                  0
                </strong>
                <span>Happy Customers</span>
              </div>
            </div>
          </div>
          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18">
              <div className="text">
                <strong className="number" data-number={500}>
                  0
                </strong>
                <span>Cups of coffee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="ftco-section ftco-hireme img margin-top"
      style={{ backgroundImage: "url(images/bg_1.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 ftco-animate text-center">
            <h2>
              I'm <span>Available</span> for freelancing
            </h2>
            <p>
              A small river named Duden flows by their place and supplies it with
              the necessary regelialia.
            </p>
            <p className="mb-0">
              <a href="#" className="btn btn-primary py-3 px-5">
                Hire me
              </a>
            </p>
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
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row d-flex contact-info mb-5">
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-map-signs" />
              </div>
              <h3 className="mb-4">Address</h3>
              <p>198 West 21th Street, Suite 721 New York NY 10016</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-phone2" />
              </div>
              <h3 className="mb-4">Contact Number</h3>
              <p>
                <a href="tel://1234567920">+ 1235 2355 98</a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-paper-plane" />
              </div>
              <h3 className="mb-4">Email Address</h3>
              <p>
                <a href="mailto:info@yoursite.com">info@yoursite.com</a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-globe" />
              </div>
              <h3 className="mb-4">Website</h3>
              <p>
                <a href="#">yoursite.com</a>
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
              style={{ backgroundImage: "url(images/about.jpg)" }}
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
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-twitter" />
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
                    Services
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
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2" />
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2" />
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2" />
                    Business Strategy
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2" />
                    Data Analysis
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2" />
                    Graphic Design
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
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-phone" />
                      <span className="text">+2 392 3929 210</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-envelope" />
                      <span className="text">info@yourdomain.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with{" "}
              <i className="icon-heart color-danger" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
          </div>
        </div>
      </div>
    </footer>
</>
  )
}

export default App;

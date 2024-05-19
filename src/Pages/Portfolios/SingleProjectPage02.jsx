import React from "react";

//Libraries
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { m } from "framer-motion";

// Components
import Buttons from '../../Components/Button/Buttons'
import FooterStyle01 from "../../Components/Footers/FooterStyle01";
import ImageGallery from "../../Components/ImageGallery/ImageGallery";
import SocialIcons from "../../Components/SocialIcon/SocialIcons";
import Header, { HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar, } from "../../Components/Header/Header";
import CustomModal from '../../Components/CustomModal'
import SideButtons from "../../Components/SideButtons";
import videoCoding from "../../Assets/img/coding.mp4";

// Function
import { fadeIn, fadeInRight } from "../../Functions/GlobalAnimations";

// Data
import { imageGalleryData01 } from "../../Components/ImageGallery/ImageGalleryData";

const SocialIconsData = [
  {
    color: "#3b5998",
    link: "https://www.facebook.com/",
    icon: "fab fa-facebook-f",
  },
  {
    color: "#fe1f49",
    link: "https://www.instagram.com/",
    icon: "fab fa-instagram",
  },
  {
    color: "#ea4c89",
    link: "https://dribbble.com/",
    icon: "fab fa-dribbble",
  },
  {
    color: "#1769ff",
    link: "https://www.behance.net/",
    icon: "fab fa-behance",
  },
];

const SingleProjectPage02 = (props) => {
  return (
    <div style={props.style}>
      {/* Header Start */}
      <Header topSpace={{ desktop: true }} type="reverse-scroll">
        <HeaderNav fluid="fluid" theme="light" bg="white" menu="light" className="px-[35px] py-[0px] md:px-0 border-b border-b-[#0000001a]" containerClass="sm:px-0">
          <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
            <Link aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
                <img className="default-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-black.webp' data-rjs='/assets/img/webp/logo-black@2x.webp' alt='logo' />
                <img className="alt-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-black.webp' data-rjs='/assets/img/webp/logo-black@2x.webp' alt='logo' />
                <img className="mobile-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-black.webp' data-rjs='/assets/img/webp/logo-black@2x.webp' alt='logo' />
              </Navbar.Brand>
            </Link>
          </Col>
          <div>
            <a href="/portfolio/single-project-page-01" className="prevp text-blue-50 py-1 px-2 mx-1 text-sm font-semibold no-underline hover:underline hover:font-normal border-2 border-blue-700 rounded-s-full bg-blue-700 hover:bg-transparent hover:text-blue-600 !important" ><i className="line-icon-Arrow-OutLeft duration-100	text-[20px] inline-block  align-middle	"></i>Prev </a>
            
            </div>
            <div>
            <a href="/portfolio/single-project-page-03" className="nextp text-blue-50 py-1 px-2 mx-1 text-sm font-semibold no-underline hover:underline hover:font-normal border-2 border-blue-700 rounded-e-full bg-blue-700 hover:bg-transparent hover:text-blue-600 " >Next<i className="line-icon-Arrow-OutRight duration-100	text-[20px] inline-block  align-middle	"></i></a>
            
          </div>
          {/*
          <div className="col-auto hidden order-last md:block">
            <Navbar.Toggle className="md:ml-[10px] sm:ml-0">
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </Navbar.Toggle>
          </div>
           
          <Navbar.Collapse className="col-auto px-0 justify-end">
            <Menu {...props} />
          </Navbar.Collapse>
          */}
          <Col className="col-auto text-right pe-0">
            <SearchBar className="pr-0 xs:p-0" />
            <HeaderLanguage />
            <HeaderCart />
          </Col>
        </HeaderNav>
      </Header>
      {/* Header End */}
      <SideButtons />
      {/* Section Start */}
      <section
        className="h-[600px] bg-no-repeat bg-cover overflow-hidden relative bg-center items-center py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] lg:h-[400px] flex"
        style={{
          backgroundImage: "url(https://img.freepik.com/free-photo/human-hand-typing-computer-keyboard-night-generated-by-ai_188544-31050.jpg?t=st=1714378182~exp=1714381782~hmac=35d80c4d0b92172982ddaa71c8cf129b1bb096d06f430408761096af006e56ef&w=826)",
        }}
      >
        <Container>
          <Row className="items-center justify-center">
            <Col
              lg={4}
              sm={5}
              className="col-9 text-center xs:mb-[30px] xs:flex xs:justify-center"
            >
              <img height="" width="" className="w-[429px] h-[200px] mx-auto rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" src="https://img.freepik.com/free-photo/meeting-group-marketing-experts_1409-7697.jpg?t=st=1715420334~exp=1715423934~hmac=92417fe0a0e93c3fcc97e2665bfc10d7925a1973efd683e1a487903721cfb40c&w=826" alt="349*160" />
            </Col>
            <Col lg={8} sm={7} className="col-10 sm:p-0">
              <div className="relative text-right sm:text-end xs:text-center sm:mx-[15px]">
                <div className="h-[1px] w-[90%] right-0 top-[30px] z-0 bg-[#986248] block absolute sm:block sm:w-full sm:top-[25px] xs:hidden xs:w-[95%] xs:right-[15px]"></div>
                <Link
                  to="#"
                  className="px-[35px] py-[20px] bg-[#986248] leading-[20px] text-white text-xmd relative inline-block text-right sm:py-[15px] sm:px-[25px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                >
                  www.sixthsense.com
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}
      {/* Section Start */}
      <section className="bg-lightgray py-[60px] overflow-hidden lg:py-[50px] md:py-[45px] sm:py-[40px]">
        <Container>
          <Row>
            <Col xl={4} lg={5} className="md:mb-[30px] xl:pr-0 w-[40%]">
              
              <h6 className="w-[90%] lg:w-[80%] tracking-[-1px] text-darkgray font-serif mb-0 xs:w-full">
              "Unlock limitless possibilities with our dynamic <span className="font-semibold">Web Applications</span>, where innovation meets seamless functionality!"
              </h6>
            </Col>
            
            <Col lg={2} md={4} className="sm:mb-[20px] w-[50%] ">
              <span className="mb-[20px] text-sm uppercase block md:mb-[10px]">
                Services
              </span>
              <span className="w-[100%] md:w-[60%] xs:w-full leading-[28px] text-darkgray text-xmd font-serif block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              Custom Web Development, Frontend Development, Backend Development, API Development and Integration, Mobile-Friendly and Responsive Design .......
              </span>
            </Col>
            
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="overflow-visible px-[8%] relative py-[80px] lg:py-[70px] md:py-[65px] sm:py-[50px] xl:px-[5%] lg:px-[3%] xs:px-[15px]">
        <Container fluid>
          <Row>
            <Col
              className="h-[800px] relative bg-cover overflow-hidden bg-center bg-no-repeat bg-fixed text-center xs:h-[300px] md:bg-scroll	md:h-[650px] sm:h-[500px]"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?t=st=1714383657~exp=1714387257~hmac=bdba9c3baa22339238fb1c21e28065f8f8e1f32d875737e53bf547e82834d3c2&w=740)", //1920*1050px
              }}
            ></Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="pb-[80px] overflow-hidden lg:pb-[70px] md:pb-[65px] sm:pb-[50px]">
        <Container>
          <Row>
            <m.div {...{ ...fadeIn }} className="place-self-center col-12 col-lg-6 md:mb-[30px] xs:mb-[20px]">
              <h5 className="text-darkgray font-serif mb-0"> Empowering Your Online Presence in <span className="font-semibold "> "Web Applications"</span>: </h5>
            </m.div>
            <m.div {...{ ...fadeIn, transition: { delay: 0.5 } }} className=" col-12 col-lg-5 offset-lg-1">
              <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 py-1" >
              Elevate your digital footprint with our cutting-edge web applications, designed to enhance user experience and drive business growth. From intuitive e-commerce platforms to dynamic content management systems, our solutions empower your online presence with innovation and efficiency.
              </div>
            </m.div>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="px-[8%] xl:px-[5%] lg:px-[3%] xs:px-0">
        <Container fluid>
          <Row className="justify-center">
            <Col
              className="h-[500px] bg-no-repeat bg-cover overflow-hidden relative bg-center md:h-[550px] sm:h-[350px]"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/programming-background-collage_23-2149901783.jpg?t=st=1714387718~exp=1714391318~hmac=094202173d61680f0aad2298acd94af6d87e80a88431c88e34b9f3cd32f98fbe&w=740)", //1570*700px
              }}
            >
              <div className="font-serif text-white">
                <span className="inline-block">
                  {/* Modal Component Start */}
                  <CustomModal.Wrapper
                    className="flex absolute top-0 left-0 w-full h-full items-center justify-center"
                    modalBtn={<Buttons type="submit" className="btn-sonar border-0 mx-auto" themeColor="#986248" color="#fff" size="lg" title={<i className="icon-control-play" />} />} >
                    <div className="w-[1020px] max-w-full relative rounded mx-auto">
                      <div className="fit-video">
                       {/* <iframe width="100%" height="100%" className="shadow-[0_0_8px_rgba(0,0,0,0.06)]" controls src="https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe> */}
                       <video controls>
                        <source src={videoCoding} type="video/mp4" /> 
                          Your browser does not support the video tag.
                       </video>
                      </div>
                    </div>
                  </CustomModal.Wrapper>
                  {/* Modal Component End */}
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[80px] overflow-hidden lg:py-[70px] md:py-[65px] sm:py-[55px] xs:py-[45px]">
        <Container>
          <Row className="items-center">
            <m.div {...fadeInRight} className="col-12 col-xl-6 col-md-5 sm:mb-[30px]">
              <img height="" width="" src="https://qph.cf2.quoracdn.net/main-qimg-4c8d03a85500d55c8c40d4cd462278b6" alt="800px*800px" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"/>
            </m.div>
            <Col xl={5} lg={{ span: 6, offset: 1 }} md={7}>
              <h5 className="text-darkgray font-serif">Building the Backbone: Mastering Backend Development</h5>
              <p className="mb-[4.5rem] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              "Unlock the power of seamless functionality with our expert backend development services. Behind every great web application lies a robust backend, and our team is dedicated to building the foundation for your digital success. From crafting scalable architectures to optimizing data management, we ensure that your backend not only supports but also enhances your online presence, driving efficiency and performance across the board."
              </p>
              <Row className="row-cols-1">
                <m.div {...fadeIn} className="col col-sm text-center xs:mb-[30px] ">
                  <img className=" text-[40px] inline-block mb-[20px] text-[#986248] sm:mb-0 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" src="https://iconape.com/wp-content/png_logo_vector/ottawa-js-logo.png" alt="js" ></img>
                  <span className="leading-[18px] font-medium text-sm font-serif uppercase block">
                    java script
                  </span>
                </m.div>
                <m.div {...{ ...fadeIn, transition: { delay: 0.5 } }} className="col col-sm offset-lg-1 text-center xs:mb-[30px]" >
                  <img className="text-[40px] inline-block mb-[20px] text-[#986248] sm:mb-0 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUS2FfzHDxc3Bw_0m98H6f8agSYMhu2rHhlxYmoauig&s" alt=""></img>
                  <span className="leading-[18px] font-medium text-sm font-serif uppercase block">
                    php
                  </span>
                </m.div>
                <m.div {...{ ...fadeIn, transition: { delay: 0.6 } }} className="col col-sm offset-lg-1 text-center xs:mb-[30px]" >
                  <img className=" text-[40px] inline-block mb-[20px] text-[#986248] sm:mb-0 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Python_logo_51.svg/1200px-Python_logo_51.svg.png" alt="python"></img>
                  <span className="leading-[18px] font-medium text-sm font-serif uppercase block">
                    python
                  </span>
                </m.div>
                <m.div {...{ ...fadeIn, transition: { delay: 0.7 } }} className="col col-sm offset-lg-1 text-center">
                  <img className="line-icon-Box-Open text-[40px] inline-block mb-[20px] text-[#986248] sm:mb-0 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" src="https://cdn.iconscout.com/icon/free/png-256/free-java-25-226002.png?f=webp" alt="java"></img>
                  <span className="leading-[18px] font-medium text-sm font-serif uppercase block">
                    java
                  </span>
                </m.div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="px-[8%] py-0 overflow-hidden xl:px-[5%] lg:px-[3%] xs:px-[15px]">
        <Container fluid>
          <Row>
            <Col
              lg={3}
              sm={6}
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252490.jpg?t=st=1714716486~exp=1714720086~hmac=e29c290f5022ad6f966cedb572450715fc95284de5cd21c4b6a9d8d8dccca853&w=360)", //800*1367px
              }}
              className="h-[800px] bg-no-repeat bg-cover overflow-hidden relative bg-center lg:h-[450px] sm:h-[450px] xs:h-[650px] md:mb-[15px]"
            ></Col>
           <Col     
              lg={3}
              sm={6}
              style={{
                backgroundImage:
                  "url(https://cdn.pixabay.com/photo/2024/03/02/10/57/ai-generated-8608339_640.jpg)",
              }}
              className="h-[800px]  bg-no-repeat bg-cover overflow-hidden relative bg-center lg:h-[450px] sm:h-[450px] xs:h-[650px] md:mb-[15px]"
            ></Col> 
            <Col
              lg={6}
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252473.jpg?t=st=1714460131~exp=1714463731~hmac=aec204e6e7e172a1d5b30d6becb53dea946ebaf0491f8b0327be345cc110833a&w=360)", //960*820px
              }}
              className="h-[800px] bg-no-repeat bg-cover overflow-hidden relative bg-center lg:h-[450px]"
            ></Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="pt-[80px] lg:pt-[70px] md:pt-[60px] sm:pt-[50px]">
        <Container>
          <Row className="justify-center">
            <Col
              xl={6}
              lg={7}
              sm={8}
              className="mb-10 text-center px-[15px] md:mb-20"
            >
              <span className="mb-[10px] font-serif font-medium text-[#986248] text-md uppercase block">
                Frontend Development
              </span>
              <h5 className="tracking-[-1px] text-darkgray font-serif mb-0 text-[24px]">
              Mastering the Art of Frontend Development: Crafting Engaging User Experiences with HTML, CSS, and JavaScript.
              </h5>
            </Col>
          </Row>
          <Row lg={3} sm={2} className="p-24 row-cols-1 justify-center gap-y-[30px] xs:gap-y-[15px]">
            <m.div {...{ ...fadeInRight, transition: { duration: 0.8, delay: 0.6 } }}>
              <div className="bg-lightgray ">
                <img height="" width="" class="w-full h-[290px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:rounded-3"
                  src="https://img.freepik.com/free-photo/html-http-web-design-hompage-icon_53876-120700.jpg?t=st=1714717681~exp=1714721281~hmac=1e20b8c6c66c245b57d5e17b36ab19c3c565555d1133a3c2215b1bb7ce7c97f3&w=740"
                  alt="800*651"
                />
                <div className="pr-14 pl-14 pt-14 pb-6 md:p-[2.5rem] text-center relative">
                  <span className="mb-[10px] font-medium text-darkgray font-serif block">
                    HTML
                  </span>
                  <p className=" text-justify">
                  The cornerstone of web development, organizing content with tags to create cohesive and accessible webpages for users worldwide.
                                                               
                  </p>
                </div>
              </div>
            </m.div>
            <m.div {...{ ...fadeInRight, transition: { duration: 0.6, delay: 0.4 } }}>
              <div className="bg-lightgray">
                <img height="" width="" class="w-full h-[290px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:rounded-3"
                  src="https://cdn.pixabay.com/photo/2016/11/19/22/32/css3-1841488_640.jpg"
                  alt=""
                />
                <div className="p-14 md:p-[2.5rem] text-center relative">
                  <span className="mb-[10px] font-medium text-darkgray font-serif block">
                    CSS
                  </span>
                  <p className="text-justify">
                  The design wizard of the web, shaping HTML elements with styles to create stunning, responsive, and user-friendly websites.
                                                                    
                  </p>
                </div>
              </div>
            </m.div>
            <m.div  {...{ ...fadeInRight, transition: { duration: 0.4, delay: 0.2 } }}>
              <div className="bg-lightgray">
                <img height="" width="" class="w-full h-[290px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:rounded-3"
                  src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_640.png"
                  alt=""
                />
                <div className="pr-14 pl-14 pt-14 pb-6 md:p-[2.5rem] text-center relative">
                  <span className="mb-[10px] font-medium text-darkgray font-serif block">
                    JAVASCRIPT
                  </span>
                  <p className="text-justify">
                  JavaScript revolutionizes web development, enabling dynamic and interactive experiences across platforms with its versatility and widespread adoption.
                  </p>
                </div>
              </div>
            </m.div>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[70px] lg:py-[60px] md:py-[50px] sm:py-[40px]">
        <Container className="text-center">
          <span className="mb-[15px] font-medium text-darkgray text-sm font-serif uppercase inline-block">
            Share this project
          </span>
          <SocialIcons
            theme="social-icon-style-10"
            className="justify-center"
            data={SocialIconsData}
          />
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="px-[8%] xl:px-[5%] lg:px-[2%] xs:px-0 ">
        <Container fluid>
          <Row className="gx-0 !mx-[-15px] ">
            <ImageGallery
              animation={fadeIn}
              theme="image-gallery-01"
              data={imageGalleryData01}
              overlay="#986248"
              className=""
              grid="grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large text-center"
            />
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[60px] lg:py-[50px] md:py-[40px] sm:py-[35px]">
        <Container>
          <Row>
            <Col className="text-center">
              <img height="" width="" src="https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_1280.png"  alt="1570*497" />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="relative z-[1] bg-lightgray p-0 overflow-hidden">
        <Container fluid className="px-0">
          <Row sm={2} className="row-cols-1 justify-center xs:text-center gx-0">
            <Col className="relative">
              <Link
                to="/portfolio/single-project-page-01"
                className="portfolio_btn h-full px-28 py-16 justify-between items-center flex xl:p-12 md:inline-flex"
              >
                <div
                  className="portfolio_img absolute top-0 left-0 h-full w-full -z-[1] duration-150	bg-no-repeat bg-cover overflow-hidden bg-center"
                  style={{
                    backgroundImage:
                      "url(https://cdn.pixabay.com/photo/2021/09/06/12/40/cryptocurrency-6601591_1280.jpg)", //955*185
                  }}
                ></div>
                <div className="btn_icon font-medium text-darkgray font-serif mr-uto uppercase">
                  <i className="line-icon-Arrow-OutLeft duration-100	text-[40px] inline-block mr-[20px] align-middle	"></i>
                  <span className="text-sm inline-block md:hidden">Prev project</span>
                </div>
                <span className="portfolio_disc font-medium text-darkgray text-xlg font-serif block lg:text-[18px] lg:leading-[26px] md:text-left">
                  Blockchain Technology
                </span>
              </Link>
            </Col>
            <Col className="relative md:flex md:justify-end xs:block">
              <Link
                to="/portfolio/single-project-page-03"
                className="portfolio_btn h-full px-28 py-16 justify-between items-center flex xl:p-12 md:inline-flex"
              >
                <span className="portfolio_disc font-medium text-darkgray text-xlg font-serif block lg:text-[18px] lg:leading-[26px] md:text-right">
                  Cross Platform Apps
                </span>
                <div
                  className="portfolio_img absolute top-0 left-0 h-full w-full -z-[1] duration-150	bg-no-repeat bg-cover overflow-hidden bg-center"
                  style={{
                    backgroundImage:
                      "url(https://img.freepik.com/free-photo/website-hosting-concept-with-bright-light_23-2149406783.jpg?t=st=1715243184~exp=1715246784~hmac=fd100961f977973876a21df0a5df6dbb388fa1979f31d5a8fe36c3d9427dbc15&w=826)",
                  }}
                ></div>
                <div className="btn_icon font-medium text-darkgray font-serif mr-uto uppercase">
                  <span className="text-sm inline-block md:hidden">Next project </span>
                  <i className="line-icon-Arrow-OutRight duration-100	text-[40px] inline-block ml-[20px] align-middle	"></i>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="text-slateblue bg-[#262b35]" />
      {/* Footer End */}
    </div >
  );
};

export default SingleProjectPage02;

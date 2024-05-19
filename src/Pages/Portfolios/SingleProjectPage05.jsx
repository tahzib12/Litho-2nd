import React, { useRef } from "react";

// Libraries
import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Components
import Header, { HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar, } from "../../Components/Header/Header";
import { Parallax } from "react-scroll-parallax";
import ImageGallery from "../../Components/ImageGallery/ImageGallery";
import FooterStyle01 from "../../Components/Footers/FooterStyle01";
import { fadeIn, fadeInLeft, fadeInRight } from "../../Functions/GlobalAnimations";
import SideButtons from "../../Components/SideButtons";

// Data
import { imageGalleryData02 } from "../../Components/ImageGallery/ImageGalleryData";
const TestimonialsCarouselData = [
  {
    img: "https://img.freepik.com/free-photo/businessman-interacting-with-futuristic-graphics_23-2151003719.jpg?t=st=1715345111~exp=1715348711~hmac=394b5a5c7f8faa8f02447273eb652f1be874b9acb403d0f45b3b93a752f53c4d&w=740",
  },
  {
    img: "https://img.freepik.com/free-photo/businessman-working-futuristic-office_23-2151003750.jpg?t=st=1715345132~exp=1715348732~hmac=5a78bb5ff0ae445ef2a76f729d86b1e865644c13c70a188eae7d37466fdff264&w=740",
  },
  {
    img: "https://img.freepik.com/free-photo/scene-with-business-person-working-futuristic-office-job_23-2151003690.jpg?t=st=1715345145~exp=1715348745~hmac=83e05753bf290afb319385961a6dbd6841051be8c9ff89552c1632a86e1f997c&w=740",
  },
];

const SingleProjectPage05 = (props) => {
  const swiperRef = useRef(null);
  return (
    <div style={props.style}>
      {/* Header Start */}
      <Header topSpace={{ desktop: true }} type="reverse-scroll">
        <HeaderNav fluid="fluid" theme="light" bg="white" menu="light" className="px-[35px] py-[0px] md:px-0" containerClass="sm:px-0">
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
            <a href="/portfolio/single-project-page-04" className="prevp text-blue-50 py-1 px-2 mx-1 text-sm font-semibold no-underline hover:underline hover:font-normal border-2 border-blue-700 rounded-s-full bg-blue-700 hover:bg-transparent hover:text-blue-600 !important " ><i className="line-icon-Arrow-OutLeft duration-100	text-[20px] inline-block  align-middle	"></i>Prev </a>
            
            </div>
            <div>
            <a href="/portfolio/single-project-page-01" className="nextp text-blue-50 py-1 px-2 mx-1 text-sm font-semibold no-underline hover:underline hover:font-normal border-2 border-blue-700 rounded-e-full bg-blue-700 hover:bg-transparent hover:text-blue-600" >Next<i className="line-icon-Arrow-OutRight duration-100	text-[20px] inline-block  align-middle	"></i></a>
            
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
      <section className="py-0 relative">
        <Swiper
          ref={swiperRef}
          slidesPerView="auto"
          speed={1000}
          pagination={{ clickable: true }}
          breakpoints={{
            992: {
              slidesPerView: "auto",
              spaceBetween: 0

            }
          }}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          centeredSlides={true}
          className="SingleProjectPage05 relative black-move"
        >
          {TestimonialsCarouselData.map((item, i) => {
            return (
              <SwiperSlide key={i} className="w-[55%] md:w-full">
                <img height="" width="" src={item.img} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {
          <>
            <div
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className="absolute top-1/2 -translate-y-1/2 left-[40px] z-[1] cursor-pointer slider-navigation-style-07 swiper-button-previous-nav xs:left-[10px]"
            >
              <i className="feather-arrow-left text-[15px] text-black font-normal shadow-[0_0_30px_rgba(0,0,0,0.08)] bg-white flex justify-center items-center rounded-full h-[40px] w-[40px] text-center sm:h-[40px] sm:w-[40px]"></i>
            </div>
            <div
              onClick={() => swiperRef.current.swiper.slideNext()}
              className="absolute top-1/2 -translate-y-1/2 right-[40px] z-[1] cursor-pointer slider-navigation-style-07 swiper-button-next-nav xs:right-[10px]"
            >
              <i className="feather-arrow-right text-[15px] text-black font-normal shadow-[0_0_30px_rgba(0,0,0,0.08)] bg-white flex justify-center items-center rounded-full h-[40px] w-[40px] text-center sm:h-[40px] sm:w-[40px]"></i>
            </div>
          </>
        }
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[80px] overflow-hidden lg:py-[70px] md:py-[60px] sm:py-[50px]">
        <Container>
          <Row className="items-center justify-center">
            <m.div {...fadeIn} className="col-8 col-lg-3 offset-lg-1 col-md-5 col-sm-6 md:mb-[50px]" >
              <img height="" width="" src="https://img.freepik.com/free-photo/business-person-futuristic-business-environment_23-2150970215.jpg?t=st=1715345951~exp=1715349551~hmac=7e09de606c4945e4339ac02ef04b6f16d29ba6a8f6c01d1caafb1cbb2630f179&w=740" alt="775*575px"  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500 rounded-4 "/>
            </m.div>
            <m.div {...{ ...fadeIn, transition: { delay: 0.6 } }} className="col-12 col-lg-6 offset-lg-1 visible" >
              <h5 className="font-medium tracking-[-1px] text-darkgray font-serif mb-[25px] md:text-center lg:mb-[15px]">Tech Consulting</h5>
              <p className="mb-0 xl:text-start w-full md:w-[80%] lg:text-start lg:mx-auto md:text-center">
              Tech consulting involves providing strategic advice and expertise to businesses on leveraging technology for growth and efficiency. Consultants analyze existing systems, recommend solutions, and guide implementation to optimize operations, enhance security, and drive innovation, ensuring businesses stay competitive in a rapidly evolving digital landscape.
              </p>
            </m.div>
            <m.div {...fadeIn} className="col-12 col-md-12 text-center flex my-[1rem] items-center flex-row" >
              <span className="h-[1px] bg-mediumgray w-full"></span>
              <img height="115px" width="115px" src="https://img.freepik.com/free-photo/business-person-futuristic-business-environment_23-2150970188.jpg?t=st=1715342651~exp=1715346251~hmac=2f384402dd5e1d97991d3c18e392e9b6e66a7ba2a067f5776fbce636abd700cb&w=740" alt="115*115px" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500 rounded-4 " />
              <span className="h-[1px] bg-mediumgray w-full"></span>
            </m.div>
            <Col className="col-12 font-serif uppercase text-sm font-medium leading-[12px]">
              <Row>
                <m.div {...fadeIn} className="col-12 col-md-3 col-sm-6 text-[13px] font-serif border-mediumgray visible border-r-[1px] text-center sm:mb-[20px]" >
                  <span className="text-darkgray inline-block md:mb-[10px] md:block"> DATE: </span>
                  <span> 01 JANUARY 2024</span>
                </m.div>
                <m.div {...{ ...fadeIn, transition: { delay: 0.6 } }} className="col-12 col-md-3 col-sm-6 text-[13px] font-serif border-mediumgray visible border-r-[1px] text-center sm:border-none sm:mb-[20px]" >
                  <span className="text-darkgray inline-block md:mb-[10px] md:block"> CLIENT: </span>
                  <span> Mark Henry</span>
                </m.div>
                <m.div {...{ ...fadeIn, transition: { delay: 0.8 } }} className="col-12 col-md-3 col-sm-6 text-[13px] font-serif border-mediumgray visible border-r-[1px] text-center sm:mb-[20px]" >
                  <span className="text-darkgray inline-block md:mb-[10px] md:block"> INDUSTRY: </span>
                  <span> INFORMATION TECHNOLOGY</span>
                </m.div>
                <m.div {...{ ...fadeIn, transition: { delay: 0.9 } }} className="col-12 col-md-3 col-sm-6 text-[13px] font-serif text-center sm:mb-[20px]" >
                  <span className="text-darkgray inline-block md:mb-[10px] md:block"> WEBSITE: </span>
                  <a aria-label="themezaa" rel="noreferrer" href="https://www.themezaa.com/" target="_blank"> WWW.THEMEZAA.COM</a>
                </m.div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section
        className="relative bg-cover overflow-hidden bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url(/assets/img/webp/single-project-page-05-img-20.webp)",
        }}
      >
        <Container>
          <Row className="mb-20 sm:mb-20">
            <m.div {...fadeInRight} className="p-8 col-12 col-md-6 sm:mb-8">
              <img  src="https://img.freepik.com/free-photo/view-professional-business-people-working-together_23-2150917046.jpg?t=st=1715870019~exp=1715873619~hmac=de11d93d78fbf00639dd82c9e5d498d3a926937c915da579b0d4f6cc5194b4d1&w=740" alt="" className="w-[500px] h-[500px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500 rounded-4 "/>
            </m.div>
            <m.div {...fadeInLeft} className="p-8 col-12 col-md-6">
              <img height="846px" width="800px" src="https://img.freepik.com/free-photo/view-professional-business-people-working-together_23-2150917072.jpg?t=st=1715868622~exp=1715872222~hmac=f5afd0050da22471ca76350a7d7d4e77b1853422466fa51a28b983430b18289c&w=740" alt="" className="w-[500px] h-[500px]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500 rounded-4 " />
            </m.div>
          </Row>
        </Container>
      </section>
      {/* Section End */}


      {/* Parallax Scrolling Start */}
      <div className="h-[700px] md:h-[550px] sm:h-[350px] bg-top overflow-hidden relative">
        <Parallax className="lg-no-parallax bg-cover cover-background absolute top-[0px] left-0 md:-top-[30px] w-full h-[100vh]" translateY={[-50, 50]} style={{ backgroundImage: `url(https://img.freepik.com/free-photo/business-people-futuristic-business-environment_23-2150970212.jpg?t=st=1715870599~exp=1715874199~hmac=6b21896086c4156d484c1ec05300bfc65dd467b063e95dc164b591c7ac181248&w=900)` }}></Parallax>
        <div className="px-1 tracking-[-3px] text-white  left-0 bottom-0   font-semibold text-[60px] leading-[60px] font-serif uppercase text-center w-full absolute lg:text-[50px] lg:leading-[50px] md:text-[40px] md:leading-[40px] sm:leading-[30px] sm:text-[30px] ]">
        IT Infrastructure Planning and Optimization
        </div>
      </div>
      {/* Parallax Scrolling End */}

      {/* Section Start */}
      <section className="py-[80px] overflow-hidden lg:py-[70px] md:py-[60px] sm:py-[50px]">
        <Container>
          <m.div {...fadeIn} className="row">
            <Col md={12}>
              <img height="750px" width="1200px" src="https://img.freepik.com/free-photo/cloud-data-storage-rack-concept-glass-cube-cloudscape-digital-metaverse-server-global-network-business-web-database-backup-computer-private-infrastructure-technology_90220-1363.jpg?t=st=1715361259~exp=1715364859~hmac=f04fdda090db6dd9306b5dd53570552590e94c54b0e6f150ea5d0252b576c018&w=740" alt="" className=" mb-16 sm:mb-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500 rounded-4 " />
              <img height="750px" width="1200px" src="https://img.freepik.com/free-photo/server-cloud-data-storage-concept-solution-web-database-backup-computer-infrastructure-technology-cloudscape-digital-online-service-global-network_90220-1341.jpg?t=st=1715361403~exp=1715365003~hmac=ef8ce1d22c09cb04abf257e51170f96785175ec5cdf4211f367b627d30855058&w=740" alt="" className="mb-16 sm:mb-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500 rounded-4 " />
              <img height="750px" width="1200px" src="https://img.freepik.com/free-photo/person-using-ar-technology-perform-their-occupation_23-2151137378.jpg?t=st=1715361568~exp=1715365168~hmac=2b639660ab57cfa802e60b0cc14fba985675bb7264ed4d7a197f5ac4cd60b592&w=740" alt="" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500 rounded-4 "/>
            </Col>
          </m.div>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section
        className="bg-no-repeat bg-cover overflow-hidden relative bg-center py-[80px] lg:py-[70px] md:py-[65px] sm:py-[50px]"
        style={{
          backgroundImage: "url(https://img.freepik.com/free-photo/simple-blank-clean-stage-circular-background_1409-5012.jpg?t=st=1715872135~exp=1715875735~hmac=44420077040495dc110ca767bea30d65d4be55d59a49c966d06561a969e13c0e&w=740)",
        }}
      >
        <Container fluid>
          <Row className="justify-center">
            <Col md={8}>
              <Row lg={3} className="justify-center row-cols-1">
                <m.div {...fadeIn} className="col text-center md:mb-[20px]">
                  <img height="973px" width="800px" src="https://img.freepik.com/free-photo/business-person-futuristic-business-environment_23-2150970234.jpg?t=st=1715361687~exp=1715365287~hmac=34413d9fa1ad3ba1ec9adc1d2f5fa21a067f8bfadaf1b7de3c4c21cd5228ffd0&w=360" alt="" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500 rounded-4 " />
                  <span className="mt-[30px] font-medium text-black text-md font-serif uppercase block"> Data Analytics and Business Intelligence</span>
                </m.div>
                <m.div {...{ ...fadeIn, transition: { delay: 0.6 } }} className="col text-center md:mb-[20px]">
                  <img height="973px" width="800px" src="https://img.freepik.com/free-photo/business-person-futuristic-business-environment_23-2150970231.jpg?t=st=1715361901~exp=1715365501~hmac=6f6580f79e23703ce5170fc96444c76d8370d65edd815e6172904f51713bf10b&w=360" alt="" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500 rounded-4 "/>
                  <span className="mt-[30px] font-medium text-black text-md font-serif uppercase block"> IT Governance and Compliance:</span>
                </m.div>
                <m.div {...{ ...fadeIn, transition: { delay: 0.8 } }} className="col text-center">
                  <img height="973px" width="800px" src="https://img.freepik.com/free-photo/futuristic-portrait-young-girl-with-high-tech_23-2151133535.jpg?t=st=1715363040~exp=1715366640~hmac=d45ca793de3a9ec2336258c050fb2fa04b1923a3a5d882f1c72f020c1804a6fc&w=360" alt="" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500 rounded-4 "/>
                  <span className="mt-[30px] font-medium text-black text-md font-serif uppercase block"> Emerging Technologies Adoption </span>
                </m.div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="pt-[40px] lg:pt-[30px] md:pt-[25px] sm:pt-[20px] overflow-hidden">
        <Container>
          <Row className="justify-center ">
            <Col lg={4} className="place-self-center">
              <h4 className="font-medium tracking-[-1px] text-darkgray font-serif ">
              Cloud Computing Solutions:
              </h4>
            </Col>
            <Col lg={{ span: 6, offset: 1 }}>
              <p>
              Cloud computing solutions revolutionize businesses by offering scalable, on-demand access to computing resources such as servers, storage, and applications over the internet. These solutions eliminate the need for costly on-premises infrastructure, enabling organizations to flexibly scale resources based on demand while reducing operational overhead. With enhanced flexibility, agility, and cost-effectiveness, cloud computing empowers businesses to innovate rapidly, enhance collaboration, and deliver superior services to customers, driving growth and competitiveness in today's digital economy.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="px-[10rem] md:px-0 py-[70px] lg:py-[60px] md:py-[50px] sm:py-[40px]">
        <Container fluid>
          <Row>
            <Col className="sm:px-[5px] xs:px-0">
              <ImageGallery
                animation={fadeIn}
                theme="image-gallery-02"
                data={imageGalleryData02}
                overlay={["#36c1e1", "#28ccc0", "#74cf8e", "#bac962", "#feb95b"]}
                grid="grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-large"
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section>
        <Container fluid className="px-0">
          <Row className="gx-0">
            <Col md={7} className="p-0">
              <img height="687px" width="1120px"
                src="https://img.freepik.com/free-photo/computer-algorithm-computer-code-concept_60438-3637.jpg?t=st=1715364642~exp=1715368242~hmac=6447fc5f025481ac1d5c6caf7657ec670d292774758f4f76e8a64fb288c81de5&w=826"
                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 w-full hover:rounded-lg"
                alt=""
              />
            </Col>
            <Col md={5} className="p-0">
              <img height="" width=""
                src="https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252448.jpg?t=st=1715365064~exp=1715368664~hmac=9da2e4bb99d1c0f080e37b89a148c88cb1f3a4ab64d8f3c2fe8e73d5ea63ed63&w=826"
                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:rounded-lg w-full h-[327px]"
                alt=""
              />
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
                to="/portfolio/single-project-page-04"
                className="portfolio_btn h-full px-28 py-16 justify-between items-center flex xl:p-12 md:inline-flex"
              >
                <div
                  className="portfolio_img absolute top-0 left-0 h-full w-full -z-[1] duration-150	bg-no-repeat bg-cover overflow-hidden bg-center"
                  style={{
                    backgroundImage:
                      "url(https://img.freepik.com/free-photo/businessman-using-laptop-computer-with-digital-padlock-internet-technology_587448-4892.jpg?t=st=1715365450~exp=1715369050~hmac=4f309d920f0dc7a1dcba7ef0b3918b848f9af4d1cc1665c2134217d534caef66&w=826)",
                  }}
                ></div>
                <div className="btn_icon font-medium text-darkgray font-serif mr-uto uppercase">
                  <i className="line-icon-Arrow-OutLeft duration-100	text-[40px] inline-block mr-[20px] align-middle	"></i>
                  <span className="text-sm inline-block md:hidden">Prev project</span>
                </div>
                <span className="portfolio_disc font-medium text-darkgray text-xlg font-serif block lg:text-[18px] lg:leading-[26px] md:text-left">
                  Security Audits
                </span>
              </Link>
            </Col>
            <Col className="relative md:flex md:justify-end xs:block">
              <Link
                to="/portfolio/single-project-page-01"
                className="portfolio_btn h-full px-28 py-16 justify-between items-center flex xl:p-12 md:inline-flex"
              >
                <span className="portfolio_disc font-medium text-darkgray text-xlg font-serif block lg:text-[18px] lg:leading-[26px] md:text-right">
                  Blockchain Technology
                </span>
                <div
                  className="portfolio_img absolute top-0 left-0 h-full w-full -z-[1] duration-150	bg-no-repeat bg-cover overflow-hidden bg-center"
                  style={{
                    backgroundImage:
                      "url(https://img.freepik.com/free-vector/nft-non-fungible-tokens-crypto-art-blue-abstract-background_1419-2248.jpg?t=st=1715365630~exp=1715369230~hmac=ab4d1716699ac2ca573b7f2bb5cc57259b09bfd8018798b6780d3988a639d01e&w=826)",
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
    </div>
  );
};

export default SingleProjectPage05;

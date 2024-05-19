import React from "react";
// Libraries
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import { m } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper";

// Components
import Header, { HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar, } from "../../Components/Header/Header";
import Blockquote from '../../Components/Blockquote/Blockquote'
import Buttons from '../../Components/Button/Buttons'
import { fadeIn, fadeInLeft, zoomIn } from "../../Functions/GlobalAnimations";
import SocialIcons from "../../Components/SocialIcon/SocialIcons";
import FooterStyle01 from "../../Components/Footers/FooterStyle01";
import Overlap from "../../Components/Overlap/Overlap";
import SideButtons from "../../Components/SideButtons";

// Data
const SwiperImgData = [
  {
    img: "https://img.freepik.com/free-photo/glowing-finger-controls-modern-nightlife-technology-table-generated-by-ai_188544-27026.jpg?t=st=1715843362~exp=1715846962~hmac=44266dbacf163f738733854539cf5d66923f1cf500ee000e4a05280eac18befb&w=826",
  },
  {
    img: "https://img.freepik.com/free-photo/woman-with-vr-glasses-futuristic-city_23-2150904661.jpg?t=st=1714304591~exp=1714308191~hmac=90de8d92904f8536f7cbce7814e604bb5a0fb5ad51e928c49ed71b6f4c7b8d65&w=900",
  },
  {
    img: "https://img.freepik.com/free-photo/business-person-futuristic-business-environment_23-2150970181.jpg?t=st=1714304758~exp=1714308358~hmac=eaa13a7a013888e2313e3f4b440eb82e3b757ad6b4cfc94e69fcfee9a9b8941c&w=900",
  },
  {
    img: "https://img.freepik.com/free-photo/mobile-phone-glowing-blue-reflection-glass-generated-by-ai_188544-16845.jpg?t=st=1714304856~exp=1714308456~hmac=5c9ddffcf0a1a3ade26bbcde7ce27b36ab44bcb549a9c8047dff178d5ed33c6f&w=826",
  },
];

const SocialIconsData = [
  {
    color: "#3b5998",
    link: "https://www.facebook.com/",
    icon: "fab fa-facebook-f",
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
  {
    color: "#fe1f49",
    link: "https://www.instagram.com/",
    icon: "fab fa-instagram",
  },
];

const SingleProjectPage01 = (props) => {
  return (
    <div style={props.style}>
      {/* Header Start */}
      <Header topSpace={{ desktop: false, lg: false, md: true, sm: false, xs: false }} type="reverse-scroll">
        <HeaderNav fluid="fluid" theme="dark" className="px-[35px] py-[0px] md:px-0" containerClass="sm:px-0">
          <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
            <Link aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
                <img className="default-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-white.webp' data-rjs='/assets/img/webp/logo-white@2x.webp' alt='logo' />
                <img className="alt-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-black.webp' data-rjs='/assets/img/webp/logo-black@2x.webp' alt='logo' />
                <img className="mobile-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-black.webp' data-rjs='/assets/img/webp/logo-black@2x.webp' alt='logo' />
              </Navbar.Brand>
            </Link>
          </Col>
            <div>
            <a href="/portfolio/single-project-page-05" className="text-white py-1 px-2 mx-1 text-sm font-semibold no-underline hover:underline hover:font-normal border-2 border-blue-700 rounded-s-full bg-blue-700 hover:bg-transparent " ><i className="line-icon-Arrow-OutLeft duration-100	text-[20px] inline-block  align-middle	"></i>Prev </a>
            
            </div>
            <div>
            <a href="/portfolio/single-project-page-02" className="text-white py-1 px-2 mx-1 text-sm font-semibold no-underline hover:underline hover:font-normal border-2 border-blue-700 rounded-e-full bg-blue-700 hover:bg-transparent " >Next<i className="line-icon-Arrow-OutRight duration-100	text-[20px] inline-block  align-middle	"></i></a>
            
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
            <SearchBar className="pr-0" />
            <HeaderLanguage />
            <HeaderCart />
          </Col>
        </HeaderNav>
      </Header>
      {/* Header End */}
      <SideButtons />
      {/* Parallax Scrolling Start */}
      <div className="h-[800px] md:h-[650px] sm:h-[350px] flex items-center overflow-hidden relative">
        <Parallax className="lg-no-parallax bg-cover cover-background absolute top-[0px] left-0 md:-top-[30px] w-full h-[100vh] md:h-[700px] sm:h-[400px] sm:-top-[60px]" translateY={[-40, 40]} style={{ backgroundImage: `url(https://img.freepik.com/free-photo/futuristic-hi-tech-neon-background-generative-ai_91128-2293.jpg?t=st=1715840501~exp=1715844101~hmac=7ddfe71754470ca30a9a94eae7b7f5b7948ad526a5395a88b0b9ed7ff3b53873&w=826)` }}></Parallax>
        <div className="absolute top-0 left-0 w-full h-full "></div>
        <Container fluid className="relative xs:px-0">
          <Row className="h-full justify-center">
            <Col md={6} className="relative text-center flex flex-column justify-center">
              <span className="uppercase text-lg font-serif tracking-[5px] text-white inline-block mb-[20px] font-medium sm:mb-[10px]">
                Unlock The Future
              </span>
              <h2 className="font-serif text-white font-semibold uppercase block mb-0">
                Blockchain
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Parallax Scrolling End */}

      {/* Section Start */}
      <section className="pb-[80px] lg:pb-[70px] md:pb-[60px] sm:py-[50px] " >
        <Container className="mb-[80px] lg:mb-[70px] md:mb-[60px] sm:mb-[50px]">
          <Row>
            <Overlap className="z-10">
              <img
                height="242px" width="242px"
                className="rounded-circle sm:w-[30%] xs:w-[40%] border-[4px] border-white rounded-full box-shadow-extra-large mx-auto animate-bounce" 
                src="https://img.freepik.com/free-vector/bitcoin-cryptocurrency-coin-neon-sign_1262-20714.jpg?t=st=1715840798~exp=1715844398~hmac=7ef7a25f7bd8a4e4ea868aad2b7ecdbaf973d21a5b3920d245172897ee1757ab&w=740"
                alt="bitcoin logo"
              />
            </Overlap>
          </Row>
        </Container>
        <Container>
          <Row className="justify-center">
            <Col className="col-12 col-lg-11 ">
              <m.div {...fadeIn} className="row">
                <Col lg={4} className="pr-[5%] lg:pr-[15px] md:mb-[50px] " >
                  <h5 className="font-serif text-darkgray font-medium mb-7 -tracking-[1px] ">
                    The project description
                  </h5>
                  <ul className="pl-0">
                    <li className="border-b border-mediumgray pb-[10px] mb-[10px]">
                      <span className="uppercase text-darkgray w-[35%] inline-block font-medium font-serif text-md">
                       published
                      </span>
                      01 January 2024
                    </li>
                    <li className="border-b border-mediumgray pb-[10px] mb-[10px]">
                      <span className="uppercase text-darkgray w-[35%] inline-block font-medium font-serif text-md">
                        Services
                      </span>
                      <p>
                      Web3 Applications,<br />
                      Decentralized Applications, <br />
                      Smart Contract Developement 
                      </p>
                    </li>
                    <li>
                      <span className="uppercase text-darkgray w-[35%] inline-block font-medium font-serif text-md">
                        Industry
                      </span>
                      <p>"Explore blockchain's transformative power across industries. Revolutionizing finance, supply chains, and more, it enhances efficiency and trust."</p>
                    </li>
                  </ul>
                </Col>
                <Col lg={{ span: 7, offset: 1 }} >
                  <span className="font-serif text-md uppercase font-medium mb-[20px] inline-block text-darkgray">BLOCKCHAIN TECHNOLOGY</span>
                  <p className="mb-[25px] text-justify xs:text-left xs:mb-[15px]">
                  At the core of our brand's identity lies the concept of timeless staples, echoing the principles of blockchain technology itself—immutable, transparent, and enduring. Just as blockchain revolutionizes industries by providing a decentralized, tamper-proof ledger, our timeless staples represent a commitment to craftsmanship, sustainability, and enduring style. 
                  </p>
                  <p className="mb-[25px] text-justify xs:text-left xs:mb-[15px]">
                  Each piece in our collection embodies the ethos of longevity and authenticity, crafted with meticulous attention to detail and a dedication to quality that ensures they remain relevant for years to come. Our brand's fusion of blockchain technology with timeless fashion signifies a commitment to innovation, transparency, and sustainability, offering customers not just clothing, but a symbol of lasting value and integrity in an ever-evolving world.
                  </p>
                  <Buttons ariaLabel="button" href="#" className="font-medium font-serif uppercase btn-link after:h-[2px] after:bg-darkgray hover:text-darkgray" color="#232323" title="Yourdomain.com" size="lg" />
                </Col>
              </m.div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}

      <section className="py-0 relative">
        <Swiper
          slidesPerView="auto"
          speed={1000}
          loop={true}
          modules={[Autoplay, Keyboard]}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          spaceBetween={10}
          centeredSlides={true}
          breakpoints={{
            576: {
              spaceBetween: 20
            },
            768: {
              spaceBetween: 30
            }
          }}
          className="SingleProjectPage05 relative black-move rounded-2">
          {SwiperImgData.map((item, i) => {
            return (
              <SwiperSlide className="w-[55%] sm:w-[65%]" key={i}>
                <img height="" width="" src={item.img} alt="" className="rounded-2" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      {/* Section End */}

      {/* Section Start */}
      <m.section className="py-[80px] lg:py-[70px] md:py-[60px] sm:py-[80px] xs:py-[50px] overflow-hidden" {...fadeIn}>
        <Container>
          <Row>
            <Col lg={11} xs={12}>
              <Row className="items-center">
                <m.div className="col-12 col-md-6 xs:mb-[30px]" {...fadeIn}>
                  <img height="" width="" src="https://pbs.twimg.com/profile_images/719157604728053760/F-R_3NZp_400x400.jpg" alt="" className="rounded-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" />
                </m.div>
                <m.div className="col-12 col-md-6 col-xl-5 offset-xl-1" {...fadeInLeft}>
                  <Blockquote
                    className="xs:my-0"
                    theme="blockquote-style-02"
                    title="The blockchain is the financial challenge of our time. It is going to change the way that our financial world operates."
                    author="Blythe Masters"
                  />
                </m.div>
              </Row>
            </Col>
          </Row>
        </Container>
      </m.section>
      {/* Section End */}

      {/* Section Start */}
      <section className="pt-0 py-[250px] px-36 xl:px-12 lg:py-[180px] sm:px-[15px] sm:py-[50px] xs:px-0">
        <Container fluid>
          <Row className="row-cols-1 row-cols-lg-4 row-cols-sm-2">
            <m.div {...fadeIn} className="col mt-32 md:mt-16 xs:mt-0 xs:mb-[15px]">
              <img  src="https://img.freepik.com/free-photo/door-leading-magical-world_23-2151038314.jpg?t=st=1715845404~exp=1715849004~hmac=70fe8a7c0263d827d1e13ade31fa267de7139503cec913e01ba85ae7d3134951&w=360" alt=""  className="w-[238px] h-[328px]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 rounded-2"/>
            </m.div>
            <m.div {...{ ...fadeIn, transition: { delay: 0.5 } }} className="col xs:mb-[15px]">
              <img  src="https://img.pikbest.com/origin/09/20/36/46SpIkbEsTIRE.jpeg!f305cw" alt="" className="w-[238px] h-[328px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 rounded-2"/>
            </m.div>
            <m.div {...{ ...fadeIn, transition: { delay: 0.6 } }} className="col mt-32 md:mt-16 xs:mt-0 xs:mb-[15px]">
              <img  src="https://img.freepik.com/free-photo/3d-rendering-neon-triangle_23-2151294040.jpg?t=st=1715846086~exp=1715849686~hmac=dff22d0f7be0a9b9b97f6f093ffafba9ccca0b1b6421dc33c6dad9d12638a336&w=360" alt=""  className="w-[238px] h-[328px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 rounded-2"/>
            </m.div>
            <m.div {...{ ...fadeIn, transition: { delay: 0.7 } }} className="col">
              <img  src="https://img.freepik.com/free-photo/ai-robot-hand-touching-human-hand_23-2151015279.jpg?t=st=1715846209~exp=1715849809~hmac=66f848247ef82927e75d411568d5338555c471df9c879bc6b95c060be308ea1a&w=360" alt=""  className="w-[238px] h-[328px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 rounded-2"/>
            </m.div>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="h-[600px] pt-0 pb-[325px]  lg:pb-[265px] md:pb-[185px] sm:pb-[70px] sm:!pt-[50px]" style={{ background: "url(https://img.freepik.com/free-photo/black-squares-pattern-background_1123-379.jpg?t=st=1715851093~exp=1715854693~hmac=8b9cd09df026ee059f1787f87a054e5725d00dfba738e0437b98861365edbbf8&w=740)" }}>
        <Container>
          <Row>
            <Overlap>
              <Col className="text-center relative">
                <m.div {...zoomIn} className="flex justify-center">
                  <img height="332px" width="632px" src="https://img.freepik.com/free-photo/cyberpunk-woman-warrior-urban-scenery_23-2150712332.jpg?t=st=1715850669~exp=1715854269~hmac=6458069a1d0d04d54a982f9d2ec3b344d8c0f3fa82b463d494ef8ddca66538b8&w=900" alt="" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 rounded-2 w-[632px] h-[332px] rounded-2 shadow-lg shadow-cyan-500/50"/>
                </m.div>
              </Col>
            </Overlap>
          </Row>
          <m.div {...fadeIn} className="row justify-center">
            <Col xl={8} lg={10} className="text-center mt-12 md:mt-0 md:mb-12 sm:mb-0">
              <span className="font-serif text-md uppercase font-medium mb-[20px] inline-block text-white">
              Blockchain: Crafting Timeless Excellence, Seamlessly.
              </span>
              <h4 className="font-serif font-medium text-white inline-block w-[90%]">
              "Elevate your style with blockchain-powered fashion that stands the test of time."
              </h4>
            </Col>
          </m.div>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <Overlap>
        <section className="overflow-visible py-[50px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
          <Container>
            <Row>
              <Col className="text-center">
                <m.div {...fadeIn} className="flex justify-center">
                  <img height="332" width="632" src="https://img.freepik.com/free-photo/regular-human-job-performed-by-anthropomorphic-futuristic-robot_23-2151043466.jpg?t=st=1715850534~exp=1715854134~hmac=f44312cfaf5ce5150384a27182e3512e7707f3d5cd7eb28e4b835dcba14ad0fc&w=900" alt="" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 rounded-2 w-[632px] h-[332px] rounded-2 shadow-lg shadow-cyan-500/50"/>
                </m.div>
              </Col>
            </Row>
          </Container>
        </section>
      </Overlap>
      {/* Section End */}

      {/* Section Start */}
      <section className="mx-12  px-5 py-20 overflow-hidden">
        <Container fluid>
          <Row className=" justify-between">
            <m.div {...{ ...fadeIn }} className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 rounded-2 shadow-lg shadow-indigo-500 w-[500px] rounded-3  col-12 col-lg-6 cover-background h-[400px] md:h-[550px] sm:h-[350px]" style={{ backgroundImage: "url(https://img.freepik.com/free-photo/yellow-silver-hexagon-with-letter-b-it_1340-36066.jpg?t=st=1715873835~exp=1715877435~hmac=4af5cbd949d5b0605e4ffb7abddb589ecb953e0bd9803a4a09fdfe9159ce6876&w=740)" }}></m.div>
            <m.div {...{ ...fadeIn, transition: { delay: 0.5 } }} className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 rounded-2 shadow-lg shadow-indigo-500 w-[500px] rounded-3 space-x-2 col-12 col-lg-6 cover-background h-[400px] md:h-[550px] sm:h-[350px]" style={{ backgroundImage: "url(https://img.freepik.com/free-photo/gold-coin-with-letter-b-it_1340-34158.jpg?t=st=1715873924~exp=1715877524~hmac=f8aafd6579f4e6aa125f5f660912ee1e9b8fad036b538a7a30d14ef9a124b916&w=740)", }}></m.div>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[80px] overflow-hidden lg:py-[70px] md:py-[60px] sm:py-[50px]">
        <Container>
          <Row className="items-center xs:justify-center">
            <Col md={4} sm={4} className="text-right font-serif text-darkgray uppercase text-md font-medium sm:text-end xs:text-center xs:mb-[10px]">
              Share this project
            </Col>
            <Col md={4} sm={2}>
              <div className="w-full h-[1px] bg-mediumgray xs:my-[15px]"></div>
            </Col>
            <Col md={4} sm={6}>
              <SocialIcons
                theme="social-icon-style-01"
                className="text-darkgray xs:justify-center"
                size="sm"
                iconColor="dark"
                data={SocialIconsData}
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
                to="/portfolio/single-project-page-05"
                className="portfolio_btn h-full px-28 py-16 justify-between items-center flex xl:p-12 md:inline-flex"
              >
                <div
                  className="portfolio_img absolute top-0 left-0 h-full w-full -z-[1] duration-150	bg-no-repeat bg-cover overflow-hidden bg-center"
                  style={{
                    backgroundImage:
                      "url(https://img.freepik.com/free-photo/computer-network-computer-security_587448-4875.jpg?t=st=1714370993~exp=1714374593~hmac=41b28a62b50b8db03b237e4ea58fc306f52a9c620059520c6cf407c275ba9972&w=826)",
                  }}
                ></div>
                <div className="btn_icon font-medium text-darkgray font-serif mr-uto uppercase">
                  <i className="line-icon-Arrow-OutLeft duration-100	text-[40px] inline-block mr-[20px] align-middle	"></i>
                  <span className="text-sm inline-block md:hidden">Prev project</span>
                </div>
                <span className="portfolio_disc font-medium text-darkgray text-xlg font-serif block lg:text-[18px] lg:leading-[26px] md:text-left">
                  Tech Consulting
                </span>
              </Link>
            </Col>
            <Col className="relative md:flex md:justify-end xs:block">
              <Link
                to="/portfolio/single-project-page-02"
                className="portfolio_btn h-full px-28 py-16 justify-between items-center flex xl:p-12 md:inline-flex"
              >
                <span className="portfolio_disc font-medium text-darkgray text-xlg font-serif block lg:text-[18px] lg:leading-[26px] md:text-right">
                  Web Applications
                </span>
                <div
                  className="portfolio_img absolute top-0 left-0 h-full w-full -z-[1] duration-150	bg-no-repeat bg-cover overflow-hidden bg-center"
                  style={{
                    backgroundImage:
                      "url(https://img.freepik.com/free-photo/businessman-using-laptop-computer-with-digital-padlock-internet-technology_587448-4892.jpg?t=st=1714371187~exp=1714374787~hmac=cf178d7ab7438b97af4f62d39dfff4586c22e37d3dc54e0d340ab3b353935cb9&w=826)",
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

export default SingleProjectPage01;

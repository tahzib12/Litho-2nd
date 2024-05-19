import React from 'react'

// Libraries
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { m } from 'framer-motion';
import { Autoplay, EffectFade, Keyboard } from "swiper";

// Components
import Header, { HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from '../../Components/Header/Header'
import Buttons from '../../Components/Button/Buttons'
import ImageGallery from '../../Components/ImageGallery/ImageGallery'
import Clients from '../../Components/Clients/Clients'
import CustomModal from '../../Components/CustomModal'
import { fadeIn, zoomIn } from '../../Functions/GlobalAnimations';
import FooterStyle01 from '../../Components/Footers/FooterStyle01';
import Overlap from '../../Components/Overlap/Overlap';
import SideButtons from "../../Components/SideButtons";
import video from "../../Assets/img/cybersecwomen.mp4";


// Data

const ImagesGalleryData = [
    {
        src: "https://img.freepik.com/free-photo/man-using-interface-as-information-coronavirus-pandemic-spread_155003-3879.jpg?t=st=1715864936~exp=1715868536~hmac=4d477f0c7f7ad2619cfa23252be51e09749d1fa89fd3b94ced14044cac629b5d&w=826",//1200*630
        title: "Lightbox gallery image title",
        double_col: true
    },
    {
        src: "https://img.freepik.com/free-vector/neon-fingerprint-background_23-2148364032.jpg?t=st=1715864725~exp=1715868325~hmac=4bb08127d837824928659ba2a31565edac9a60ae32c3871907793cb6fd9b1598&w=740", //600*600
        title: "Lightbox gallery image title",
    },
    {
        src: "https://img.freepik.com/free-vector/abstract-secure-technology-background_23-2148344071.jpg?t=st=1715864867~exp=1715868467~hmac=d106d2b0b2b325e6a8b7e7e34cda000895368502a42c74e6a2bd4b401c0dc8ac&w=740",//600*600
        title: "Lightbox gallery image title",
    },
    {
        src: "https://img.freepik.com/free-photo/doctor-from-future-concept_23-2151111251.jpg?t=st=1715868543~exp=1715872143~hmac=b937d685d6c5e83137ea1d458410e92397447ba7b06206d3c2abd7eb7ce61c3a&w=740",
        title: "Lightbox gallery image title",
    },
    {
        src: "https://img.freepik.com/free-photo/doctor-from-future-concept_23-2151111235.jpg?t=st=1715868669~exp=1715872269~hmac=6491043bfc50875cc77102512f8f0f9d870faaa3119e56d03e67a7323894a756&w=740",
        title: "Lightbox gallery image title",
    },
    {
        src: "https://img.freepik.com/free-photo/doctor-from-future-concept_23-2151111233.jpg?t=st=1715868597~exp=1715872197~hmac=0065c7f9a6196e64905e359b1e1acb639176d718272016e3450ea4556045b95e&w=740",
        title: "Lightbox gallery image title",
    },
]

const ClientData = [
    {
        img: "https://img.freepik.com/free-vector/digital-money-transfer-technology-background_1017-17454.jpg?t=st=1715335484~exp=1715339084~hmac=abaaec175005ec9c103748fd79feb9a6966e3db4e56e167fde848ba9bd0ee3d3&w=740",
        link: "#"
    },
    {
        img: "https://img.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148421160.jpg?t=st=1715335582~exp=1715339182~hmac=b08459cd87b7654e7eac5ea0f08f76e955a82f5c4ce3632a8dcd4dedeaa5f09f&w=740",
        link: "#"
    },
    {
        img: "https://img.freepik.com/free-vector/cyber-security-concept_23-2148535774.jpg?t=st=1715336093~exp=1715339693~hmac=ab63967c96cb7c41806086a53f5d4d353e66f977d27dd7dd6d9ab6e78c3b9780&w=740",
        link: "#"
    }
]

const SwiperImgData = [
    {
        img: "https://img.freepik.com/free-photo/high-tech-view-futuristic-earth_23-2151100343.jpg?t=st=1715866068~exp=1715869668~hmac=ae2a9b01d0325089e18c2faf88b25ed05da64911ee6e556a003e34b76122f96a&w=740"
    },
    {
        img: "https://img.freepik.com/free-vector/gradient-6g-background_23-2150496067.jpg?t=st=1715865793~exp=1715869393~hmac=b9bfadfb02efd0756486ddc19140baa46315330d623dcb242588dda6405aa9fd&w=740"
    },
    {
        img: "https://img.freepik.com/free-photo/high-tech-view-futuristic-earth_23-2151100324.jpg?t=st=1715336780~exp=1715340380~hmac=e5fb50ebb048f16ac4939290b002c51f970f8e0ae34fba677291e809d44cd17f&w=740"
    }
]

const SingleProjectPage04 = (props) => {
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
                      <a href="/portfolio/single-project-page-03" className="prevp text-blue-50 py-1 px-2 mx-1 text-sm font-semibold no-underline hover:underline hover:font-normal border-2 border-blue-700 rounded-s-full bg-blue-700 hover:bg-transparent hover:text-blue-600 !important" ><i className="line-icon-Arrow-OutLeft duration-100	text-[20px] inline-block  align-middle	"></i>Prev </a>
            
                    </div>
                    <div>
                     <a href="/portfolio/single-project-page-05" className="nextp text-blue-50 py-1 px-2 mx-1 text-sm font-semibold no-underline hover:underline hover:font-normal border-2 border-blue-700 rounded-e-full bg-blue-700 hover:bg-transparent hover:text-blue-600 " >Next<i className="line-icon-Arrow-OutRight duration-100	text-[20px] inline-block  align-middle	"></i></a>
            
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
                        <HeaderCart style={{ "--base-color": "#0038e3" }} />
                    </Col>
                </HeaderNav>
            </Header>
            {/* Header End */}
            <SideButtons />
            {/* Section Start */}
            <section className=" py-[80px] h-[700px] sm:h-[400px] cover-background lg:py-[70px] md:py-[60px] sm:py-[50px]" style={{ backgroundImage: "url(https://5.imimg.com/data5/GY/QA/DJ/GLADMIN-5497852/selection-404-500x500.png)" }}>

            </section>
            {/* Section End */}

            {/* Section Start */}
            <section className="py-[80px] overflow-hidden px-[16%] xl:px-[10%] lg:py-[70px] lg:px-[6%] md:py-[60px] sm:py-[50px] xs:px-[0]">
                <Container fluid>
                    <m.div {...fadeIn} className="row text-left xs:text-center">
                        <Col lg={2} sm={4} className="font-serif xs:mb-[15px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                            <span className=" text-sm uppercase block">Year</span>
                            <span className="font-medium text-darkgray">January 2024</span>
                        </Col>
                        <Col lg={2} sm={4} className="font-serif xs:mb-[15px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                            <span className="text-sm uppercase block">Our role</span>
                            <span className="font-medium text-darkgray">Security Audits</span>
                        </Col>
                        <Col lg={2} sm={4} className="font-serif transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                            <span className="text-sm uppercase block">Industry</span>
                            <span className="font-medium text-darkgray">Information Technology (IT)</span>
                        </Col>
                        <Col xl={{ span: 5, offset: 1 }} lg={6} className="md:mt-[30px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                            <p> Assessing the security of networks, infrastructure, and software applications to prevent data breaches and unauthorized access.</p>
                        </Col>
                    </m.div>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <section className="py-0 mx-12 justify-between">
                <Container fluid className="px-0 ">
                    <Row className="row-cols-1 row-cols-md-3 text-center g-0">
                        <m.div {...fadeIn} className="col sm:mb-[30px]"><img height="" width="" src="https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252478.jpg?t=st=1715321864~exp=1715325464~hmac=682f6b3ecd4c759f4af70668ff317290f0fa6655acc40b8f183ad2576cbd36fb&w=360" className="w-[370px] h-[485px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500 w-[500px] rounded-4" alt="640*685" /></m.div>
                        <m.div {...{ ...fadeIn, transition: { delay: 0.5 } }} className="col sm:mb-[30px]"><img height="" width="" src="https://img.freepik.com/free-photo/cyber-attack-concept-young-man-hoodie-sitting-computer-looking-monitor_1142-58930.jpg?t=st=1715322241~exp=1715325841~hmac=466ffc733a69e834a53c0d70d67e23d32b704db160fd2ba7a1977cfe3e8b9c7a&w=360" className="w-[370px] h-[485px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500 w-[500px] rounded-4" alt="" /></m.div>
                        <m.div {...{ ...fadeIn, transition: { delay: 0.6 } }} className="col"><img height="" width="" src="https://img.freepik.com/free-photo/3d-character-emerging-from-smartphone_23-2151336536.jpg?t=st=1715322345~exp=1715325945~hmac=11c7a9c4a6b42d87898fe049e3d934a9e4be6ebbeec5568a429a457a11a69849&w=360" className="w-[370px] h-[485px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500 w-[500px] rounded-4" alt="" /></m.div>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <section className="pt-[50px] pb-[80px] overflow-hidden lg:pt-[40px] lg:pb-[70px] md:pt-[35px] md:pb-[60px] sm:py-[50px]">
                <Container>
                    <Row>
                        <Col lg={6} sm={12} className="text-start md:mb-[20px] sm:text-center">
                            <div className="flex font-serif mb-[15px]">
                                <span className="align-self-center w-[30px] h-[1px] bg-[#fd961e] mr-[10px] md:inline-block sm:hidden"></span>
                                <div className="flex-grow-1 text-[#fd961e] font-medium sm:text-center">Security Audits</div>
                            </div>
                            <h6 className="font-serif font-medium text-darkgray mb-0 w-[90%] md:w-full sm:text-center xs:w-full">"Fortifying Defenses: The Role of Security Audits in Safeguarding Data and Systems"</h6>
                        </Col>
                        <Col lg={6} className="text-start pt-[50px]">
                            <p className="w-[95%] lg:w-full sm:text-center">"Fortifying Defenses: Security audits play a pivotal role in identifying vulnerabilities, ensuring compliance, and safeguarding data and systems against cyber threats. By conducting thorough assessments, organizations can strengthen their cybersecurity posture and maintain trust with stakeholders."</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start*/}
            <section className="bg-lightgray pb-[80px] lg:pb-[70px] md:pb-[60px] sm:py-[50px]">
                <Container>
                    <Row>
                        <m.div value={22} className="px-0 ">
                            <ImageGallery
                                grid="grid grid-2col xl-grid-2col lg-grid-2col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large text-center"
                                theme="image-gallery-02"
                                data={ImagesGalleryData.slice(0, 3)}
                                overlay="#232323"

                            />
                        </m.div>
                    </Row>
                </Container>
            </section>
            {/* Section Start*/}

            {/* Section Start */}
            <section className="py-[60px] overflow-hidden lg:py-[50px] md:py-[40px] sm:py-[40px]">
                <Container>
                    <Row className="items-center justify-center">
                        <Col lg={4} sm={7} className="md:mb-16">
                            <h6 className="font-serif font-medium text-darkgray mb-0 text-center text-lg-start">Finance and Banking,</h6>
                            <h6 className="font-serif font-medium text-darkgray mb-0 text-center text-lg-start">E-commerce,</h6>
                            <h6 className="font-serif font-medium text-darkgray mb-0 text-center text-lg-start">Government and Public Sector</h6>
                        </Col>
                        <Col xl={{ span: 6, offset: 1 }} lg={8}>
                            <Clients grid="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 justify-center items-center flex" theme="client-logo-style-02" data={ClientData} />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <section className="bg-[#fafafa] overflow-hidden md:pb-[75px] sm:pb-[50px]">
                <Container fluid>
                    <Row className="justify-center text-center items-center">
                        <Col lg={8} sm={11} className="px-0 md:mb-24 xs:!px-[15px]">
                            <Swiper
                                modules={[Autoplay, EffectFade, Keyboard]}
                                effect="fade"
                                loop={true}
                                keyboard={{ enabled: true, onlyInViewport: true }}
                                autoplay={{ delay: 1000, disableOnInteraction: false }}
                                slidesPerView={1}>
                                {
                                    SwiperImgData.map((item, i) => {
                                        return (
                                            <SwiperSlide key={i} className="h-full">
                                                <img height="" width="" className="w-full" alt='' src={item.img} />
                                            </SwiperSlide>)
                                    })
                                }
                            </Swiper>
                        </Col>
                        <Col lg={4} md={7} sm={10} className="p-24 xl:p-12 lg:p-8 md:py-0 text-center text-lg-start">
                            <img height="" width="" src="https://img.freepik.com/free-vector/gradient-6g-technology-illustration_23-2150545718.jpg?t=st=1715336337~exp=1715339937~hmac=a2b802bb57d0d40ae662f567f6f317bee671ab38650571225d9b9b07fdf2ba7e&w=740" alt="" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500  rounded-4 inline-block w-[25%] sm:w-[20%] mb-[50px] lg:mb-[15px]" />
                            <h3 className="font-serif text-darkgray font-semibold w-[90%] xl:w-full">Telecommunications:</h3>
                            <span className="font-serif block w-[85%] xl:w-full"> Ensuring the security and reliability of communication networks, preventing service disruptions, and safeguarding customer data.</span>
                        </Col>
                    </Row>
                </Container>

            </section>
            {/* Section End */}

            {/* Section Start */}
            <section className="py-[80px] overflow-hidden lg:py-[70px] md:py-[60px] sm:py-[50px]">
                <Container fluid>
                    <Row className="items-center justify-center">
                        <Col lg={{ span: 4, order: 0 }} xs={{ order: 2 }} sm={5} className="px-[9%] lg:text-start md:text-center xl:px-[3%] md:px-[15px] xs:mb-[30px]">
                          { /* <i className="line-icon-Martini-Glass icon-large text-[#fd961e] block text-[50px] mb-[35px] sm:mb-[20px]"></i>*/}
                            <h6 className="font-serif text-darkgray font-semibold -tracking-[.5px] mb-[20px] xs:mb-[10px]">Manufacturing:</h6>
                            <p>Protecting intellectual property, trade secrets, and operational technology (OT) systems from cyber threats and industrial espionage.</p>
                        </Col>
                        <m.div {...{ ...zoomIn, transition: { duration: 0.5 } }} className="col-12 col-lg-4 col-md-8 col-sm-9 order-1 order-lg-0 px-lg-0 md:mb-20">
                            <img height="" width="" className="mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500  rounded-4 " src="https://img.freepik.com/free-vector/security-shield-vector-cyber-security-technology_53876-112196.jpg?t=st=1715866299~exp=1715869899~hmac=49fa431648ab9ff7d14a804c6cabf8bc3f5ff660e88a167a3d04ff74e3edb417&w=740" alt="" />
                        </m.div>
                        <Col lg={{ span: 4, order: 2 }} xs={{ order: 2 }} sm={5} className="px-[9%] lg:text-start md:text-center xl:px-[3%] md:px-[15px]">
                        { /* <i className="line-icon-Glass-Water icon-large text-[#fd961e] text-[50px] mb-[35px] block sm:mb-[20px]"></i>*/}
                            <h6 className="font-serif text-darkgray font-semibold -tracking-[.5px] mb-[20px] xs:mb-[10px]"> Transportation and Logistics:</h6>
                            <p>Securing supply chain operations, transportation systems, and vehicle technologies from cyber threats and disruptions.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <section className="relative bg-cover bg-center" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/business-corporate-protection-safety-security-concept_53876-64964.jpg?t=st=1715338400~exp=1715342000~hmac=c13bf63a2953acf6342b2cdf25aa3c4215fdfd77f3e85e7d1181a55cccecb3ae&w=740")` }} >
                <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[#fd961e]"></div>
                <Container className="relative">
                    <Row className="justify-center h-[700px] text-center md:h-[550px] sm:h-[350px]">
                        <Col xl={7} lg={8} md={10} className="justify-center items-center flex">
                            <div className="font-serif text-white">
                                {/* Modal Component Start */}
                                <CustomModal.Wrapper
                                    modalBtn={
                                        <Buttons
                                            type="submit"
                                            className="btn-sonar border-0 mx-auto"
                                            themeColor="#fff"
                                            color="#232323"
                                            size="lg"
                                            title={<i className="icon-control-play" />} />
                                    } >
                                    <div className="w-[1020px] max-w-full relative rounded mx-auto">
                                        <div className="fit-video">
                                           {/*} <iframe width="100%" height="100%" className="shadow-[0_0_8px_rgba(0,0,0,0.06)]" controls src="https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>*/}
                                           <video controls>
                                             <source src={video} type="video/mp4" /> 
                                                 Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>
                                </CustomModal.Wrapper>
                                {/* Modal Component End */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <section className="relative py-[80px] overflow-hidden lg:py-[70px] md:py-[60px] sm:py-[50px]">
                <div className="font-serif text-[230px] leading-[230px] text-center text-[#0f0c0c] top-1/2 -translate-y-1/2 font-thin uppercase absolute w-full lg:text-[170px] lg:leading-[170px] md:text-[130px] md:leading-[130px] sm:text-[100px] sm:leading-[100px] xs:text-[55px] xs:leading-[55px]">Cyber Security</div>
                <Container>
                    <m.div {...fadeIn} className="row justify-center">
                        <Col xs={10} md={6} className="col-10 col-md-6 relative text-center">
                            <img height="" width="" src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041868.jpg?t=st=1715341559~exp=1715345159~hmac=0c5f510bb2a2ff457fbd2a94eaf44e4062c4a94b124ba33c5e193bdb2718cfef&w=740" alt="570*200"  className=' transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500 rounded-4 '/>
                        </Col>
                    </m.div>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <section className="py-[80px] cover-background lg:py-[70px] md:py-[60px] sm:py-[50px]" style={{ backgroundImage: "url(https://img.freepik.com/free-photo/3d-rendering-abstract-black-white-background_23-2150913921.jpg?t=st=1715867450~exp=1715871050~hmac=f41f4a77d139b36bba2cfb6ec308aade0ef92c1def1949f685b7f8ae0b8d2a6b&w=826)" }}>
                <Container>
                    <Row className="row-cols-1 row-cols-md-4 row-cols-sm-2">
                        <m.div {...fadeIn} className="col relative text-center sm:mb-[30px]">
                            <img height="" width="" className="inline-block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500  rounded-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500  rounded-4" src="https://img.freepik.com/free-photo/innovative-futuristic-classroom-students_23-2150906258.jpg?t=st=1715866706~exp=1715870306~hmac=b8b4b95d644573a20a8058f7173f0d9c2c186eaed793fac06e73da5a113ad943&w=740 " alt="220*225" />
                            <span className="font-serif text-black font-bold uppercase  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Information technology</span>
                        </m.div>
                        <m.div {...{ ...fadeIn, transition: { delay: 0.6 } }} className="col relative text-center sm:mb-[30px]">
                            <img height="" width="" className="inline-block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500  rounded-4" src="https://img.freepik.com/free-photo/3d-rendering-dark-earth-space_23-2151051285.jpg?t=st=1715867031~exp=1715870631~hmac=94251b660c502c68a42b2d71b5f0dafab1f9e8163ab0dea68ee4b8197b69722f&w=740 " alt="220*225px" />
                            <span className="font-serif text-black font-bold  uppercase  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Telecommunications</span>
                        </m.div>
                        <m.div {...{ ...fadeIn, transition: { delay: 0.8 } }} className="col relative text-center xs:mb-[30px]">
                            <img height="" width="" className="inline-block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500  rounded-4" src="https://img.freepik.com/free-photo/view-professional-business-people-working-together_23-2150917084.jpg?t=st=1715867151~exp=1715870751~hmac=d2349478c73a71ffa93ccb7e41c9e5bfb97f59a04dc5a278efa6cb9c1926f55c&w=740 " alt="" />
                            <span className="font-serif text-black uppercase font-bold  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Government and Public Sector</span>
                        </m.div>
                        <m.div {...{ ...fadeIn, transition: { delay: 0.9 } }} className="col relative text-center">
                            <img height="" width="" className="inline-block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500  rounded-4" src="https://img.freepik.com/free-photo/man-with-stethoscope-his-shirt-is-standing-front-brown-door_1340-36728.jpg?t=st=1715867208~exp=1715870808~hmac=0bad4e2086e7d9bbdf9fefef0a6c1850459ad98b1c9246d9585c6faa64db045c&w=740 "  alt="" />
                            <span className="font-serif text-black font-bold uppercase font-bo top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">HealthCare</span>
                        </m.div>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <section className=" py-[60px] overflow-hidden lg:py-[50px] md:py-[40px] sm:py-[40px]">
                <Container>
                    <Row className="justify-center">
                        <Col xl={5} lg={6} sm={8} className="text-center mb-4 lg:mb-3">
                            <span className="font-serif text-[#fd961e] font-medium block mb-[10px] sm:mb-[5px]">Cyber Security</span>
                            <h5 className="font-serif text-darkgray font-medium">"Securing Tomorrow: The Vital Role of Security Audits"</h5>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="px-[9%] lg:px-[3%] sm:px-0">
                    <Row className="gx-0 !-mx-[15px] sm:!mx-0">
                        <ImageGallery grid="grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large text-center" theme="image-gallery-01 flex" data={ImagesGalleryData.slice(3, 6)} overlay="#fd961e" animation={fadeIn} />
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
                                to="/portfolio/single-project-page-03"
                                className="portfolio_btn h-full px-28 py-16 justify-between items-center flex xl:p-12 md:inline-flex"
                            >
                                <div
                                    className="portfolio_img absolute top-0 left-0 h-full w-full -z-[1] duration-150	bg-no-repeat bg-cover overflow-hidden bg-center"
                                    style={{
                                        backgroundImage:
                                            "url(https://img.freepik.com/free-photo/saas-concept-collage_23-2149399288.jpg?t=st=1715344703~exp=1715348303~hmac=8a32c299b0c6fc95c3e3bf6e4e208d59b6bf08b4031e3e3679f2aead6854d89e&w=826)",
                                    }}
                                ></div>
                                <div className="btn_icon font-medium text-darkgray font-serif mr-uto uppercase">
                                    <i className="line-icon-Arrow-OutLeft duration-100	text-[40px] inline-block mr-[20px] align-middle	"></i>
                                    <span className="text-sm inline-block md:hidden">Prev project</span>
                                </div>
                                <span className="portfolio_disc font-medium text-darkgray text-xlg font-serif block lg:text-[18px] lg:leading-[26px] md:text-left">
                                    Cross Platform Apps
                                </span>
                            </Link>
                        </Col>
                        <Col className="relative md:flex md:justify-end xs:block">
                            <Link
                                to="/portfolio/single-project-page-05"
                                className="portfolio_btn h-full px-28 py-16 justify-between items-center flex xl:p-12 md:inline-flex"
                            >
                                <span className="portfolio_disc font-medium text-darkgray text-xlg font-serif block lg:text-[18px] lg:leading-[26px] md:text-right">
                                    Tech Consulting
                                </span>
                                <div
                                    className="portfolio_img absolute top-0 left-0 h-full w-full -z-[1] duration-150	bg-no-repeat bg-cover overflow-hidden bg-center"
                                    style={{
                                        backgroundImage:
                                            "url(https://img.freepik.com/free-photo/asia-businessmen-businesswomen-meeting-brainstorming-ideas-conducting-business-presentation-project-colleagues-working-together-plan-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2387.jpg?t=st=1715344564~exp=1715348164~hmac=cfc7bbf944775db97c6790e38e8e26cd4c9aa9dfac14f7d4435145135128f1fc&w=826)",
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
    )
}

export default SingleProjectPage04

import React from 'react'

// Libraries
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { m } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

// Components
import { Header, HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from "../../Components/Header/Header";
import Buttons from '../../Components/Button/Buttons'
import Overlap from '../../Components/Overlap/Overlap';
import CustomModal from '../../Components/CustomModal'
import FooterStyle01 from "../../Components/Footers/FooterStyle01";
import SideButtons from "../../Components/SideButtons";
import { fadeIn } from '../../Functions/GlobalAnimations';
import videoCoding from "../../Assets/img/cybersecwomen.mp4";
import videoCod from "../../Assets/img/cybersecman.mp4";

const SingleProjectPage03 = (props) => {

    return (
        <div style={props.style}>
            {/* Header Start */}
            <Header topSpace={{ md: true }} type="reverse-scroll">
                <HeaderNav theme="dark" expand="lg" className="px-[35px] py-[0px] lg:px-[15px] md:px-0" containerClass="sm:px-0">
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
            <a href="/portfolio/single-project-page-02" className="text-white py-1 px-2 mx-1 text-sm font-semibold no-underline hover:underline hover:font-normal border-2 border-blue-700 rounded-s-full bg-blue-700 hover:bg-transparent " ><i className="line-icon-Arrow-OutLeft duration-100	text-[20px] inline-block  align-middle	"></i>Prev </a>
            
            </div>
            <div>
            <a href="/portfolio/single-project-page-04" className="text-white py-1 px-2 mx-1 text-sm font-semibold no-underline hover:underline hover:font-normal border-2 border-blue-700 rounded-e-full bg-blue-700 hover:bg-transparent " >Next<i className="line-icon-Arrow-OutRight duration-100	text-[20px] inline-block  align-middle	"></i></a>
            
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
                        <SearchBar className="pr-0 xs:pl-[15px]" />
                        <HeaderLanguage className="xs:pl-[15px]" />
                        <HeaderCart className="xs:pl-[15px]" style={{ "--base-color": "#0038e3" }} />
                    </Col>
                </HeaderNav>
            </Header>
            {/* Header End */}
            <SideButtons />
            {/* Section Start  1920*915px*/}
            <section className="p-0 h-[900px] lg:h-[750px] sm:h-[450px] xs:h-[350px] bg-cover flex items-end overflow-hidden relative bg-center" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2024/01/31/10/45/ai-generated-8543843_1280.jpg')" }}> 
                <Container>
                    <Row className="justify-center">
                        <Col lg={12} className="text-center">
                            <img height="" width="" src="https://img.freepik.com/free-photo/realistic-phone-studio-social-media-concept_23-2151459527.jpg?t=st=1715414892~exp=1715418492~hmac=73816c853e93826378c3a77289284bf23734c54fda707140d54efc6b6e8dc61e&w=826" alt="318*500px" className="w-[500px] h-[318px] rounded-3xl inline-block transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" />
                            <h5 className="font-serif text-white mt-10 mb-36 font-bold uppercase block xs:mt-12 xs:mb-20">Cross Platform Apps</h5>
                            <span className="w-[200px] h-[2px] inline-block align-middle bg-[#ff6437] xs:w-[60px] rotate-90"></span>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <section className="overflow-hidden py-[90px] lg:py-[80px] md:py-[70px] sm:py-[50px]">
                <Container>
                    <Row className="justify-center">
                        <Col xl={10}>
                            <m.div {...fadeIn} className="row items-center">
                                <Col lg={5} md={4} className="text-center md:text-start sm:mb-[30px]">
                                    <img height="" width="" className="rounded-3 sm:mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" src="https://img.freepik.com/free-photo/scene-with-business-person-working-futuristic-office-job_23-2151003708.jpg?t=st=1715415550~exp=1715419150~hmac=9c401bbd7430f10ae7513aa33384f2a0608f5a0f1f4a064a41db4e82d20a457a&w=740" alt="291*286" />
                                </Col>
                                <Col lg={6} md={8} className="text-center md:text-start">
                                    <span className="text-darkgray text-[25px] text-left tracking-[-0.5px] leading-[40px] sm:text-center font-serif inline-block sm:leading-[30px] font-medium mb-[40px] sm:mb-[30px] sm:text-[20px]">"Developing a Cross-Platform Mobile Application Using React Native: Streamlining User Experience Across iOS and Android Platforms"</span>
                                    {/* Modal Component Start */}
                                    <CustomModal.Wrapper
                                        className="flex sm:justify-center"
                                        modalBtn={<div className="flex items-center">
                                            <Buttons type="submit" size="sm" className="btn-sonar" themeColor={["#232323", "#232323"]} color="#ff6437" title={<i className="icon-control-play !ml-[4px]" />} />
                                            <span className="font-medium font-serif text-md text-darkgray uppercase cursor-pointer border-b border-solid border-darkgray no-underline ml-[15px] hover:text-darkgray">WATCH A PROJECTS</span>
                                        </div>
                                        } >
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
                                </Col>
                                <Col lg={12}><div className="w-full h-[1px] bg-black opacity-70 my-[3.5rem] sm:my-[5rem]"></div></Col>
                                <Col className="font-serif uppercase leading-[12px]">
                                    <Row>
                                        <m.div {...fadeIn} className="col-12 col-md-3 col-sm-6 text-center font-medium uppercase text-sm leading-[12px] border-r border-mediumgray sm:mb-[30px] xs:border-none">
                                            <span className="inline-block md:mb-[10px] md:block font-serif">Date:</span>
                                            <span className="text-darkgray font-medium uppercase font-serif"> 08 January 2020</span>
                                        </m.div>
                                        <m.div {...{ ...fadeIn, transition: { delay: 0.5 } }} className="col-12 col-md-3 col-sm-6 text-center border-r font-medium uppercase text-sm leading-[12px] border-mediumgray sm:border-none sm:mb-[30px]">
                                            <span className="inline-block md:mb-[10px] md:block font-serif">client:</span>
                                            <span className="text-darkgray font-medium uppercase font-serif"> syrona jarabe de</span>
                                        </m.div>
                                        <m.div {...{ ...fadeIn, transition: { delay: 0.6 } }} className="col-12 col-md-3 col-sm-6 text-center border-r font-medium uppercase text-sm leading-[12px] border-mediumgray xs:border-none xs:mb-[30px]">
                                            <span className="inline-block md:mb-[10px] md:block font-serif">industry:</span>
                                            <span className="text-darkgray font-medium uppercase font-serif">INFORMATION TECHNOLOGY</span>
                                        </m.div>
                                        <m.div {...{ ...fadeIn, transition: { delay: 0.7 } }} className="col-12 col-md-3 col-sm-6 text-center font-medium uppercase text-sm leading-[12px]">
                                            <span className="inline-block md:mb-[10px] font-serif md:block">website:</span>
                                            <a aria-label="themezaa" className="text-darkgray text-sm font-medium uppercase leading-[0] font-serif hover:text-[#fd961e]" href="https://www.themezaa.com/" target="_blank" rel="noreferrer"> www.themezaa.com</a>
                                        </m.div>
                                    </Row>
                                </Col>
                            </m.div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start 960x830*/}
            <section className="mx-14 p-0 px-5">
                <Container fluid>
                    <Row className="justify-between p-10"> 
                        <Col md={6} className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500 w-[500px] rounded-4 bg-cover  h-[400px] overflow-hidden relative bg-center bg-no-repeat md:h-[550px] sm:h-[350px] sm:mb-[15px]" style={{ backgroundImage: "url(https://img.freepik.com/free-photo/hands-holding-smartphone-social-media-concept_23-2150208239.jpg?t=st=1715251941~exp=1715255541~hmac=c09df1f2938b195a5adb4f7f4fb32cb86172a934cee3f09686574427ecfc141d&w=740)" }}></Col>
                        <Col md={6} className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500 w-[500px] rounded-4 bg-cover h-[400px] overflow-hidden relative bg-center bg-no-repeat md:h-[550px] sm:h-[350px]" style={{ backgroundImage: "url(https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063136.jpg?t=st=1715251926~exp=1715255526~hmac=3e526428f502e406abf052047bccbacb84cc40cf31ea001f102e1572c83ec2b6&w=740)" }}></Col>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <section className=" py-[60px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
                <Container>
                    <Row className="justify-between">
                        <m.div {...fadeIn} className="col-12 col-lg-4 col-md-7 col-sm-9 md:mb-[35px] place-self-center ">
                            <h5 className="font-serif text-darkgray font-medium m-0 ">Cross Platform App Development.</h5>
                        </m.div>
                        <m.div {...{ ...fadeIn, transition: { delay: 0.5 } }} className="col-12 col-xl-3 col-lg-4 col-md-6 sm:mb-[30px] ">
                            <div className="flex font-serif text-darkgray mb-[15px] font-medium"><span className="flex-shrink-0 self-center h-[1px] w-[40px] bg-[#ff6437] mr-[20px]"></span><div className="grow">The Challenge</div></div>
                            <p className="md:w-[80%] xs:w-full">One of the primary challenges in cross-platform app development is ensuring consistent user experiences while optimizing performance across different devices and operating systems.</p>
                        </m.div>
                        <m.div {...{ ...fadeIn, transition: { delay: 0.6 } }} className="col-12 col-xl-3 col-lg-4 col-md-6">
                            <div className="flex font-serif text-darkgray mb-[15px] font-medium"><span className="flex-shrink-0 self-center h-[1px] w-[40px] bg-[#ff6437] mr-[20px]"></span><div className="grow">The Approach</div></div>
                            <p className="md:w-[80%] xs:w-full">The approach to cross-platform app development involves selecting the right framework, maximizing code reuse, leveraging platform-specific features, and thorough testing for compatibility and performance.</p>
                        </m.div>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start 1920*1180*/}
            <section className="relative bg-cover overflow-hidden bg-fixed h-[750px] md:h-[550px] sm:h-[350px]">
                <Parallax className="lg-no-parallax h-[750px] relative bg-cover bg-fixed lg:bg-inherit lg:bg-center md:h-[550px] sm:h-[350px]" translateY={[-20, 20]} style={{ backgroundImage: `url(https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252428.jpg?t=st=1715860486~exp=1715864086~hmac=ef7f102937f58993779abaa26a9718a4a20210038d94f5b0b3be7319a059ddfb&w=826)` }}></Parallax>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <section className="py-[60px] lg:py-[50px] md:py-[45px] sm:py-[40px]">
                <Container>
                    <Row className="justify-center items-center md:items-start mb-[35%] md:mb-[43%] sm:mb-0">
                        <m.div {...fadeIn} className="col-12 col-lg-2 text-left md:text-center md:mb-[35px]">
                            <img height="130px" width="130px" src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061999.jpg?t=st=1715367495~exp=1715371095~hmac=f6eb722c408968493179b83f8602f0f68df8c4358b332b58d92a28278ff7cfa1&w=740" alt="" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500 rounded-2 inline-block" />
                        </m.div>
                        <m.div {...{ ...fadeIn, transition: { delay: 0.5 } }} className="col-12 col-xl-5 col-md-6 col-sm-11 sm:text-start sm:mb-[30px] xs:text-center ">
                            <span className="font-serif text-darkgray text-[30px] tracking-[-0.5px] leading-[40px] font-medium inline-block xs:w-[95%] xs:mx-auto sm:text-[20px] sm:leading-[30px] sm:text-center">User Experience Design in Cross-Platform Apps:</span>
                        </m.div>
                        <m.div {...{ ...fadeIn, transition: { delay: 0.6 } }} className="col-12 col-lg-4 offset-xl-1 col-md-6 col-sm-10 sm:text-center pl-0">
                            <span className="font-serif text-darkgray text-base font-medium mb-[15px] inline-block">Design and style above average</span>
                            <p>Discussing strategies and best practices for designing user interfaces that provide a consistent experience across different platforms while leveraging platform-specific capabilities.</p>
                        </m.div>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <section className="bg-lightgray pb-[10px] lg:pb-[90px] md:pb-[75px] sm:py-[50px]">
                <Container className="sm:mb-[50px]">
                    <Row className="justify-center">
                        <Overlap>
                            <Col xl={12} className="text-center mb-[100px] relative">
                                <img height="" width="" src="https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg?t=st=1715860238~exp=1715863838~hmac=c6c087bf2498e00ef4e361278e8e39cbd04fdefb8917576247e3ab4313720318&w=740" alt="" className="border-[10px] border-white w-full shadow-[0_0_25px_rgba(0,0,0,0.08)]" />
                                {/* Modal Component Start */}
                                <CustomModal.Wrapper
                                    className="flex absolute top-0 left-0 w-full h-full items-center justify-center"
                                    modalBtn={
                                        <Buttons type="submit" size="lg" className="btn-sonar" themeColor={["#fff", "#fff"]} color="#ff6437" title={<i className="icon-control-play !ml-[4px]" />} />
                                    } >
                                    <div className="w-[1020px] max-w-full relative rounded mx-auto">
                                        {/* <iframe width="100%" height="100%" className="shadow-[0_0_8px_rgba(0,0,0,0.06)]" controls src="https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe> */}
                                      <video controls>
                                        <source src={videoCod} type="video/mp4" /> 
                                            Your browser does not support the video tag.
                                      </video>
                                    </div>
                                </CustomModal.Wrapper>
                                {/* Modal Component End */}
                            </Col>
                        </Overlap>
                        <m.div {...fadeIn} className="col-12 col-xl-5 col-lg-6 col-md-8 col-sm-10 text-center">
                            <i className="ti-quote-left text-[#ff6437] text-[50px] mb-[25px] block"></i>
                            <span className="text-xlg text-darkgray leading-[34px] font-serif block mb-[25px] lg:text-[18px] lg:leading-[24px] md:leading-[26px]">"Cross-platform app development projects: where versatility meets efficiency, turning ideas into seamless experiences across every device."</span>
                            <span className="font-serif uppercase text-sm font-medium tracking-[4px]">James nichols</span>
                        </m.div>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <m.section {...fadeIn} className="py-[70px] lg:py-[60px] md:py-[50px] sm:py-[40px]">
                <Container>
                    <Row>
                        <Col>
                            <img height="" width="" src="https://img.freepik.com/free-photo/robot-working-office-instead-humans_23-2150912063.jpg?t=st=1715861579~exp=1715865179~hmac=d17eb994af51a6ba9c52e895c60ca5126140307cda375cd8c3cb60aa6adadfd0&w=740" className="w-full h-auto rounded-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500" alt="" />
                            
                        </Col>
                        <Col>
                            <img height="" width="" src="https://img.freepik.com/free-photo/robot-working-office-instead-humans_23-2150912061.jpg?t=st=1715861554~exp=1715865154~hmac=3fa0b9502d9819c98d802b93b77d6ed85cd01afeea761896a7ade7180975538b&w=740" className="w-full h-auto rounded-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500" alt="" />
                            
                        </Col>
                    </Row>
                </Container>
            </m.section>
            {/* Section End */}

            {/* Section Start 
            <section className="p-0 bg-cover bg-no-repeat h-[900px] overflow-hidden bg-center lg:h-[700px] md:h-[550px] xs:h-[300px]" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252444.jpg?t=st=1715258424~exp=1715262024~hmac=e2a15ced78249e451f3eb393ebec342f28cf32c7427efab569da72922bc016a2&w=826')" }}></section>
             Section End */} 

            {/* Section Start */}
            <section className="py-[60px] lg:py-[50px] md:py-[40px] sm:py-[40px]">
                <Container>
                    <Row className="items-center justify-center">
                        <Col lg={7} md={10} className="flex justify-end lg:pl-[40px] md:mb-[50px]">
                            <figure className="relative m-0">
                                <img height="" width="" src="https://img.freepik.com/free-vector/maintenance-background-design_1294-45.jpg?t=st=1715259349~exp=1715262949~hmac=9fc9f0a094705996e6018a86ec5c71a08c64b646514f8983dd62b0b0d626b819&w=740" alt="" className='rounded-3 w-[500px] h-[500px]'/>
                                <figcaption className="absolute bg-[#ff6437] bottom-[-20px] left-[-50px] text-white p-[49px] lg:p-[45px] md:p-[42px] sm:p-[38px] w-[50%] xs:w-full xs:left-[-25px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg shadow-indigo-500 rounded-3">
                                    <span className="uppercase text-sm tracking-[1px] text-darkgray font-serif font-medium mb-[10px] inline-block">Different design</span>
                                    <h6 className="font-serif uppercase font-medium mb-0">Branding strategy and innovation</h6>
                                </figcaption>
                            </figure>
                        </Col>
                        <Col xl={{ span: 4, offset: 1 }} lg={5} md={9}>
                            <span className="font-serif text-[30px] text-darkgray leading-[40px] tracking-[-0.5px] font-medium inline-block mb-[25px] sm:text-[20px] sm:leading-[30px]">Updates and Maintenance: </span>
                            <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Managing updates and maintenance across multiple platforms can be complex, especially when dealing with changes in OS versions, SDKs, and third-party dependencies.</p>
                            <Buttons href="#" className="font-medium font-serif after:h-[2px] after:bg-black hover:text-black uppercase btn-link text-md md:mb-0" size="xl" color="#232323" title="Explore Website" />

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
                                to="/portfolio/single-project-page-02"
                                className="portfolio_btn h-full px-28 py-16 justify-between items-center flex xl:p-12 md:inline-flex"
                            >
                                <div
                                    className="portfolio_img absolute top-0 left-0 h-full w-full -z-[1] duration-150	bg-no-repeat bg-cover overflow-hidden bg-center"
                                    style={{
                                        backgroundImage:
                                            "url(https://cdn.pixabay.com/photo/2017/03/30/10/59/social-network-2187996_640.jpg)",
                                    }}
                                ></div>
                                <div className="btn_icon font-medium text-darkgray font-serif mr-uto uppercase">
                                    <i className="line-icon-Arrow-OutLeft duration-100	text-[40px] inline-block mr-[20px] align-middle	"></i>
                                    <span className="text-sm inline-block md:hidden">Prev project</span>
                                </div>
                                <span className="portfolio_disc font-medium text-darkgray text-xlg font-serif block lg:text-[18px] lg:leading-[26px] md:text-left">
                                Web Applications
                                </span>
                            </Link>
                        </Col>
                        <Col className="relative md:flex md:justify-end xs:block">
                            <Link
                                to="/portfolio/single-project-page-04"
                                className="portfolio_btn h-full px-28 py-16 justify-between items-center flex xl:p-12 md:inline-flex"
                            >
                                <span className="portfolio_disc font-medium text-darkgray text-xlg font-serif block lg:text-[18px] lg:leading-[26px] md:text-right">
                                    Secutity Audits
                                </span>
                                <div
                                    className="portfolio_img absolute top-0 left-0 h-full w-full -z-[1] duration-150	bg-no-repeat bg-cover overflow-hidden bg-center"
                                    style={{
                                        backgroundImage:
                                            "url(https://img.freepik.com/free-photo/online-security-dark-background-3d-illustration_1419-2804.jpg?t=st=1715260466~exp=1715264066~hmac=598dcd59ed9c7cdb46d3737a0e0ede393d5cb5c3d08f9eb2ba87f282d497e472&w=826)",
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
    )
}

export default SingleProjectPage03

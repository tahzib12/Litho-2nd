import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Navbar } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
//import ReactCustomScrollbar from '../../Components/ReactCustomScrollbar';
import SideButtons from "../../Components/SideButtons";

const InteractiveportfolioPageData = [
  {
    number: "01",
    title: "Blockchain Technology",
    img: "https://img.freepik.com/free-photo/man-using-laptop-work-connect-with-others_23-2149369111.jpg?t=st=1714205199~exp=1714208799~hmac=b47a7152c2baa46f62538e75b32c0525e92acf765f2632d3bd9e011958eef1bc&w=740",
    link: "/portfolio/single-project-page-01",
  },
  {
    number: "02",
    title: "Web Applications",
    img: "https://img.freepik.com/free-photo/human-hand-typing-computer-keyboard-night-generated-by-ai_188544-31050.jpg?t=st=1716035852~exp=1716039452~hmac=50a00d5059d8ba478be285b9608c394cadd3ffca9502e3b3d4b2498cfce71344&w=826",
    link: "/portfolio/single-project-page-02",
  },
  {
    number: "03",
    title: "Cross Platform Apps",
    img: "https://multiqos.com/blogs/wp-content/uploads/2021/03/cross-platform.jpg",
    link: "/portfolio/single-project-page-03",
  },
  {
    number: "04",
    title: "Security Audits",
    img: "https://5.imimg.com/data5/GY/QA/DJ/GLADMIN-5497852/selection-404-500x500.png",
    link: "/portfolio/single-project-page-04",
  },
  {
    number: "05",
    title: "Tech Consulting",
    img: "https://img.freepik.com/free-photo/person-working-html-computer_23-2150038853.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
    link: "/portfolio/single-project-page-05",
  },
]

const InteractiveportfolioPage = () => {
  const [isHover, setHover] = useState(0);

  const handleMouseEnter = (e, index) => {
    console.log(index,"index");
    setHover(index);
  };

  return (
    <>
      <SideButtons animation={false} />
      <Header topSpace={{ md: true }} className="absolute top-0 left-0 w-full z-10 flex items-center md:py-0">
        <Navbar.Brand className="inline-block p-0 m-0">
          <img className="default-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/symbol.webp' data-rjs='/assets/img/webp/symbol@2x.webp' alt='logo' />
          <img className="alt-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/symbol.webp' data-rjs='/assets/img/webp/symbol@2x.webp' alt='logo' />
          <img className="mobile-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/symbol-black.webp' data-rjs='/assets/img/webp/symbol-black@2x.webp' alt='logo' />
        </Navbar.Brand>
      </Header>

      <section className="home-interactive-portfolio ">
        <div className="fullscreen-hover-box full-screen ">
          <ul className="fullscreen-hover-list light landscape:md:mb-[60px] ">
            {
              InteractiveportfolioPageData.map((item, i) => {
                return (
                  <li key={i}  className={` hover-list-item${isHover === i ? " active" : ""}`} >
                    <Link aria-label="link for" to={item.link} className="-mx-2 ">
                      <h2 className="heading-6 interactive-number ">{item.number}</h2>
                      <span className="interactive-line  "></span>
                      <span onMouseEnter={e => handleMouseEnter(e, i)} className=" interactive-title "  data-link-text={item.title}>{item.title}</span>
                      <i className="line-icon-Arrow-OutRight interactive-icon"></i>
                    </Link>
                    <div className="fullscreen-hover-image" style={{ backgroundImage: `url(${item.img})` }}></div>
                  </li>
                );
              })
            }
          </ul>
          <div className="text-center w-full absolute left-0 bottom-[70px] opacity-70 lg:bottom-[25px]">© Copyright {new Date().getFullYear()}  <Link aria-label="link for" to="/" className="border-b border-[#828282] hover:text-white">Litho</Link></div>
        </div>
      </section>

      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .home-interactive-portfolio ::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .home-interactive-portfolio {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
          
        }
        
        
        
      `}</style>
    </>
  );
};

export default InteractiveportfolioPage;

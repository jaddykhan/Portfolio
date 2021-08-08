// import React, { useState } from "react";
// import "../Navbar/styles.css";
// import logo from "../../../assets/images/basry-logo.png";
// import { Link } from "react-router-dom";

// const Navbar = ({ onLinkClick }) => {
//   const [toggler, setToggler] = useState(true);
//   const [navbar, setNavbar] = useState(false);

//   const changeBackground = () => {
//     window.scrollY > window.screen.height - window.screen.height * 0.27
//       ? setNavbar(true)
//       : setNavbar(false);
//   };
//   window.addEventListener("scroll", changeBackground);

//   return (
//     <nav
//       className={`navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar navbar-fixed-top py-3 ${
//         navbar ? "navbar-scroll-color" : "rgba-gradient-nav"
//       }`}
//     >
//       <div className="container-fluid mx-3">
//         <Link className="navbar-brand" to="/">
//           <img alt="logo" src={logo} width="100" />
//         </Link>
//         <button
//           className="navbar-toggler costmusetoggler shadow-none"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//           onClick={() => setToggler(!toggler)}
//         >
//           <i
//             className={`fas ${toggler ? "fa-bars" : "fa-times"} fa-lg`}
//             style={{ color: "black" }}
//           ></i>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav  smooth-scroll ms-lg-5">
//             <li className="nav-item">
//               <Link
//                 onClick={() => onLinkClick("homeSection")}
//                 className="nav-link"
//                 to="/"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 onClick={() => onLinkClick("aboutSection")}
//                 className="nav-link"
//                 to="/"
//                 data-offset="90"
//               >
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 onClick={() => onLinkClick("educationSection")}
//                 className="nav-link"
//                 to="/"
//                 data-offset="90"
//               >
//                 Education
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 onClick={() => onLinkClick("experienceSection")}
//                 className="nav-link"
//                 to="/"
//                 data-offset="90"
//               >
//                 Experience
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to="/"
//                 onClick={() => onLinkClick("skillSection")}
//                 className="nav-link"
//                 data-offset="30"
//               >
//                 Skills
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 onClick={() => onLinkClick("projectSection")}
//                 className="nav-link"
//                 to="/"
//                 data-offset="90"
//               >
//                 Projects
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 onClick={() => onLinkClick("contactSection")}
//                 className="nav-link"
//                 data-offset="90"
//                 to="/"
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>

//           <ul className="navbar-nav  ms-auto list">
//             <li className="nav-item  list-item">
//               <Link to="/login" className="nav-link">
//                 <i className="fas fa-lock mx-2"></i> Sign In
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import Social from "../SocialTwo";
import { NavLink } from "react-router-dom";

const Header = ({onLinkClick}) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div className="shane_tm_topbar">
        <div className={navbar ? "topbar_inner opened" : "topbar_inner"}>
          <div className="logo">
            <NavLink to="/">
              <img src="/img/logo/new/dark.png" alt="partners brand" />
            </NavLink>
          </div>
          {/* End logo */}
          <div className="menu">
            <Scrollspy
              className="anchor_nav"
              items={["home", "about", "portfolio", "news", "contact"]}
              currentClassName="current"
              offset={-200}
            >
              <li>
                <NavLink to="/" onClick={() => onLinkClick("homeSection")}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={() => onLinkClick("aboutSection")}>About</NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={() => onLinkClick("projectSection")}>Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={() => onLinkClick("homeSection")}>News</NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={() => onLinkClick("contactSection")}>Contact</NavLink>
              </li>
              <li>
                <a
                  className="white-fill-bg btn-outline btn_sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://themeforest.net/item/shane-react-personal-portfolio-template/32642263"
                >
                  Buy Now
                </a>
              </li>
            </Scrollspy>
          </div>
          {/* End menu */}
        </div>
      </div>
      {/* End shane_tm_topbar */}

      {/* Start shane mobile menu */}
      <div className="shane_tm_mobile_menu">
        <div className="topbar_inner">
          <div className="container bigger">
            <div className="topbar_in">
              <div className="logo">
                <NavLink to="/">
                  <img src="/img/logo/new/dark.png" alt="partners brand" />
                </NavLink>
              </div>
              {/* End logo */}
              <div className="my_trigger" onClick={handleClick}>
                <div
                  className={
                    click
                      ? "hamburger hamburger--collapse-r is-active"
                      : "hamburger"
                  }
                >
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
                {/* End hamburger menu */}
              </div>
            </div>
          </div>
        </div>
        <div className={click ? "dropdown active" : "dropdown"}>
          <div className="container">
            <span className="close_menu" onClick={handleClick}>
              close
            </span>
            <div className="dropdown_inner">
              <ul className="anchor_nav">
                <li className="current">
                  <a href="#home" onClick={handleClick}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={handleClick}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#portfolio" onClick={handleClick}>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#news" onClick={handleClick}>
                    News
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={handleClick}>
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    className="white-fill-bg btn-outline btn_sm"
                    target="_blank"
                    rel="noreferrer"
                    href="https://themeforest.net/"
                  >
                    Buy Now
                  </a>
                </li>
              </ul>
              <div className="social-menu">
                <Social />
              </div>
              {/* End social share */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
      {/* End shane mobile menu */}
    </>
  );
};

export default Header;

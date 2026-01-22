import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BiMenu, BiX, BiChevronUp } from "react-icons/bi";
import logo from "../Assets/IMG/logo.png";

const AppNavbar = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.pageYOffset > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setExpanded(false);
  };

  return (
    <div ref={navRef}>
      <style>{`
        .app-navbar {
          background-color: #ffffff !important;
          min-height: 80px;
          border-bottom: 1px solid #f0f0f0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }

        .brand-name {
          font-size: 1.3rem;
          font-weight: 800;
          color: #183A66;
          margin-right: 8px;
        }

        .nav-links .nav-link {
          font-weight: 600;
          color: #475569 !important;
          margin: 0 12px;
          font-size: 1rem;
          transition: 0.3s;
          opacity: 1 !important; /* ضمان الظهور */
          visibility: visible !important;
        }

        .nav-links .nav-link:hover, .nav-links .nav-link.active {
          color: #F97316 !important;
        }

        @media (max-width: 991px) {
          .navbar-collapse {
            background: #ffffff;
            margin-top: 10px;
            padding: 15px;
            border-radius: 15px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          }
          
          .nav-links .nav-link {
            text-align: right;
            padding: 12px 20px !important;
            margin: 5px 0 !important;
            border-bottom: 1px solid #f8fafc;
          }

          .nav-links .nav-link.active {
            background: #fff5ed;
            border-radius: 10px;
          }
        }

        .navbar-toggler {
          border: none !important;
          font-size: 1.8rem;
          color: #183A66 !important;
        }

        .scroll-top-btn {
          position: fixed;
          bottom: 25px;
          right: 25px;
          width: 45px;
          height: 45px;
          background: #183A66;
          color: white;
          border: none;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 2000;
          transition: 0.3s;
          opacity: ${showScroll ? "1" : "0"};
          visibility: ${showScroll ? "visible" : "hidden"};
        }

        .scroll-top-btn:hover {
          background: #F97316;
          transform: translateY(-5px);
        }
      `}</style>

      <Navbar
        expand="lg"
        className="app-navbar"
        fixed="top"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="d-flex align-items-center"
            onClick={handleLinkClick}
          >
            <img src={logo} alt="Logo" style={{ width: "45px" }} />
            <span className="brand-name">منصة السلامة</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar">
            {expanded ? <BiX /> : <BiMenu />}
          </Navbar.Toggle>

          <Navbar.Collapse id="main-navbar">
            <Nav className="nav-links ms-auto">
              <Nav.Link as={NavLink} to="/" end onClick={handleLinkClick}>
                الرئيسية
              </Nav.Link>
              <Nav.Link as={NavLink} to="/questions" onClick={handleLinkClick}>
                الأسئلة
              </Nav.Link>
              <Nav.Link as={NavLink} to="/terms" onClick={handleLinkClick}>
                المصطلحات
              </Nav.Link>
              {/* <Nav.Link as={NavLink} to="/development" onClick={handleLinkClick}>
                التطوير
              </Nav.Link> */}
              <Nav.Link
                as={NavLink}
                to="/interview-prep"
                onClick={handleLinkClick}
              >
                المقابلات
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* الزر العائم */}
      <button
        className="scroll-top-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <BiChevronUp size={24} />
      </button>
    </div>
  );
};

export default AppNavbar;

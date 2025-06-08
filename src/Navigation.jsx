import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLink from './Navlink';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { to: "/examensarbete", text: "Examensarbete" },
    { to: "/skriv", text: "Skriv en hälsning" },
  ];

  return (
    <nav className="bg-primary mx-auto px-4 relative z-50 overflow-hidden" aria-label="Huvudmeny">
      <div className="flex justify-between items-center h-24">
        <div>
          <Link to="/" className="text-xl font-bold text-white-800" aria-label="Hem">
            <img src="src/assets/Logo blomma.svg" alt="Illustrerad blomma" className="h-16 w-16 md:h-24 md:w-24" />
          </Link>
        </div>
        <div className="hidden md:block">
          {navLinks.map((link, index) => (
            <NavLink key={`desktop-${index}`} to={link.to}>
              {link.text}
            </NavLink>
          ))}
        </div>

        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:ring-2 focus:ring-white relative z-50"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
          >
            <img
              src={isMenuOpen ? "src/assets/kryss.svg" : "src/assets/Hamburgemeny.svg"}
              alt={isMenuOpen ? "Stäng meny" : "Öppna meny"}
              className="h-8 w-8"
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`
          transition-all duration-300 fixed top-0 pt-20 bg-primary px-4 h-screen w-screen text-right
          ${isMenuOpen ? 'right-0' : '-right-full'} 
          md:hidden z-40
        `}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col space-y-4 mt-4">
          {navLinks.map((link, index) => (
            <NavLink
              key={`mobile-${index}`}
              to={link.to}
              onClick={closeMenu}
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
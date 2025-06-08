import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, children, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-white underline decoration-2 decoration-transparent hover:decoration-white px-3 py-2 rounded-md text-xl uppercase font-roboto"
      aria-label={`Navigering till ${children}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
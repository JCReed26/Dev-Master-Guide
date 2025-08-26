import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">daisyUI</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {/*
            ADD MORE PAGES HERE
            1. Add a new `<li>` element.
            2. Add a `Link` component from `react-router-dom` inside the `<li>`.
            3. Set the `to` prop of the `Link` to the desired path (e.g., "/contact").
            4. Add the text for the link (e.g., "Contact").
            Example:
            <li><Link to="/contact">Contact</Link></li>
          */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

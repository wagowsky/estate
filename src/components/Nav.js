import React from 'react';

import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <div className="nav">
      <div className="menu">
          {/* <div className="menuItem">Portfolio</div> */}
          <Link className="menuItem" to="portfolio" smooth={true}
          duration={500}
          offset={-70}>
Portfolio
</Link>
          {/* <div className="menuItem">About</div> */}
          {/* <div className="menuItem">Contact</div> */}
          <Link className="menuItem" to="contact" smooth={true}
          duration={500}
          offset={-70}>
Contact
</Link>
      </div>
    </div>
  );
}

export default Nav;

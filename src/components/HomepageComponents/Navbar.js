import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';


const NavbarComponent = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <React.Fragment>
      <Navbar className= "navbar-expand-sm navbar-light justify-content-center">
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">MENU</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">ABOUT</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarComponent;
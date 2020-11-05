import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="text-white">
      <Navbar color="dark" light>
        <NavbarBrand href="/" className="mr-auto text-white">
          BikesApp
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2 bg-white" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="text-white" href="/bikes/create">
                Add Bikes
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/bikes/update">
                Update Bikes
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/bikes">
                Details Bikes
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

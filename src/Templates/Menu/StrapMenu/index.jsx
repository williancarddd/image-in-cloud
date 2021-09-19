import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {Link} from 'react-router-dom'
import logo from '../../../Assets/header-logotipo.png'

const StrapMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" style={{fontSize: '24px', margin: '5px'}}>
          <img src={logo} alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to='/' style={{textDecoration: 'none', fontSize: '18px', color:'black'}}>Create-cloud-image</Link>
            </NavItem>
          
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default StrapMenu;
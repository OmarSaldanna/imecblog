import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Nav.scss';

const NavItem = props => (
  <Link to={props.to}>
    <div className={`${props.class} ${props.active ? 'nav-active' : ''}`} 
    onClick={props.click}>
      {props.content}
    </div>
  </Link>
);

export default NavItem;

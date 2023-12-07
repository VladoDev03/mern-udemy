import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
    return (
        <nav className='nav-links'>
            <li><NavLink to='/' exact>ALL USERS</NavLink></li>
            <li><NavLink to='/u1/places'>MY PLACES</NavLink></li>
            <li><NavLink to='/places/new'>NEW PLACE</NavLink></li>
            <li><NavLink to='/auth'>AUTHENTICATE</NavLink></li>
        </nav>
    );
};

export default NavLinks;

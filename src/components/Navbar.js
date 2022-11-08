import React from 'react';
import {Bars, Nav, NavLink, NavMenu,} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars/>

                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/projects' activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to='/blogs' activeStyle>
                        Blogs
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;

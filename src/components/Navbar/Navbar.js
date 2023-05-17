import React from 'react';
import './Navbar.css'

function Navbar(){
    // this is the dashboard navbar, will be changed according to the props
    return(
    <nav className='navbarbox'>
        <div className='userDashboard'>
        <p>
            New list
        </p>
        <p>
            Display all lists
        </p>
        </div>
        <div className='logOut'>
        <p>
            Log out
        </p>
        </div>
    </nav>
    )
}

export default Navbar;
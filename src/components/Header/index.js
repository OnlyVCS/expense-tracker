import React from 'react';

import './styles.css';

import logo from '../../images/logo/logo.png';

const Header = () => {
    return ( 
        <div className='header'>
            <img className='icon-header' src={logo} alt='logo' />
            <button 
                className='add-transition-button'
            >
                Add transition
            </button>
        </div>
     );
}
 
export default Header;
import React from 'react';

import './styles.css';

const Sidebar = () => {
    return ( 
        <div className='sidebar-container'>
            <div className='card-selector'>
                Cartão 1
            </div>
            <button className='add-card-button'>+</button>
            <button className='user-selector-button'>Reginaldo</button>
        </div>
     );
}
 
export default Sidebar;
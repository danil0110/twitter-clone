import React from 'react';

import './header.css';

const Header = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Danil Zalizchuk</h1>
            <h2>Записей {allPosts}, понравилось {liked}</h2>
        </div>
    )
}

export default Header;
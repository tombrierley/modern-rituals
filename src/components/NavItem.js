import React from 'react';

// Header - Nav Item
const NavItem = ({ url, title }) => (
    <li>
        <a href={url}>{title}</a>
    </li>
);

export default NavItem;

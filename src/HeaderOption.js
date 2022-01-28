import { Avatar } from '@mui/material';
import React from 'react';
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title }) {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && <Avatar className="headerOption__icon" src={avatar} />}
            <p className="headerOptions__title">{title}</p>
        </div>
    )
}

export default HeaderOption;

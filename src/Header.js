import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import CameraIndoorOutlinedIcon from '@mui/icons-material/CameraIndoorOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import { Avatar } from '@mui/material';



function Header() {
    return (
        <div className='header'>

            <div className="header__left">
                <img src="https://img.icons8.com/fluency/344/linkedin-2.png" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder=" Search" />
                </div>
            </div>

            <div className="header__right">
                <div className="header__right__view">
                    <HeaderOption Icon={CameraIndoorOutlinedIcon} title="Home" />
                    <HeaderOption Icon={PeopleAltIcon} title="Network" />
                    <HeaderOption Icon={MapsUgcOutlinedIcon} title="Messaging" />
                    <HeaderOption Icon={NotificationsOutlinedIcon} title="Notifications" />
                    <HeaderOption Icon={WorkOutlineOutlinedIcon} title="Jobs" />
                    <HeaderOption Icon={WidgetsOutlinedIcon} title="Work" />
                </div>
                <div className="header__right__iconvies">
                    <Avatar />
                </div>
            </div>
        </div>
    )
}

export default Header

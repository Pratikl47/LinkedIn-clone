import { Avatar } from '@mui/material';
import React from 'react'
import "./Sidebar.css";
import HeaderOption from './HeaderOption';
import CameraIndoorOutlinedIcon from '@mui/icons-material/CameraIndoorOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <Avatar className="sidebar__avatar" style={{ width: 70, height: 70 }} />
                <h2>Lucille Montgomery</h2>
                <p>UI/UX Designer</p>
                <br />
                <div className="sidebar__links">
                    <HeaderOption className="headerOptions" Icon={CameraIndoorOutlinedIcon}></HeaderOption>
                    <p>http://linkedin.com/in/lucille...</p>
                </div>
                <div style={{ height: 0.8, width: '100%', backgroundColor: 'lightgray', marginTop: 7, marginBottom: 0 }} />
                <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <h2>767</h2>
                        <p>Connections</p>
                    </div>
                    <div style={{ width: 0.8, backgroundColor: 'lightgray' }} />

                    <div className="qqqq">

                        <h2>60</h2>
                        <p>Views</p>
                    </div>

                </div>
                <div style={{ height: 0.8, width: '100%', backgroundColor: 'lightgray', marginTop: 0, marginBottom: 7 }} />

                <div className="sidebar__left-bottom-view">
                    <p>Free Access exclusive tools & insights</p>
                    <div className="sidebar__buttons">
                        <button type="button">UPGRADE TO PREMIUM</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar;

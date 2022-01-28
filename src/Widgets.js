import React from 'react';
import "./Widgets.css";
import { Avatar } from '@mui/material';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>People you may know</h2>

            </div>
            <div className="widgets__list">
                <div className="widgets__newslist">
                    <Avatar style={{ marginRight: 5 }} />
                    <div className="widgets__newslistrow">
                        <h2>Nina Douglas</h2>
                        <p>Recruiter - Orange</p>
                    </div>
                    <button className="widgets__button">+</button>
                </div>
                <div className="widgets__newslist">
                    <Avatar />
                    <div className="widgets__newslistrow">
                        <h2>Harry Caldwell</h2>
                        <p>Looking for Team</p>
                        <p>Lead Java Developer</p>
                    </div>
                    <button className="widgets__button">+</button>
                </div>
                <div className="widgets__newslist">
                    <Avatar />
                    <div className="widgets__newslistrow">
                        <h2>Hettie Patrick</h2>
                        <p>UI/UX Designer</p>
                    </div>
                    <button className="widgets__button">+</button>
                </div>
                <div className="widgets__newslist">
                    <Avatar />
                    <div className="widgets__newslistrow">
                        <h2>Fannie Santiago</h2>
                        <p>SEO Specialist</p>
                    </div>
                    <button className="widgets__button">+</button>
                </div>

            </div>
        </div>
    )
}

export default Widgets;

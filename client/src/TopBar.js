
import React from 'react';
import LightMoon from './assets/img/LightMoon.svg'
import DarkMoon from './assets/img/DarkMoon.svg'

const TopBar = (props) => {
    return (
        <div className={"TopBar" + ' ' + props.darkMode}>
            <h3>Where in the world?</h3>
            <a className={"DarkModeButton" + ' ' + props.darkMode} href='#' onClick={() => props.changeTheme()}>
                <img src={props.darkMode === 'lightMode' ? (LightMoon) : (DarkMoon)} alt="" height="16px" width="16px" />
                <p>Dark Mode</p>
            </a>
        </div>
    );
};

export default TopBar;
import React from 'react';
import SideBar from '../components/Side/Social_Login';
import Social_Profiles from '../components/Side/Social_Profiles';
import QZone from '../components/QZone/QZone';

const Side = () => {
    return (
        <div>
            <SideBar></SideBar>
            <Social_Profiles></Social_Profiles>
            <QZone></QZone>
        </div>
    );
};

export default Side;
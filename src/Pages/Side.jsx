import React, { use } from 'react';
import SideBar from '../components/Side/Social_Login';
import Social_Profiles from '../components/Side/Social_Profiles';
import QZone from '../components/QZone/QZone';
import { ProviderContext } from '../Provider/ProviderContext';

const Side = () => {
    const { profile } = use(ProviderContext);
    console.log(profile);
    return (
        <div>

            {profile === null && <SideBar></SideBar>}
            <Social_Profiles />
            <QZone></QZone>
        </div>
    );
};

export default Side;
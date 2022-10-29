import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Skeleton(props) {
    const [show, setShow] = useState(false);
    const [eqNav, setEqNav] = useState(false);
    const [dashboardNav, setDashboardNav] = useState(false);
    const [settingNav, setSettingNav] = useState(false);
    const [sideBar, setSideBar] = useState(true);
    const [profile, setProfile] = useState(false)



    return (
        <>
            <div className="w-full h-full bg-gray-200">
                <div className="flex flex-no-wrap">
                    <Sidebar eqNav={eqNav} setEqNav={(val) => setEqNav(val)} dashboardNav={dashboardNav} setDashboardNav={(val) => setDashboardNav(val)} settingNav={settingNav} setSettingNav={(val) => setSettingNav(val)} sideBar={sideBar} setSideBar={(val) => setSideBar}/>
                    <div className="w-full">
                        
                        <Header show={show} setShow={(val) => setShow(val)} sideBar={sideBar} setSideBar={(val) => setSideBar(val)} profile={profile} setProfile={(val) => setProfile(val)}/>
                        {/* Remove class [ h-64 ] when adding a card block */}
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
}

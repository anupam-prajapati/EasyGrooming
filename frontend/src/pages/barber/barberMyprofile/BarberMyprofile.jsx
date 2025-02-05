// import { useState } from "react";
import Header from "../../../components/common/header/Header";
// import SideDrawer from "../../../components/common/sideDrawer/SideDrawer";
import SideDrawer from "../../../components/common/sidedrawer/SideDrawer";
import BarberShopProfile from "../barberShopProfile/BarberShopProfile";

const BarberMyprofile = () => {
    // const [drawerOpen, setDrawerOpen] = useState(false);

    // const toggleDrawer = () => {
    //   setDrawerOpen(!drawerOpen);
    // };

    // const customerMenuItems = [
    //     'My Profile',
    //     'My Appointments',
    //     'Notifications',
    //     'Feedback',
    //     'Contact Us',
    //   ];

    return (
        <>
        <Header role="barber"/>
        <SideDrawer />
            {/* <SideDrawer isOpen={drawerOpen} toggleDrawer={toggleDrawer} menuItems={customerMenuItems}/> */}
            {/* <main className={`${drawerOpen ? 'drawer-open' : ''}`}> */}
                <div className="d-flex justify-content-center">
                    <BarberShopProfile />
                </div>
            {/* </main>       */}
        </>
    )
}

export default BarberMyprofile
import React from "react";
import { Outlet } from "react-router";
import Filter from "../Filter/Filter";
const Layout = () => {

    return (
        <>
            <Filter></Filter>
            <Outlet></Outlet>
        </>
    );
};

export default Layout;

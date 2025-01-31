import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header/Header";

export default function Default() {
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}
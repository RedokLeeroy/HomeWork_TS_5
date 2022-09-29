import { Navigation } from "../../components/Navigation/Navigation"
import {Outlet} from "react-router"
import React from "react"
export const Layout= ():JSX.Element => {
    return (<>
        <Navigation></Navigation>
        <Outlet></Outlet>
        </>
    )
}
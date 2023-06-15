import { Outlet } from "react-router-dom";
import SidebarComponent from "./sidebar/sidebar";

const LayoutComponent = () => {
    return <SidebarComponent outlet={<Outlet />} />
}

export default LayoutComponent
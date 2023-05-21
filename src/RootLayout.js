import { Outlet } from "react-router-dom";
import './RootLayout.css';

function RootLayout() {
    return (
        <div className="root">
            <Outlet />
        </div>
    );
}

export default RootLayout;
import * as React from 'react';
import { NavLink } from 'react-router-dom'



export interface MenuProps {

}

export const Menu: React.SFC<MenuProps> = (props) => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/video-editor">Video editor</NavLink>
            <NavLink to="/no-match">404</NavLink>
        </div>
    );
};

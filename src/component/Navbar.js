import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/Navbar.scss";
import menudata from "../json Api file/menu.json";

const Navbar = () => {
    const [menuData, setMenuData] = useState(menudata);

    return (
        <>
            <div className="navbar">
                <ul>
                    <li><HashLink to="Home">Home</HashLink></li>
                    <li><HashLink to="Breakfast"  >Breakfast</HashLink></li>
                    <li><HashLink to="Lunch">Lunch</HashLink></li>
                    <li><HashLink to="Diner">Diner</HashLink></li>
                </ul>
            </div>

        </>
    )

}
export default Navbar;
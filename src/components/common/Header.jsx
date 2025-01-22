import React, {useState} from "react";
import LogoImg from "../assets/images/logo-black.png";
import { HiOutlineMenuAlt1, HiViewGrid } from "react-icons/hi";
import { PiBagBold } from "react-icons/pi";
import "../styles/common.css";
import linkData from "../assets/data/data";
import { NavLink } from "react-router-dom";

function Header() {
    const [open, setOpen] = useState(false)
    return (
        <div>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 border-bottom">

    <div className="fisrtHead ">
        <div href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <div className="bi">
                            <img className="imgLogo" src={LogoImg} alt='logo'/>
                        </div>
                        <div className='category flex items-center text-sm gap-3'>
                        <HiViewGrid size={20} />
                        <span> Category</span>
                        </div>
                        
                    </div>
                </div>

                <nav className={open ? "mobile-view" : "desktop-view"}>
                    <ul className="nav col-12 col-md-auto mb-0 justify-content-center mb-md-0">
                        {linkData.map((link) => {
                            return (
                                <li key={link.id} onClick={() => setOpen(null)}>
                                    <NavLink className={({ isActive }) => (isActive ? "nav-link px-2 text-sm" : "nav-link px-2 text-black")} to={link.url}>
                                        {link.title}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                

                <div className="login text-end gap-5">
                    <button className="btn"><PiBagBold size={22} /></button>
                    <button className="btn" type="button">Login</button>
                    <button className="btn"><HiOutlineMenuAlt1 size={25} /></button>
                </div>
                
    </header>
        </div>
    );
}

export default Header;

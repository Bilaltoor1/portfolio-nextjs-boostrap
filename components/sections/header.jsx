'use client'
import React from 'react';
import {menuList} from "@/utlits/fackData/menuList";
import Link from "next/link";
import {RiCloseLargeLine, RiMenu3Line, RiShakeHandsLine} from "@remixicon/react";
import {usePathname} from "next/navigation";

function Header() {
    const [showSidebar, setShowSidebar] = React.useState(false);
    const pathname = usePathname();
    const isActiveLink = (path) => {
        return pathname === path ? 'active' : '';
    };

    return (
        <div className='header'>
            <div className="container">
                <div className='header-wrapper'>
                    <div className="logo">
                        <h1>Logo</h1>
                    </div>
                    <ul className="header-links">
                        {
                            menuList.map(({id, label, path}) =>
                                <li key={id}>
                                    <Link href={path} className={`header-link ${isActiveLink(path)}`}>
                                        {label}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                    {showSidebar && <MobileSidebar setShowSidebar={setShowSidebar}/>}
                    <RiMenu3Line className='mobile-menu-icon' onClick={() => setShowSidebar(!showSidebar)}/>
                    <div className="menu-btns">
                        <Link href="/contact" className="theme-btn">Hire Me <RiShakeHandsLine size={15}/> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

const MobileSidebar = ({setShowSidebar}) => {
    const pathname = usePathname();

    const handleLinkClick = () => {
        setShowSidebar(false);
    };

    const isActiveLink = (path) => {
        return pathname === path ? 'active' : '';
    };

    return (
        <div className='mobile-sidebar'>
            <div className="container">
                <RiCloseLargeLine className='close-mobile-menu' onClick={() => setShowSidebar(false)}/>
                <div className="mobile-sidebar-wrapper">
                    <div className="logo">
                        <h1>Logo</h1>
                    </div>
                    <ul className="mobile-header-links">
                        {
                            menuList.map(({id, label, path}) =>
                                <li key={id}>
                                    <Link href={path} className={`mobile-sidebar-link ${isActiveLink(path)}`}
                                          onClick={handleLinkClick}>
                                        {label}
                                    </Link>
                                </li>)
                        }
                    </ul>
                    <div className="mobile-menu-button">
                        <Link href="/contact" className="theme-btn" onClick={handleLinkClick}>
                            Hire Me <RiShakeHandsLine size={15}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
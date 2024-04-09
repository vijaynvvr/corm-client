import React, { useEffect, useRef, useState } from "react";
import { FiMenu, FiDelete } from "react-icons/fi";
import { RiDropdownList } from "react-icons/ri";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useSelector } from "react-redux";

const Header = ({ open, setOpen }) => {
    const [menu, setMenu] = useState(false)
    const menuRef = useRef(null);
    const loginStatus = useSelector(store => store.user.isLoggedIn)
    const activeOrg = useSelector(store => store.user.activeOrg)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) setMenu(false);
        };
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

	return (
		<div className="h-[63px]">
			<ul className="w-screen px-4 py-2 flex font-medium justify-between bg-white items-center fixed top-0 z-40 shadow-lg">
				<div className="flex items-center gap-3">
					{loginStatus ? (
                        <>
                            <button
                                className="xl:hidden block rounded-full p-2 text-3xl hover:bg-slate-200 active:bg-slate-300"
                                onClick={() => setOpen((prev) => !prev)}
                            >
                                {open ? <FiDelete /> : <FiMenu />}
                            </button>
                            <Link to={!activeOrg ? "/feed" : null} className="xl:flex hidden items-center gap-2">
                                <img src={logo} alt="corm-logo" className="w-10"/>
                                <li className="text-3xl font-bold">
                                    {!activeOrg ? "CoRM" : activeOrg.acronym}
                                </li>
                            </Link>
                        </>
                    ) : (
                        <Link to="/" className="flex items-center gap-2">
                            <img src={logo} alt="corm-logo" className="w-10"/>
                            <li className="text-3xl font-bold">CoRM</li>
                        </Link>
                    )}
				</div>
                {loginStatus ? (
                    <div className="relative" ref={menuRef}>
                        <li onClick={() => setMenu(prevState => !prevState)} className="flex items-center gap-2 px-4 py-2 bg-slate-950 text-white hover:bg-slate-800 rounded-md cursor-pointer border-2 border-slate-900">
                            <RiDropdownList className="text-2xl"/>
                            Organizations
                        </li>
                        <Menu menu={menu}/>
                    </div>
                ) : (
                    <Link to="/login" className="flex items-center gap-2 px-4 py-2 bg-slate-950 text-white hover:bg-slate-800 rounded-md cursor-pointer border-2 border-slate-900">
                        Login
                    </Link>
                )}
			</ul>
		</div>
	);
};

export default Header;

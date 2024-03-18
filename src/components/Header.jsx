import React from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = ({ setOpen }) => {
	return (
		<div className="h-[63px]">
			<ul className="w-screen px-4 py-2 flex font-medium justify-between bg-white items-center fixed top-0 z-50 shadow-lg">
				<div className="flex items-center gap-3">
					<button
						className={`${window.innerWidth > 1280 ? 'hidden' : 'block'} rounded-full p-2 text-3xl hover:bg-slate-200 active:bg-slate-300`}
						onClick={() => setOpen((prev) => !prev)}
					>
						<FiMenu />
					</button>
					<Link to="/" className="flex items-center gap-2">
						<img src={logo} alt="corm-logo" className="w-10"/>
						<li className="text-3xl font-bold">CoRM</li>
					</Link>
				</div>
				<div className="flex gap-2">
					<li className="px-4 py-2 hover:bg-slate-900 hover:text-white rounded-md cursor-pointer border-2 border-slate-900">
						Student
					</li>
					{/* <li className='px-4 py-2 hover:bg-slate-900 hover:text-white rounded-md cursor-pointer border-2 border-slate-900'>Organization</li> */}
				</div>
			</ul>
		</div>
	);
};

export default Header;

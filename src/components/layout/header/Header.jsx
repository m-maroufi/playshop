import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { BsFillMoonFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="font-yekan fixed top-0 left-0 right-0 w-full z-50 bg-darkClr">
			<div className="px-2 xl:px-0 xl:container mx-auto w-full">
				<nav className="h-16 flex items-center justify-between relative ">
					<button
						className="flex items-center justify-center p-2 md:hidden"
						onClick={e => setOpen(!open)}>
						<CgMenu className="text-white" size={24} />
					</button>
					<Link className=" flex items-center w-[45px] md:w-[55px] h-[34px] mr-3 md:mr-0 md:ml-6">
						<img
							className="w-full inline-block"
							src={import.meta.env.BASE_URL + "assets/images/logo/logo.png"}
							alt="logo"
						/>
					</Link>
					<div
						className={`navbar flex items-center gap-2 *:py-1 absolute top-full bg-black flex-col w-full *:block *:text-right bg-black/15 backdrop-blur-md *:w-full py-2 *:px-4 md:*:px-2 md:*:w-fit rounded-b-xl transition-all duration-300  md:static md:flex-row md:bg-transparent ${
							open
								? "opacity-100 translate-y-0 scale-100 select-auto visible"
								: "opacity-0 -translate-y-4 scale-95 select-none invisible md:opacity-100 md:translate-y-0 md:scale-100 md:select-auto md:visible"
						}`}>
						<Link
							to="/home"
							className="text-textClr text-lg hover:text-white hover:bg-black/20 md:hover:bg-transparent font-medium">
							خانه
						</Link>
						<Link
							to="/shop"
							className="text-textClr text-lg hover:text-white hover:bg-black/20 md:hover:bg-transparent font-medium">
							فروشگاه
						</Link>
						<Link
							to="/about"
							className="text-textClr text-lg hover:bg-black/20 hover:text-white md:hover:bg-transparent font-medium">
							درباره ما
						</Link>
						<Link
							to="/contactus"
							className="text-textClr text-lg hover:text-white hover:bg-black/20 md:hover:bg-transparent font-medium">
							تماس با ما
						</Link>
						<Link
							to="/blogs"
							className="text-textClr text-lg hover:text-white hover:bg-black/20 md:hover:bg-transparent font-medium">
							وبلاگ
						</Link>
					</div>
					<div className="left md:mr-auto flex items-center gap-2 md:gap-6">
						<div className="icons flex items-center gap-0 md:gap-1">
							<button className="flex items-center justify-center p-2">
								<CgSearch className="text-white" size={24} />
							</button>
							<button className="flex items-center justify-center p-2">
								<BsFillMoonFill className="text-white" size={24} />
							</button>
						</div>
						<Link className="text-white bg-primaryClr px-2  md:px-6 py-2 rounded-md max-w-[8rem] flex text-center text-nowrap justify-center items-center font-[700]">
							<span className="hidden md:block">حساب کاربری</span>
							<FaUser className="text-white md:hidden" size={24} />
						</Link>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;

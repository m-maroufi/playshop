import React from "react";
import { Link } from "react-router-dom";

const NewPlay = () => {
	return (
		<div className="px-2 xl:container mx-auto mt-4">
			<div className="title mb-4 flex items-center justify-between">
				<h1 className="text-sm md:text-2xl font-bold text-gray-50">
					جدیدترین بازی های فروشگاه
				</h1>
				<div className="fitler md:ml-4">
					<select
						name="filterSort"
						id="filterSort"
						className="bg-[#242731] text-textClr text-xs md:text-base px-4 md:px-8 py-2 text-right rounded-xl">
						<option value="newest">پرفروش ترین ها</option>
						<option value="oldest">قدیمی ترین</option>
						<option value="price">ارزان ترین ها</option>
					</select>
				</div>
			</div>
			<div className="gridContainer min-h-24 my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				<div className="box max-w-[282px] min-h-[470px] overflow-hidden  mx-auto rounded-[28px] group hover:scale-105 transition-transform ">
					<Link
						to="/game"
						className="w-full h-[200px] overflow-hidden flex items-center justify-center">
						<img
							className="w-full h-full object-cover"
							src={import.meta.env.BASE_URL + "/assets/images/play/1.png"}
							alt=""
						/>
					</Link>
					<div className="body px-4 py-4 text-white font-light text-lg bg-gradient-to-t from-secondaryClr/15 from-[0%] to-darkClr/50 to-40% backdrop-blur-md h-[190px]">
						<Link
							to="/game"
							className=" line-clamp-2 block py-3 text-xl leading-10">
							بازی FIFA 23 برای کنسول پلی استیشن ۵
						</Link>
						<p className="text-secondaryClr font-medium mt-5">
							<span>قیمت : </span>
							<span>40000</span>
							<span>هزار تومان</span>
						</p>
					</div>
					<div className="btns h-[80px] bg-[#242731]/80 overflow-hidden rounded-b-[28px] flex items-center px-4  relative">
						<div className="flex gap-2 items-center">
							<span className="w-3 h-3 bg-primaryClr rounded-full block"></span>
							<span className="text-[13px] text-textMeutedClr font-normal">
								100 نفر خرید کرده اند
							</span>
						</div>
						<button className="absolute left-0 bottom-0 h-16 w-16 bg-secondaryClr/15 text-secondaryClr font-medium rounded-md group-hover:bg-secondaryClr group-hover:text-white">
							خرید
						</button>
					</div>
				</div>
				<div className="box max-w-[282px] min-h-[470px] overflow-hidden  mx-auto rounded-[28px] group hover:scale-105 transition-transform">
					<Link
						to="/game"
						className="w-full h-[200px] overflow-hidden flex items-center justify-center">
						<img
							className="w-full h-full object-cover"
							src={import.meta.env.BASE_URL + "/assets/images/play/2.png"}
							alt=""
						/>
					</Link>
					<div className="body px-4 py-4 text-white font-light text-lg bg-gradient-to-t from-secondaryClr/15 from-[0%] to-darkClr/50 to-40% backdrop-blur-md h-[190px]">
						<Link
							to="/game"
							className=" line-clamp-2 block py-3 text-xl leading-10">
							بازی Call Of Duty برای کنسول پلی استیشن ۵
						</Link>
						<p className="text-secondaryClr font-medium mt-5">
							<span>قیمت : </span>
							<span>40000</span>
							<span>هزار تومان</span>
						</p>
					</div>
					<div className="btns h-[80px] bg-[#242731]/80 overflow-hidden rounded-b-[28px] flex items-center px-4  relative">
						<div className="flex gap-2 items-center">
							<span className="w-3 h-3 bg-primaryClr rounded-full block"></span>
							<span className="text-[13px] text-textMeutedClr font-normal">
								100 نفر خرید کرده اند
							</span>
						</div>
						<button className="absolute left-0 bottom-0 h-16 w-16 bg-secondaryClr/15 text-secondaryClr font-medium rounded-md group-hover:bg-secondaryClr group-hover:text-white">
							خرید
						</button>
					</div>
				</div>
				<div className="box max-w-[282px] min-h-[470px] overflow-hidden  mx-auto rounded-[28px] group hover:scale-105 transition-transform">
					<Link
						to="/game"
						className="w-full h-[200px] overflow-hidden flex items-center justify-center">
						<img
							className="w-full h-full object-cover"
							src={import.meta.env.BASE_URL + "/assets/images/play/3.png"}
							alt=""
						/>
					</Link>
					<div className="body px-4 py-4 text-white font-light text-lg bg-gradient-to-t from-secondaryClr/15 from-[0%] to-darkClr/50 to-40% backdrop-blur-md h-[190px]">
						<Link
							to="/game"
							className=" line-clamp-2 block py-3 text-xl leading-10">
							بازی Diablo 4 برای کنسول پلی استیشن ۵
						</Link>
						<p className="text-secondaryClr font-medium mt-5">
							<span>قیمت : </span>
							<span>40000</span>
							<span>هزار تومان</span>
						</p>
					</div>
					<div className="btns h-[80px] bg-[#242731]/80 overflow-hidden rounded-b-[28px] flex items-center px-4  relative">
						<div className="flex gap-2 items-center">
							<span className="w-3 h-3 bg-primaryClr rounded-full block"></span>
							<span className="text-[13px] text-textMeutedClr font-normal">
								100 نفر خرید کرده اند
							</span>
						</div>
						<button className="absolute left-0 bottom-0 h-16 w-16 bg-secondaryClr/15 text-secondaryClr font-medium rounded-md group-hover:bg-secondaryClr group-hover:text-white">
							خرید
						</button>
					</div>
				</div>
				<div className="box max-w-[282px] min-h-[470px] overflow-hidden  mx-auto rounded-[28px] group hover:scale-105 transition-transform">
					<Link
						to="/game"
						className="w-full h-[200px] overflow-hidden flex items-center justify-center">
						<img
							className="w-full h-full object-cover"
							src={import.meta.env.BASE_URL + "/assets/images/play/4.png"}
							alt=""
						/>
					</Link>
					<div className="body px-4 py-4 text-white font-light text-lg bg-gradient-to-t from-secondaryClr/15 from-[0%] to-[#242731]/20 to-40% backdrop-blur-md h-[190px]">
						<Link
							to="/game"
							className=" line-clamp-2 block py-3 text-xl leading-10">
							بازی Fortnite برای کنسول پلی استیشن ۵
						</Link>
						<p className="text-secondaryClr font-medium mt-5">
							<span>قیمت : </span>
							<span>40000</span>
							<span>هزار تومان</span>
						</p>
					</div>
					<div className="btns h-[80px] bg-[#242731]/80 overflow-hidden rounded-b-[28px] flex items-center px-4  relative">
						<div className="flex gap-2 items-center">
							<span className="w-3 h-3 bg-primaryClr rounded-full block"></span>
							<span className="text-[13px] text-textMeutedClr font-normal">
								100 نفر خرید کرده اند
							</span>
						</div>
						<button className="absolute left-0 bottom-0 h-16 w-16 bg-secondaryClr/15 text-secondaryClr font-medium rounded-md group-hover:bg-secondaryClr group-hover:text-white">
							خرید
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewPlay;

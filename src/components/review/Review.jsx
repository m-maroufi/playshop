import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";
const Review = () => {
	return (
		<div className="px-2 lg:container mx-auto text-white mb-6">
			<SectionTitle title={"جدیدترین نقد و بررسی ها"} />
			<div className="reviewContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 py-14 mt-5 gap-4">
				<div className="article flex items-center justify-center h-[500px] mx-auto overflow-hidden relative rounded-[28px] group  max-w-[340px] w-full">
					<img
						className="w-full h-full"
						src={import.meta.env.BASE_URL + "/assets/images/review/1.png"}
						alt=""
					/>
					<div className="overlay  bg-gradient-to-t from-black/20 to-black/5 absolute w-full h-full top-0 transition-all duration-200 left-0 group-hover:backdrop-blur-sm group-hover:from-black/50 group-hover:to-black/30 flex items-center justify-center">
						<div className="content text-white text-center transition-all duration-200 relative translate-y-36 group-hover:translate-y-0">
							<h3 className="font-bold text-xl my-4">
								ویدیو نقد و بررسی بازی{" "}
							</h3>
							<h2>
								<Link className="block w-full group-hover:text-secondaryClr">
									Metal Gear Solid Delta: Snake Eater
								</Link>
							</h2>
							<Link className="flex items-center justify-center w-12 h-12 bg-slate-800/70 rounded-full mx-auto mt-6 group-hover:bg-secondaryClr">
								<FaPlay className="text-white" size={24} />
							</Link>
						</div>
					</div>
				</div>
				<div className="article flex items-center justify-center h-[500px] mx-auto overflow-hidden relative rounded-[28px] group  max-w-[340px] w-full">
					<img
						className="w-full h-full"
						src={import.meta.env.BASE_URL + "/assets/images/review/3.png"}
						alt=""
					/>
					<div className="overlay  bg-gradient-to-t from-black/20 to-black/5 absolute w-full h-full top-0 transition-all duration-200 left-0 group-hover:backdrop-blur-sm group-hover:from-black/50 group-hover:to-black/30 flex items-center justify-center">
						<div className="content text-white text-center transition-all duration-200 relative translate-y-36 group-hover:translate-y-0">
							<h3 className="font-bold text-xl my-4">
								ویدیو نقد و بررسی بازی{" "}
							</h3>
							<h2>
								<Link className="block w-full group-hover:text-secondaryClr">
									Alan Wake 2
								</Link>
							</h2>
							<Link className="flex items-center justify-center w-12 h-12 bg-slate-800/70 rounded-full mx-auto mt-6 group-hover:bg-secondaryClr">
								<FaPlay className="text-white" size={24} />
							</Link>
						</div>
					</div>
				</div>
				<div className="article flex items-center justify-center h-[500px] mx-auto overflow-hidden relative rounded-[28px] group max-w-[340px] w-full">
					<img
						className="w-full h-full"
						src={import.meta.env.BASE_URL + "/assets/images/review/4.png"}
						alt=""
					/>
					<div className="overlay  bg-gradient-to-t from-black/20 to-black/5 absolute w-full h-full top-0 transition-all duration-200 left-0 group-hover:backdrop-blur-sm group-hover:from-black/50 group-hover:to-black/30 flex items-center justify-center">
						<div className="content text-white text-center transition-all duration-200 relative translate-y-36 group-hover:translate-y-0">
							<h3 className="font-bold text-xl my-4">
								ویدیو نقد و بررسی بازی{" "}
							</h3>
							<h2>
								<Link className="block w-full group-hover:text-secondaryClr">
									The Last of Us Part 1
								</Link>
							</h2>
							<Link className="flex items-center justify-center w-12 h-12 bg-slate-800/70 rounded-full mx-auto mt-6 group-hover:bg-secondaryClr">
								<FaPlay className="text-white" size={24} />
							</Link>
						</div>
					</div>
				</div>
			</div>
            <div className="flex items-center justify-center">
                <Link className="font-medium text-xl py-3 px-6 rounded-md bg-gray-300/10 hover:bg-primaryClr transition-colors">مشاهده بیشتر</Link>
            </div>
		</div>
	);
};

export default Review;

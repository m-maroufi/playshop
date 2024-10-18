import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdShareAlt } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { FaStop } from "react-icons/fa";
import ReactPlayer from "react-player/lazy";
const Trailer = () => {
	const [video, setVideo] = useState();
	const [play, setPlay] = useState(false);
	const videoRef = useRef();
	const playHandler = () => {
		if (!play) {
			video?.play();
			setPlay(true);
			return;
		}
		video.pause();
		// video.currentTime = 0;
		setPlay(false);
	};

	useEffect(() => {
		setVideo(videoRef.current);
	}, []);

	return (
		<div className="px-2 lg:container mx-auto text-white mb-6 mt-16">
			<SectionTitle title={"تریلر بازی ها"} />
			<div className="bigTrailer rounded-3xl bg-gray-200/5 mb-14 ">
				<div className="video max-h-[450px] md:h-[450px]  flex items-center justify-center  w-full  mb-4 relative rounded-3xl overflow-hidden group">
					<video
						className="w-full h-full block object-cover  rounded-3xl border border-gray-300/15"
						controls
						ref={videoRef}
						muted>
						<source
							className="w-full h-full"
							src={import.meta.env.BASE_URL + "assets/video/1.mp4"}
							type="video/mp4"
						/>
					</video>
					<div
						className={`overlay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center transition duration-200 ${
							play
								? "opacity-0 invisible -z-30 group-hover:opacity-100 group-hover:visible group-hover:z-30"
								: ""
						}`}>
						<button
							className="w-16 h-16 flex items-center justify-center rounded-3xl bg-black/70 backdrop-blur-md text-white "
							onClick={e => playHandler(e)}>
							{play ? (
								<FaStop className="text-secondaryClr" size={24} />
							) : (
								<FaPlay className="text-secondaryClr" size={24} />
							)}
						</button>
					</div>
				</div>
				<div className="des mt-4 p-8 ">
					<h2 className="mb-5">
						<Link className="block py-2 w-full text-sm md:text-lg lg:text-2xl line-clamp-1">
							تریلر رسمی بازی Metal Gear Solid Delta: Snake Eater
						</Link>
					</h2>
					<p className=" leading-8 line-clamp-3 text-sm md:text-lg mb-4">
						شایعه ساخت Metal Gear Solid Delta: Snake Eater قوت گرفت. طبق گفته ها
						و نشریات وابسته به استودیو های سازنده این عنوان خاطره انگیز، خبر های
						خوبی از ساخت نسخه ریمیک و یا همان بهبود یافته در راه است.
					</p>
				</div>
				<div className="min-h-[80px] border-t-2 border-t-gray-100/5 flex items-center px-8 gap-4 py-4">
					<div className="actions flex flex-wrap gap-4 max-w-full md:max-w-[60%] w-full justify-between items-center">
						<button className="text-white flex items-center max-w-fit text-sm gap-2 group hover:text-secondaryClr font-bold">
							<span>
								<IoIosAddCircleOutline size={24} className="text-current" />
							</span>
							<span>افزودن به لیست علاقه مندی ها</span>
						</button>
						<button className="text-white flex items-center max-w-fit text-sm gap-2 group hover:text-secondaryClr font-bold">
							<span>
								<IoMdShareAlt size={24} className="text-current" />
							</span>
							<span>اشتراک گذاری</span>
						</button>
						<button className="text-white flex items-center max-w-fit text-sm gap-2 group hover:text-secondaryClr font-bold">
							<span>
								<AiOutlineLike size={24} className="text-current" />
							</span>
							<span>پسندیدم </span>
						</button>
					</div>
					<button className="text-white mr-auto flex items-center justify-center rounded-lg text-sm gap-2 group hover:text-secondaryClr font-bold w-10 h-10 bg-gray-200/5">
						<IoIosMore size={24} className="text-current" />
					</button>
				</div>
			</div>
			<div className="trailerCardContainer mb-16 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				<div className="card max-w-[290px] w-full min-h-36 bg-gray-400/5 rounded-[24px] mx-auto overflow-hidden group hover:bg-gray-500/10 transition-colors">
					<div className="flex items-center justify-center w-full h-[170px] relative  overflow-hidden">
						<img
							src={import.meta.env.BASE_URL + "assets/images/trailer/1.png"}
							alt=""
						/>
						<div className="time absolute top-4 ring-2 right-4 bg-black/70 py-1 text-[12px] px-3 rounded-2xl">
							08:32
						</div>
						<div
							className="timeLines bg-gray-200/50 absolute z-10 bottom-0 left-0 w-full h-1"
							dir="ltr">
							<div className="w-1/4 bg-secondaryClr h-full transition-all"></div>
						</div>
						<div
							className={`overlay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition duration-200 w-full h-full bg-black/50 -z-20 opacity-0 invisible select-none group-hover:opacity-100 group-hover:visible group-hover:select-auto group-hover:z-20 `}>
							<button className="w-12 h-12 flex items-center justify-center rounded-3xl bg-black/70 backdrop-blur-md text-white ">
								<FaPlay className="text-secondaryClr" size={24} />
							</button>
						</div>
					</div>
					<div className="body p-6">
						<Link className="block w-full py-1 line-clamp-2 min-h-[55px]">
							تریلر نسخه جدید Call Of Duty Mobile
						</Link>
						<div className="my-4 flex items-center justify-between gap-4">
							<div className="flex items-center gap-2">
								<span className="w-4 h-4 rounded-full bg-blue-700 block"></span>
								<span className="text-[14px] text-textMeutedClr">
									23 بازدید
								</span>
							</div>
							<div className="flex items-center gap-2 ml-auto">
								<span className="w-4 h-4 rounded-full bg-emerald-300 block"></span>
								<span className="text-[14px] text-textMeutedClr">
									3 روز پیش
								</span>
							</div>
						</div>
						<div className="flex items-center gap-2 mt-5">
							<img
								className="block w-[30px] h-[30px] rounded-full"
								src={import.meta.env.BASE_URL + "assets/images/trailer/1.png"}
								alt=""
							/>
							<div className="text-[14px]">منتشر کننده : آرمان</div>
						</div>
					</div>
				</div>
				<div className="card max-w-[290px] w-full min-h-36 bg-gray-400/5 rounded-[24px] mx-auto overflow-hidden group hover:bg-gray-500/10 transition-colors">
					<div className="flex items-center justify-center w-full h-[170px] relative  overflow-hidden">
						<img
							src={import.meta.env.BASE_URL + "assets/images/trailer/2.png"}
							alt=""
						/>
						<div className="time absolute top-4 ring-2 right-4 bg-black/70 py-1 text-[12px] px-3 rounded-2xl">
							08:32
						</div>
						<div
							className="timeLines bg-gray-200/50 absolute z-10 bottom-0 left-0 w-full h-1"
							dir="ltr">
							<div className="w-1/4 bg-secondaryClr h-full transition-all"></div>
						</div>
						<div
							className={`overlay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition duration-200 w-full h-full bg-black/50 -z-20 opacity-0 invisible select-none group-hover:opacity-100 group-hover:visible group-hover:select-auto group-hover:z-20 `}>
							<button className="w-12 h-12 flex items-center justify-center rounded-3xl bg-black/70 backdrop-blur-md text-white ">
								<FaPlay className="text-secondaryClr" size={24} />
							</button>
						</div>
					</div>
					<div className="body p-6">
						<Link className="block w-full py-1 line-clamp-2 min-h-[55px]">
							تریلر جذاب بازی Marathon
						</Link>
						<div className="my-4 flex items-center justify-between gap-4">
							<div className="flex items-center gap-2">
								<span className="w-4 h-4 rounded-full bg-blue-700 block"></span>
								<span className="text-[14px] text-textMeutedClr">
									23 بازدید
								</span>
							</div>
							<div className="flex items-center gap-2 ml-auto">
								<span className="w-4 h-4 rounded-full bg-emerald-300 block"></span>
								<span className="text-[14px] text-textMeutedClr">
									3 روز پیش
								</span>
							</div>
						</div>
						<div className="flex items-center gap-2 mt-5">
							<img
								className="block w-[30px] h-[30px] rounded-full"
								src={import.meta.env.BASE_URL + "assets/images/trailer/1.png"}
								alt=""
							/>
							<div className="text-[14px]">منتشر کننده : آرمان</div>
						</div>
					</div>
				</div>
				<div className="card max-w-[290px] w-full min-h-36 bg-gray-400/5 rounded-[24px] mx-auto overflow-hidden group hover:bg-gray-500/10 transition-colors">
					<div className="flex items-center justify-center w-full h-[170px] relative  overflow-hidden">
						<img
							src={import.meta.env.BASE_URL + "assets/images/trailer/3.png"}
							alt=""
						/>
						<div className="time absolute top-4 ring-2 right-4 bg-black/70 py-1 text-[12px] px-3 rounded-2xl">
							08:32
						</div>
						<div
							className="timeLines bg-gray-200/50 absolute z-10 bottom-0 left-0 w-full h-1"
							dir="ltr">
							<div className="w-1/4 bg-secondaryClr h-full transition-all"></div>
						</div>
						<div
							className={`overlay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition duration-200 w-full h-full bg-black/50 -z-20 opacity-0 invisible select-none group-hover:opacity-100 group-hover:visible group-hover:select-auto group-hover:z-20 `}>
							<button className="w-12 h-12 flex items-center justify-center rounded-3xl bg-black/70 backdrop-blur-md text-white ">
								<FaPlay className="text-secondaryClr" size={24} />
							</button>
						</div>
					</div>
					<div className="body p-6">
						<Link className="block w-full py-1 line-clamp-2 min-h-[55px]">
							اوین لانچ تریلر سینمایی و لایو اکشن بازی Diablo 4
						</Link>
						<div className="my-4 flex items-center justify-between gap-4">
							<div className="flex items-center gap-2">
								<span className="w-4 h-4 rounded-full bg-blue-700 block"></span>
								<span className="text-[14px] text-textMeutedClr">
									23 بازدید
								</span>
							</div>
							<div className="flex items-center gap-2 ml-auto">
								<span className="w-4 h-4 rounded-full bg-emerald-300 block"></span>
								<span className="text-[14px] text-textMeutedClr">
									3 روز پیش
								</span>
							</div>
						</div>
						<div className="flex items-center gap-2 mt-5">
							<img
								className="block w-[30px] h-[30px] rounded-full"
								src={import.meta.env.BASE_URL + "assets/images/trailer/1.png"}
								alt=""
							/>
							<div className="text-[14px]">منتشر کننده : آرمان</div>
						</div>
					</div>
				</div>

				<div className="card max-w-[290px] w-full min-h-36 bg-gray-400/5 rounded-[24px] mx-auto overflow-hidden group hover:bg-gray-500/10 transition-colors">
					<div className="flex items-center justify-center w-full h-[170px] relative  overflow-hidden">
						<img
							src={import.meta.env.BASE_URL + "assets/images/trailer/4.png"}
							alt=""
						/>
						<div className="time absolute top-4 ring-2 right-4 bg-black/70 py-1 text-[12px] px-3 rounded-2xl">
							08:32
						</div>
						<div
							className="timeLines bg-gray-200/50 absolute z-10 bottom-0 left-0 w-full h-1"
							dir="ltr">
							<div className="w-1/4 bg-secondaryClr h-full transition-all"></div>
						</div>
						<div
							className={`overlay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition duration-200 w-full h-full bg-black/50 -z-20 opacity-0 invisible select-none group-hover:opacity-100 group-hover:visible group-hover:select-auto group-hover:z-20 `}>
							<button className="w-12 h-12 flex items-center justify-center rounded-3xl bg-black/70 backdrop-blur-md text-white ">
								<FaPlay className="text-secondaryClr" size={24} />
							</button>
						</div>
					</div>
					<div className="body p-6">
						<Link className="block w-full py-1 line-clamp-2 min-h-[55px]">
							نخستین تریلر گیم‌پلی بازی Marvel’s Spider-Man 2 منتشر شد.
						</Link>
						<div className="my-4 flex items-center justify-between gap-4">
							<div className="flex items-center gap-2">
								<span className="w-4 h-4 rounded-full bg-blue-700 block"></span>
								<span className="text-[14px] text-textMeutedClr">
									23 بازدید
								</span>
							</div>
							<div className="flex items-center gap-2 ml-auto">
								<span className="w-4 h-4 rounded-full bg-emerald-300 block"></span>
								<span className="text-[14px] text-textMeutedClr">
									3 روز پیش
								</span>
							</div>
						</div>
						<div className="flex items-center gap-2 mt-5">
							<img
								className="block w-[30px] h-[30px] rounded-full"
								src={import.meta.env.BASE_URL + "assets/images/trailer/1.png"}
								alt=""
							/>
							<div className="text-[14px]">منتشر کننده : آرمان</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center mb-16">
				<Link className="font-medium text-xl py-3 px-6 rounded-md bg-gray-300/10 hover:bg-primaryClr transition-colors">
					مشاهده بیشتر
				</Link>
			</div>
		</div>
	);
};

export default Trailer;

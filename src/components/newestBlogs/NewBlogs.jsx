import React, { useRef, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import SectionTitle from "../sectionTitle/SectionTitle";

const NewBlogs = () => {
	const swiperBlogsRef = useRef();

	return (
		<div className="px-2 lg:container mx-auto text-white mb-6">
            <SectionTitle title={'جدیدترین مقالات'} />
			<div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:gap-14 mt-16">
				<div className="blogSlider">
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 3500,
							disableOnInteraction: false,
						}}
						onBeforeInit={swiper => {
							swiperBlogsRef.current = swiper;
						}}
						modules={[Autoplay, Pagination, Navigation]}
						className="mySwiper h-full ">
						<SwiperSlide className="w-full  min-h-[500px]  rounded-2xl overflow-hidden">
							<img
								className=" w-full h-full"
								src={import.meta.env.BASE_URL + "/assets/images/blogs/big1.jpg"}
								alt=""
							/>
							<img
								className=" absolute -bottom-24 left-1/2 -translate-x-1/2"
								src={import.meta.env.BASE_URL + "/assets/images/img.png"}
								alt=""
							/>
							<div className=" absolute w-full h-full bg-gradient-to-t from-black/50 to-black/10 top-0 left-0 flex justify-end gap-4 p-4 flex-col">
								<div className="tags flex items-center gap-2">
									<Link className="bg-primaryClr/20 px-2 py-1 text-[13px] md:text-sm rounded-md">
										سبک پازل
									</Link>
									<Link className="bg-primaryClr/20 px-2 py-1 text-[13px] rounded-md md:text-sm">
										بازی های فکری
									</Link>
								</div>
								<h3>
									<Link className="font-medium md:text-2xl">
										بازی Hello Neighbor منتشر شد
									</Link>
								</h3>
								<p className="text-sm font-light line-clamp-3 md:text-lg">
									سلام همسایه از خاص ترین، زیباترین و محبوب ترین بازیهای
									ماجراجویی – ترسناک با ساخت فوق العاده از tinyBuild برای
									اندروید است که دقایقی پیش ...
								</p>
								<Link className="bg-primaryClr py-2 px-4 rounded-md text-white w-fit mb-5">
									مشاهده مقاله
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide className="w-full  min-h-[500px]  rounded-2xl overflow-hidden">
							<img
								className=" w-full h-full"
								src={import.meta.env.BASE_URL + "/assets/images/blogs/big1.jpg"}
								alt=""
							/>
							<img
								className=" absolute -bottom-24 left-1/2 -translate-x-1/2"
								src={import.meta.env.BASE_URL + "/assets/images/img.png"}
								alt=""
							/>
							<div className=" absolute w-full h-full bg-gradient-to-t from-black/50 to-black/10 top-0 left-0 flex justify-end gap-4 p-4 flex-col">
								<div className="tags flex items-center gap-2">
									<Link className="bg-primaryClr/20 px-2 py-1 text-[13px] md:text-sm rounded-md">
										سبک پازل
									</Link>
									<Link className="bg-primaryClr/20 px-2 py-1 text-[13px] rounded-md md:text-sm">
										بازی های فکری
									</Link>
								</div>
								<h3>
									<Link className="font-medium md:text-2xl">
										بازی Hello Neighbor منتشر شد
									</Link>
								</h3>
								<p className="text-sm font-light line-clamp-3 md:text-lg">
									سلام همسایه از خاص ترین، زیباترین و محبوب ترین بازیهای
									ماجراجویی – ترسناک با ساخت فوق العاده از tinyBuild برای
									اندروید است که دقایقی پیش ...
								</p>
								<Link className="bg-primaryClr py-2 px-4 rounded-md text-white w-fit mb-5">
									مشاهده مقاله
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide className="w-full  min-h-[500px]  rounded-2xl overflow-hidden">
							<img
								className=" w-full h-full"
								src={import.meta.env.BASE_URL + "/assets/images/blogs/big1.jpg"}
								alt=""
							/>
							<img
								className=" absolute -bottom-24 left-1/2 -translate-x-1/2"
								src={import.meta.env.BASE_URL + "/assets/images/img.png"}
								alt=""
							/>
							<div className=" absolute w-full h-full bg-gradient-to-t from-black/50 to-black/10 top-0 left-0 flex justify-end gap-4 p-4 flex-col">
								<div className="tags flex items-center gap-2">
									<Link className="bg-primaryClr/20 px-2 py-1 text-[13px] md:text-sm rounded-md">
										سبک پازل
									</Link>
									<Link className="bg-primaryClr/20 px-2 py-1 text-[13px] rounded-md md:text-sm">
										بازی های فکری
									</Link>
								</div>
								<h3>
									<Link className="font-medium md:text-2xl">
										بازی Hello Neighbor منتشر شد
									</Link>
								</h3>
								<p className="text-sm font-light line-clamp-3 md:text-lg">
									سلام همسایه از خاص ترین، زیباترین و محبوب ترین بازیهای
									ماجراجویی – ترسناک با ساخت فوق العاده از tinyBuild برای
									اندروید است که دقایقی پیش ...
								</p>
								<Link className="bg-primaryClr py-2 px-4 rounded-md text-white w-fit mb-5">
									مشاهده مقاله
								</Link>
							</div>
						</SwiperSlide>
						<button
							className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-800 absolute left-4 top-14 -translate-y-1/2 z-20 active:bg-primaryClr group"
							onClick={() => swiperBlogsRef.current?.slideNext()}>
							<FaArrowLeftLong className="text-gray-800 group-active:text-white" />
						</button>
						<button
							className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-800 absolute left-20 top-14 -translate-y-1/2 z-20 active:bg-primaryClr group"
							onClick={() => swiperBlogsRef.current?.slidePrev()}>
							<FaArrowLeftLong className="text-gray-800 group-active:text-white rotate-180" />
						</button>
					</Swiper>
				</div>
				<div className="items w-full mt-8 md:mt-3">
					<ul className="list w-full space-y-5 grid grid-cols-1 sm:grid-cols-2 md:block">
						<li className="w-full bg-[#242731]/50 min-h-[240px] rounded-xl p-4 flex gap-4 group hover:bg-primaryClr/15 transition flex-col max-w-[280px] mx-auto md:flex-row md:max-w-full">
							<Link className="max-w-[280px] w-full h-full flex items-center justify-center">
								<img
									className="max-w-full "
									src={import.meta.env.BASE_URL + "/assets/images/blogs/1.png"}
									alt=""
								/>
							</Link>
							<div className="flex flex-col">
								<div className="tags flex items-center gap-2">
									<Link className="bg-primaryClr/15 px-2 py-1 text-[13px] rounded-md text-primaryClr">
										سبک پازل
									</Link>
									<Link className="bg-primaryClr/15 px-2 py-1 text-[13px] rounded-md text-primaryClr">
										بازی های فکری
									</Link>
								</div>
								<h3 className="my-3">
									<Link className="block w-full leading-8 line-clamp-2">
										بازی NBA 2K 2023 رکورد پرفروش ترین بازی ورزشی را شکست.
									</Link>
								</h3>
								<div className="flex items-center gap-3">
									<span className=" block w-4 h-4 rounded-full bg-secondaryClr"></span>
									<span className="text-[14px] text-textMeutedClr">
										40 نفر مقاله را خوانده اند
									</span>
								</div>
								<Link className="py-4 px-6 bg-slate-800 w-fit mt-4 rounded-xl group-hover:bg-primaryClr group-hover:text-white">
									مشاهده مقاله
								</Link>
							</div>
						</li>
						<li className="w-full bg-[#242731]/50 min-h-[240px] rounded-xl p-4 flex gap-4 group hover:bg-primaryClr/15 transition flex-col max-w-[280px] mx-auto md:flex-row md:max-w-full">
							<Link className="max-w-[280px] w-full h-full flex items-center justify-center">
								<img
									className="max-w-full "
									src={import.meta.env.BASE_URL + "/assets/images/blogs/1.png"}
									alt=""
								/>
							</Link>
							<div className="flex flex-col">
								<div className="tags flex items-center gap-2">
									<Link className="bg-primaryClr/15 px-2 py-1 text-[13px] rounded-md text-primaryClr">
										سبک پازل
									</Link>
									<Link className="bg-primaryClr/15 px-2 py-1 text-[13px] rounded-md text-primaryClr">
										بازی های فکری
									</Link>
								</div>
								<h3 className="my-3">
									<Link className="block w-full leading-8 line-clamp-2">
										بازی NBA 2K 2023 رکورد پرفروش ترین بازی ورزشی را شکست.
									</Link>
								</h3>
								<div className="flex items-center gap-3">
									<span className=" block w-4 h-4 rounded-full bg-secondaryClr"></span>
									<span className="text-[14px] text-textMeutedClr">
										40 نفر مقاله را خوانده اند
									</span>
								</div>
								<Link className="py-4 px-6 bg-slate-800 w-fit mt-4 rounded-xl group-hover:bg-primaryClr group-hover:text-white">
									مشاهده مقاله
								</Link>
							</div>
						</li>
						<li className="w-full bg-[#242731]/50 min-h-[240px] rounded-xl p-4 flex gap-4 group hover:bg-primaryClr/15 transition flex-col max-w-[280px] mx-auto md:flex-row md:max-w-full">
							<Link className="max-w-[280px] w-full h-full flex items-center justify-center">
								<img
									className="max-w-full "
									src={import.meta.env.BASE_URL + "/assets/images/blogs/1.png"}
									alt=""
								/>
							</Link>
							<div className="flex flex-col">
								<div className="tags flex items-center gap-2">
									<Link className="bg-primaryClr/15 px-2 py-1 text-[13px] rounded-md text-primaryClr">
										سبک پازل
									</Link>
									<Link className="bg-primaryClr/15 px-2 py-1 text-[13px] rounded-md text-primaryClr">
										بازی های فکری
									</Link>
								</div>
								<h3 className="my-3">
									<Link className="block w-full leading-8 line-clamp-2">
										بازی NBA 2K 2023 رکورد پرفروش ترین بازی ورزشی را شکست.
									</Link>
								</h3>
								<div className="flex items-center gap-3">
									<span className=" block w-4 h-4 rounded-full bg-secondaryClr"></span>
									<span className="text-[14px] text-textMeutedClr">
										40 نفر مقاله را خوانده اند
									</span>
								</div>
								<Link className="py-4 px-6 bg-slate-800 w-fit mt-4 rounded-xl group-hover:bg-primaryClr group-hover:text-white">
									مشاهده مقاله
								</Link>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NewBlogs;

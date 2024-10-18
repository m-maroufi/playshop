import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

// import required modules
import {
	FreeMode,
	Navigation,
	Thumbs,
	EffectFade,
	Autoplay,
} from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";
const Banner = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const swiperRef = useRef();

	return (
		<div className="banner mt-14 min-h-20 px-2 xl:px-0 xl:container mx-auto w-full h-full">
			<Swiper
				loop={true}
				spaceBetween={10}
				effect={"fade"}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				thumbs={{
					swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
				}}
				modules={[FreeMode, Thumbs, EffectFade, Autoplay]}
				className="mySwiper2 w-full overflow-visible">
				<SwiperSlide className="w-full min-h-fit">
					<div className="item py-4 flex items-center justify-center w-full relative">
						<img
							className="object-cover min-h-[25rem] w-full"
							src={import.meta.env.BASE_URL + "/assets/images/slider/1.png"}
							alt=""
						/>
						<div className="overlay absolute bottom-0 left-0 md:-bottom-24 md:left-28 bg-black/50 backdrop-blur-[5px] z-40 h-fit w-{90%}  md:w-1/3  rounded-none  md:rounded-2xl py-4 px-4 text-white select-auto ">
							<div className="w-fit py-2 px-3 font-bold rounded-2xl bg-secondaryClr/20 text-secondaryClr text-sm">
								مقاله جدید
							</div>
							<h1 className="text-2xl font-bold py-3 mt-3">
								Call of Duty Warzone
							</h1>
							<p className="text-[15px] font-light line-clamp-3 ">
								مانند دیگر بازی‌های بتل رویال سوار یک هواپیما خواهید شد و روی
								نقشه فرود خواهید آمد. وجه تفاوت این بازی نسبت به بقیه در تعداد
								بازیکنان آن است.
							</p>
							<div className="flex items-center justify-between mt-4">
								<div className="min-w-[5rem] pl-1 h-8  bg-primaryClr rounded-2xl flex items-center gap-2">
									<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
										<svg
											width="26"
											height="26"
											viewBox="0 0 26 26"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<g clipPath="url(#clip0_1_4620)">
												<path
													d="M26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26C20.1797 26 26 20.1797 26 13Z"
													fill="white"
												/>
												<path
													opacity="0.4"
													d="M6.33325 13.6467V9.65999C6.33325 7.81999 7.82659 6.33333 9.66659 6.33333H16.3332C18.1732 6.33333 19.6665 7.81999 19.6665 9.65999V14.3133C19.6665 16.1467 18.1732 17.6333 16.3332 17.6333H15.3332C15.1265 17.6333 14.9265 17.7333 14.7999 17.9L13.7999 19.2267C13.3599 19.8133 12.6399 19.8133 12.1999 19.2267L11.1999 17.9C11.0932 17.7533 10.8532 17.6333 10.6665 17.6333H9.66659C7.82659 17.6333 6.33325 16.1467 6.33325 14.3133V13.6467Z"
													fill="#6C5DD3"
												/>
												<path
													d="M16.3335 10.8333H9.66675C9.39341 10.8333 9.16675 10.6067 9.16675 10.3333C9.16675 10.06 9.39341 9.83333 9.66675 9.83333H16.3335C16.6068 9.83333 16.8335 10.06 16.8335 10.3333C16.8335 10.6067 16.6068 10.8333 16.3335 10.8333Z"
													fill="#6C5DD3"
												/>
												<path
													d="M13.6668 14.1667H9.66675C9.39341 14.1667 9.16675 13.94 9.16675 13.6667C9.16675 13.3933 9.39341 13.1667 9.66675 13.1667H13.6668C13.9401 13.1667 14.1668 13.3933 14.1668 13.6667C14.1668 13.94 13.9401 14.1667 13.6668 14.1667Z"
													fill="#6C5DD3"
												/>
											</g>
											<defs>
												<clipPath id="clip0_1_4620">
													<rect width="26" height="26" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</div>
									<span className="text-[12px] font-light">20 نظر</span>
								</div>
								<button className="bg-primaryClr w-14 h-14 rounded-br-lg rounded-bl-3xl rounded-tr-xl rounded-tl-md flex items-center justify-center">
									<svg
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M15.9998 3.66707C6.75046 3.66707 3.66646 6.75107 3.66646 16.0004C3.66646 25.2497 6.75046 28.3337 15.9998 28.3337C25.2491 28.3337 28.3331 25.2497 28.3331 16.0004C28.3331 6.75107 25.2491 3.66707 15.9998 3.66707Z"
											stroke="white"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M17.9224 11.3715C17.9224 11.3715 13.2744 14.5608 13.2744 16.0008C13.2744 17.4408 17.9224 20.6275 17.9224 20.6275"
											stroke="white"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="w-full min-h-fit">
					<div className="item py-4 flex items-center justify-center w-full relative">
						<img
							className="object-cover min-h-[25rem] w-full"
							src={import.meta.env.BASE_URL + "/assets/images/slider/1.png"}
							alt=""
						/>
						<div className="overlay absolute bottom-0 left-0 md:-bottom-24 md:left-28 bg-black/50 backdrop-blur-[5px] z-40 h-fit w-{90%}  md:w-1/3  rounded-none  md:rounded-2xl py-4 px-4 text-white select-auto ">
							<div className="w-fit py-2 px-3 font-bold rounded-2xl bg-secondaryClr/20 text-secondaryClr text-sm">
								مقاله جدید
							</div>
							<h1 className="text-2xl font-bold py-3 mt-3">
								بازی Fortnite  ۵
							</h1>
							<p className="text-[15px] font-light line-clamp-3 ">
								مانند دیگر بازی‌های بتل رویال سوار یک هواپیما خواهید شد و روی
								نقشه فرود خواهید آمد. وجه تفاوت این بازی نسبت به بقیه در تعداد
								بازیکنان آن است.
							</p>
							<div className="flex items-center justify-between mt-4">
								<div className="min-w-[5rem] pl-1 h-8  bg-primaryClr rounded-2xl flex items-center gap-2">
									<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
										<svg
											width="26"
											height="26"
											viewBox="0 0 26 26"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<g clipPath="url(#clip0_1_4620)">
												<path
													d="M26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26C20.1797 26 26 20.1797 26 13Z"
													fill="white"
												/>
												<path
													opacity="0.4"
													d="M6.33325 13.6467V9.65999C6.33325 7.81999 7.82659 6.33333 9.66659 6.33333H16.3332C18.1732 6.33333 19.6665 7.81999 19.6665 9.65999V14.3133C19.6665 16.1467 18.1732 17.6333 16.3332 17.6333H15.3332C15.1265 17.6333 14.9265 17.7333 14.7999 17.9L13.7999 19.2267C13.3599 19.8133 12.6399 19.8133 12.1999 19.2267L11.1999 17.9C11.0932 17.7533 10.8532 17.6333 10.6665 17.6333H9.66659C7.82659 17.6333 6.33325 16.1467 6.33325 14.3133V13.6467Z"
													fill="#6C5DD3"
												/>
												<path
													d="M16.3335 10.8333H9.66675C9.39341 10.8333 9.16675 10.6067 9.16675 10.3333C9.16675 10.06 9.39341 9.83333 9.66675 9.83333H16.3335C16.6068 9.83333 16.8335 10.06 16.8335 10.3333C16.8335 10.6067 16.6068 10.8333 16.3335 10.8333Z"
													fill="#6C5DD3"
												/>
												<path
													d="M13.6668 14.1667H9.66675C9.39341 14.1667 9.16675 13.94 9.16675 13.6667C9.16675 13.3933 9.39341 13.1667 9.66675 13.1667H13.6668C13.9401 13.1667 14.1668 13.3933 14.1668 13.6667C14.1668 13.94 13.9401 14.1667 13.6668 14.1667Z"
													fill="#6C5DD3"
												/>
											</g>
											<defs>
												<clipPath id="clip0_1_4620">
													<rect width="26" height="26" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</div>
									<span className="text-[12px] font-light">20 نظر</span>
								</div>
								<button className="bg-primaryClr w-14 h-14 rounded-br-lg rounded-bl-3xl rounded-tr-xl rounded-tl-md flex items-center justify-center">
									<svg
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M15.9998 3.66707C6.75046 3.66707 3.66646 6.75107 3.66646 16.0004C3.66646 25.2497 6.75046 28.3337 15.9998 28.3337C25.2491 28.3337 28.3331 25.2497 28.3331 16.0004C28.3331 6.75107 25.2491 3.66707 15.9998 3.66707Z"
											stroke="white"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M17.9224 11.3715C17.9224 11.3715 13.2744 14.5608 13.2744 16.0008C13.2744 17.4408 17.9224 20.6275 17.9224 20.6275"
											stroke="white"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="w-full min-h-fit">
					<div className="item py-4 flex items-center justify-center w-full relative">
						<img
							className="object-cover min-h-[25rem] w-full"
							src={import.meta.env.BASE_URL + "/assets/images/slider/1.png"}
							alt=""
						/>
						<div className="overlay absolute bottom-0 left-0 md:-bottom-24 md:left-28 bg-black/50 backdrop-blur-[5px] z-40 h-fit w-{90%}  md:w-1/3  rounded-none  md:rounded-2xl py-4 px-4 text-white select-auto ">
							<div className="w-fit py-2 px-3 font-bold rounded-2xl bg-secondaryClr/20 text-secondaryClr text-sm">
								مقاله جدید
							</div>
							<h1 className="text-2xl font-bold py-3 mt-3">فیفا 23</h1>
							<p className="text-[15px] font-light line-clamp-3 ">
								مانند دیگر بازی‌های بتل رویال سوار یک هواپیما خواهید شد و روی
								نقشه فرود خواهید آمد. وجه تفاوت این بازی نسبت به بقیه در تعداد
								بازیکنان آن است.
							</p>
							<div className="flex items-center justify-between mt-4">
								<div className="min-w-[5rem] pl-1 h-8  bg-primaryClr rounded-2xl flex items-center gap-2">
									<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
										<svg
											width="26"
											height="26"
											viewBox="0 0 26 26"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<g clipPath="url(#clip0_1_4620)">
												<path
													d="M26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26C20.1797 26 26 20.1797 26 13Z"
													fill="white"
												/>
												<path
													opacity="0.4"
													d="M6.33325 13.6467V9.65999C6.33325 7.81999 7.82659 6.33333 9.66659 6.33333H16.3332C18.1732 6.33333 19.6665 7.81999 19.6665 9.65999V14.3133C19.6665 16.1467 18.1732 17.6333 16.3332 17.6333H15.3332C15.1265 17.6333 14.9265 17.7333 14.7999 17.9L13.7999 19.2267C13.3599 19.8133 12.6399 19.8133 12.1999 19.2267L11.1999 17.9C11.0932 17.7533 10.8532 17.6333 10.6665 17.6333H9.66659C7.82659 17.6333 6.33325 16.1467 6.33325 14.3133V13.6467Z"
													fill="#6C5DD3"
												/>
												<path
													d="M16.3335 10.8333H9.66675C9.39341 10.8333 9.16675 10.6067 9.16675 10.3333C9.16675 10.06 9.39341 9.83333 9.66675 9.83333H16.3335C16.6068 9.83333 16.8335 10.06 16.8335 10.3333C16.8335 10.6067 16.6068 10.8333 16.3335 10.8333Z"
													fill="#6C5DD3"
												/>
												<path
													d="M13.6668 14.1667H9.66675C9.39341 14.1667 9.16675 13.94 9.16675 13.6667C9.16675 13.3933 9.39341 13.1667 9.66675 13.1667H13.6668C13.9401 13.1667 14.1668 13.3933 14.1668 13.6667C14.1668 13.94 13.9401 14.1667 13.6668 14.1667Z"
													fill="#6C5DD3"
												/>
											</g>
											<defs>
												<clipPath id="clip0_1_4620">
													<rect width="26" height="26" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</div>
									<span className="text-[12px] font-light">20 نظر</span>
								</div>
								<button className="bg-primaryClr w-14 h-14 rounded-br-lg rounded-bl-3xl rounded-tr-xl rounded-tl-md flex items-center justify-center">
									<svg
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M15.9998 3.66707C6.75046 3.66707 3.66646 6.75107 3.66646 16.0004C3.66646 25.2497 6.75046 28.3337 15.9998 28.3337C25.2491 28.3337 28.3331 25.2497 28.3331 16.0004C28.3331 6.75107 25.2491 3.66707 15.9998 3.66707Z"
											stroke="white"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M17.9224 11.3715C17.9224 11.3715 13.2744 14.5608 13.2744 16.0008C13.2744 17.4408 17.9224 20.6275 17.9224 20.6275"
											stroke="white"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="w-full min-h-fit">
					<div className="item py-4 flex items-center justify-center w-full relative">
						<img
							className="object-cover min-h-[25rem] w-full"
							src={import.meta.env.BASE_URL + "/assets/images/slider/1.png"}
							alt=""
						/>
						<div className="overlay absolute bottom-0 left-0 md:-bottom-24 md:left-28 bg-black/50 backdrop-blur-[5px] z-40 h-fit w-{90%}  md:w-1/3  rounded-none  md:rounded-2xl py-4 px-4 text-white select-auto ">
							<div className="w-fit py-2 px-3 font-bold rounded-2xl bg-secondaryClr/20 text-secondaryClr text-sm">
								مقاله جدید
							</div>
							<h1 className="text-2xl font-bold py-3 mt-3">وارزان 2</h1>
							<p className="text-[15px] font-light line-clamp-3 ">
								مانند دیگر بازی‌های بتل رویال سوار یک هواپیما خواهید شد و روی
								نقشه فرود خواهید آمد. وجه تفاوت این بازی نسبت به بقیه در تعداد
								بازیکنان آن است.
							</p>
							<div className="flex items-center justify-between mt-4">
								<div className="min-w-[5rem] pl-1 h-8  bg-primaryClr rounded-2xl flex items-center gap-2">
									<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
										<svg
											width="26"
											height="26"
											viewBox="0 0 26 26"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<g clipPath="url(#clip0_1_4620)">
												<path
													d="M26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26C20.1797 26 26 20.1797 26 13Z"
													fill="white"
												/>
												<path
													opacity="0.4"
													d="M6.33325 13.6467V9.65999C6.33325 7.81999 7.82659 6.33333 9.66659 6.33333H16.3332C18.1732 6.33333 19.6665 7.81999 19.6665 9.65999V14.3133C19.6665 16.1467 18.1732 17.6333 16.3332 17.6333H15.3332C15.1265 17.6333 14.9265 17.7333 14.7999 17.9L13.7999 19.2267C13.3599 19.8133 12.6399 19.8133 12.1999 19.2267L11.1999 17.9C11.0932 17.7533 10.8532 17.6333 10.6665 17.6333H9.66659C7.82659 17.6333 6.33325 16.1467 6.33325 14.3133V13.6467Z"
													fill="#6C5DD3"
												/>
												<path
													d="M16.3335 10.8333H9.66675C9.39341 10.8333 9.16675 10.6067 9.16675 10.3333C9.16675 10.06 9.39341 9.83333 9.66675 9.83333H16.3335C16.6068 9.83333 16.8335 10.06 16.8335 10.3333C16.8335 10.6067 16.6068 10.8333 16.3335 10.8333Z"
													fill="#6C5DD3"
												/>
												<path
													d="M13.6668 14.1667H9.66675C9.39341 14.1667 9.16675 13.94 9.16675 13.6667C9.16675 13.3933 9.39341 13.1667 9.66675 13.1667H13.6668C13.9401 13.1667 14.1668 13.3933 14.1668 13.6667C14.1668 13.94 13.9401 14.1667 13.6668 14.1667Z"
													fill="#6C5DD3"
												/>
											</g>
											<defs>
												<clipPath id="clip0_1_4620">
													<rect width="26" height="26" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</div>
									<span className="text-[12px] font-light">20 نظر</span>
								</div>
								<button className="bg-primaryClr w-14 h-14 rounded-br-lg rounded-bl-3xl rounded-tr-xl rounded-tl-md flex items-center justify-center">
									<svg
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M15.9998 3.66707C6.75046 3.66707 3.66646 6.75107 3.66646 16.0004C3.66646 25.2497 6.75046 28.3337 15.9998 28.3337C25.2491 28.3337 28.3331 25.2497 28.3331 16.0004C28.3331 6.75107 25.2491 3.66707 15.9998 3.66707Z"
											stroke="white"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M17.9224 11.3715C17.9224 11.3715 13.2744 14.5608 13.2744 16.0008C13.2744 17.4408 17.9224 20.6275 17.9224 20.6275"
											stroke="white"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="w-full min-h-fit">
					<div className="item py-4 flex items-center justify-center w-full relative">
						<img
							className="object-cover min-h-[25rem] w-full"
							src={import.meta.env.BASE_URL + "/assets/images/slider/1.png"}
							alt=""
						/>
						<div className="overlay absolute bottom-0 left-0 md:-bottom-24 md:left-28 bg-black/50 backdrop-blur-[5px] z-40 h-fit w-{90%}  md:w-1/3  rounded-none  md:rounded-2xl py-4 px-4 text-white select-auto ">
							<div className="w-fit py-2 px-3 font-bold rounded-2xl bg-secondaryClr/20 text-secondaryClr text-sm">
								مقاله جدید
							</div>
							<h1 className="text-2xl font-bold py-3 mt-3">GTA 5</h1>
							<p className="text-[15px] font-light line-clamp-3 ">
								مانند دیگر بازی‌های بتل رویال سوار یک هواپیما خواهید شد و روی
								نقشه فرود خواهید آمد. وجه تفاوت این بازی نسبت به بقیه در تعداد
								بازیکنان آن است.
							</p>
							<div className="flex items-center justify-between mt-4">
								<div className="min-w-[5rem] pl-1 h-8  bg-primaryClr rounded-2xl flex items-center gap-2">
									<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
										<svg
											width="26"
											height="26"
											viewBox="0 0 26 26"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<g clipPath="url(#clip0_1_4620)">
												<path
													d="M26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26C20.1797 26 26 20.1797 26 13Z"
													fill="white"
												/>
												<path
													opacity="0.4"
													d="M6.33325 13.6467V9.65999C6.33325 7.81999 7.82659 6.33333 9.66659 6.33333H16.3332C18.1732 6.33333 19.6665 7.81999 19.6665 9.65999V14.3133C19.6665 16.1467 18.1732 17.6333 16.3332 17.6333H15.3332C15.1265 17.6333 14.9265 17.7333 14.7999 17.9L13.7999 19.2267C13.3599 19.8133 12.6399 19.8133 12.1999 19.2267L11.1999 17.9C11.0932 17.7533 10.8532 17.6333 10.6665 17.6333H9.66659C7.82659 17.6333 6.33325 16.1467 6.33325 14.3133V13.6467Z"
													fill="#6C5DD3"
												/>
												<path
													d="M16.3335 10.8333H9.66675C9.39341 10.8333 9.16675 10.6067 9.16675 10.3333C9.16675 10.06 9.39341 9.83333 9.66675 9.83333H16.3335C16.6068 9.83333 16.8335 10.06 16.8335 10.3333C16.8335 10.6067 16.6068 10.8333 16.3335 10.8333Z"
													fill="#6C5DD3"
												/>
												<path
													d="M13.6668 14.1667H9.66675C9.39341 14.1667 9.16675 13.94 9.16675 13.6667C9.16675 13.3933 9.39341 13.1667 9.66675 13.1667H13.6668C13.9401 13.1667 14.1668 13.3933 14.1668 13.6667C14.1668 13.94 13.9401 14.1667 13.6668 14.1667Z"
													fill="#6C5DD3"
												/>
											</g>
											<defs>
												<clipPath id="clip0_1_4620">
													<rect width="26" height="26" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</div>
									<span className="text-[12px] font-light">20 نظر</span>
								</div>
								<button className="bg-primaryClr w-14 h-14 rounded-br-lg rounded-bl-3xl rounded-tr-xl rounded-tl-md flex items-center justify-center">
									<svg
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M15.9998 3.66707C6.75046 3.66707 3.66646 6.75107 3.66646 16.0004C3.66646 25.2497 6.75046 28.3337 15.9998 28.3337C25.2491 28.3337 28.3331 25.2497 28.3331 16.0004C28.3331 6.75107 25.2491 3.66707 15.9998 3.66707Z"
											stroke="white"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M17.9224 11.3715C17.9224 11.3715 13.2744 14.5608 13.2744 16.0008C13.2744 17.4408 17.9224 20.6275 17.9224 20.6275"
											stroke="white"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>

			<div className=" hidden md:flex items-center justify-between py-5 md:py-10 md:px-10">
				<Swiper
					onSwiper={setThumbsSwiper}
					loop={true}
					spaceBetween={15}
					slidesPerView={2}
					freeMode={true}
					watchSlidesProgress={true}
					onBeforeInit={swiper => {
						swiperRef.current = swiper;
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 15,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 15,
						},
					}}
					modules={[FreeMode, Navigation, Thumbs, Autoplay]}
					className="thumbSwiper max-w-full md:max-w-[444px]  w-full md:mr-4 ml-0 relative h-fit py-1 overflow-y-visible">
					<SwiperSlide className="h-fit rounded-md">
						<img
							className="w-full h-[56px] "
							src={import.meta.env.BASE_URL + "/assets/images/slider/1.png"}
							alt=""
						/>
					</SwiperSlide>

					<SwiperSlide className="h-fit rounded-md">
						<img
							className="w-full h-[56px]"
							src={import.meta.env.BASE_URL + "/assets/images/slider/1.png"}
							alt=""
						/>
					</SwiperSlide>

					<SwiperSlide className="h-fit rounded-md">
						<img
							className="w-full h-[56px]"
							src={import.meta.env.BASE_URL + "/assets/images/slider/1.png"}
							alt=""
						/>
					</SwiperSlide>

					<SwiperSlide className="h-fit rounded-md">
						<img
							className="w-full h-[56px]"
							src={import.meta.env.BASE_URL + "/assets/images/slider/1.png"}
							alt=""
						/>
					</SwiperSlide>

					<SwiperSlide className="h-fit rounded-md">
						<img
							className="w-full h-[56px]"
							src={import.meta.env.BASE_URL + "/assets/images/slider/1.png"}
							alt=""
						/>
					</SwiperSlide>

					<SwiperSlide className="h-fit rounded-md">
						<img
							className="w-full h-[56px]"
							src={import.meta.env.BASE_URL + "/assets/images/slider/1.png"}
							alt=""
						/>
					</SwiperSlide>

					<button
						className="flex items-center justify-center w-8 h-8 rounded-full bg-primaryClr text-white absolute left-2 top-1/2 -translate-y-1/2 z-20"
						onClick={() => swiperRef.current?.slideNext()}>
						<IoIosArrowForward className="text-white rotate-180" />
					</button>
					<button
						className="flex items-center justify-center w-8 h-8 rounded-full bg-primaryClr text-white absolute right-1 top-1/2 -translate-y-1/2 z-20"
						onClick={() => swiperRef.current?.slidePrev()}>
						<IoIosArrowForward className="text-white" />
					</button>
				</Swiper>
			</div>
		</div>
	);
};

export default Banner;

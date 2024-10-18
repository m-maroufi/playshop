import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTwitter } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const Footer = () => {
	return (
		<div className="footer  bg-gray-200/5 w-full">
			<div className="px-2 xl:container mx-auto g">
				<div className="py-6 grid gap-4 grid-cols-1 sm:grid-cols-4 md:grid-cols-5 text-white px-2">
					<div className="newsBlogs mb-4 sm:col-span-2  md:col-span-2">
						<h2 className="font-bold md:text-lg">داغترین مطالب هفته</h2>
						<div className="mt-4 p-2 space-y-8">
							<Link className="flex items-center gap-2 line-clamp-2">
								<img
									className="w-[100px] h-[64px] rounded-xl"
									src={import.meta.env.BASE_URL + "assets/images/blogs/1.png"}
									alt=""
								/>
								<span className="text-textClr text-[14px] line-clamp-2 overflow-hidden">
									این هفته چه بازی های معرفی می شوند.
								</span>
							</Link>
							<Link className="flex items-center gap-2 line-clamp-2">
								<img
									className="w-[100px] h-[64px] rounded-xl"
									src={import.meta.env.BASE_URL + "assets/images/blogs/2.png"}
									alt=""
								/>
								<span className="text-textClr text-[14px] line-clamp-2 overflow-hidden">
									جدیدترین تریلر بازی های جدید
								</span>
							</Link>
							<Link className="flex items-center gap-2 line-clamp-2">
								<img
									className="w-[100px] h-[64px] rounded-xl"
									src={
										import.meta.env.BASE_URL + "assets/images/blogs/big1.jpg"
									}
									alt=""
								/>
								<span className="text-textClr text-[14px] line-clamp-2 overflow-hidden">
									این هفته چه بازی های معرفی می شوند.
								</span>
							</Link>
						</div>
					</div>
					<div className="papulerLinks mb-4 sm:col-span-2 md:col-span-1">
						<h2 className="font-bold md:text-lg">پربازدیدترین صفحات</h2>
						<div className="mt-4 p-2 space-y-4">
							<Link className="flex items-center gap-2 line-clamp-2 font-light">
								جدیدترین بازی ها
							</Link>
							<Link className="flex items-center gap-2 line-clamp-2 font-light">
								مقالات
							</Link>
							<Link className="flex items-center gap-2 line-clamp-2 font-light">
								فروشگاه
							</Link>
							<Link className="flex items-center gap-2 line-clamp-2 font-light">
								درباره ما
							</Link>
							<Link className="flex items-center gap-2 line-clamp-2 font-light">
								تماس با ما
							</Link>
						</div>
					</div>
					<div className="newsletters sm:col-span-4 md:col-span-2">
						<h2 className="font-bold md:text-lg">عضویت در خبرنامه</h2>
						<div className="mt-4 p-2 space-y-4">
							<div className="forms">
								<form action="" className="flex items-center gap-2">
									<div className="bg-black/10 rounded-md overflow-hidden relative h-12 flex-1">
										<input
											className="bg-transparent block w-full h-full outline-none ring-0 px-4 pr-12 placeholder:font-light placeholder:text-[12px] text-[14px]"
											type="email"
											name="newsletters"
											id="newaletters"
											placeholder="ایمیل خود را وارد کنید"
										/>
										<div className=" absolute right-2 top-1 ">
											<svg
												width="38"
												height="38"
												viewBox="0 0 38 38"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													opacity="0.4"
													d="M34.8332 25.2387C34.8332 29.6562 31.2865 33.2345 26.869 33.2503H26.8532H11.1623C6.76067 33.2503 3.1665 29.6878 3.1665 25.2703V25.2545C3.1665 25.2545 3.176 18.2467 3.18867 14.7222C3.19025 14.0603 3.95025 13.6898 4.468 14.1015C8.23 17.0861 14.9576 22.528 15.0415 22.5992C16.1657 23.5002 17.5907 24.0084 19.0473 24.0084C20.504 24.0084 21.929 23.5002 23.0532 22.5818C23.1371 22.5264 29.7143 17.2476 33.5333 14.2139C34.0526 13.8007 34.8158 14.1712 34.8173 14.8314C34.8332 18.329 34.8332 25.2387 34.8332 25.2387Z"
													fill="#6C5DD3"
												/>
												<path
													d="M34.0036 8.98335C32.6325 6.39935 29.9345 4.74951 26.9641 4.74951H11.1625C8.19214 4.74951 5.49415 6.39935 4.12298 8.98335C3.81581 9.56126 3.96148 10.2817 4.4729 10.6902L16.2291 20.0936C17.0525 20.7586 18.05 21.0895 19.0475 21.0895C19.0538 21.0895 19.0586 21.0895 19.0633 21.0895C19.0681 21.0895 19.0744 21.0895 19.0791 21.0895C20.0766 21.0895 21.0741 20.7586 21.8975 20.0936L33.6537 10.6902C34.1651 10.2817 34.3108 9.56126 34.0036 8.98335Z"
													fill="#6C5DD3"
												/>
											</svg>
										</div>
									</div>
									<button className="h-12 w-12 bg-primaryClr flex items-center justify-center text-white  rounded-lg">
										<FaArrowLeft className="text-current" size={20} />
									</button>
								</form>
							</div>
							<div className="logos bg-slate-100 rounded-lg min-h-[200px] grid grid-cols-3 place-content-center items-center px-4 gap-4">
								<img
									src={import.meta.env.BASE_URL + "assets/images/logos/1.png"}
									alt=""
								/>
								<img
									src={import.meta.env.BASE_URL + "assets/images/logos/2.png"}
									alt=""
								/>
								<img
									src={import.meta.env.BASE_URL + "assets/images/logos/3.png"}
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright  bg-secondaryClr">
				<div className="container min-h-[60px] px-4 py-4 mx-auto text-white flex items-center justify-between gap-4 flex-wrap text-center flex-col md:flex-row">
					<p className="font-bold text-[12px] md:text-sm">
						© کپی بخش یا کل هر کدام از مطالب تنها با کسب مجوز مکتوب امکان پذیر
						است.
					</p>
					<div className="flex items-center justify-center gap-6">
						<Link className="flex items-center justify-center text-white">
							<FaGoogle className="text-current" size={24} />
						</Link>
						<Link className="flex items-center justify-center text-white">
							<TbBrandTwitter className="text-current" size={24} />
						</Link>
						<Link className="flex items-center justify-center text-white">
							<FaWhatsapp className="text-current" size={24} />
						</Link>
						<Link className="flex items-center justify-center text-white">
							<FaInstagram className="text-current" size={24} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

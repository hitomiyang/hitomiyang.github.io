import React, { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const ImgSrc = "/img/portfolio/";

const CARD_DETAIL = [
	{
		id: "gash",
		category: "ui",
		title: "金流支付APP GASH APP",
		description:
			"在這個專案內，我扮演的角色主要是互動設計。這個APP的前身，是個移除率高達99%的產品。我從一開始收集資料、需求訪談、發想、後來更與幾位要好的程式伙伴一起討論及製作prototype、wireframe等等...對上級提案獲得了重視。在與大老闆劉柏園幾次面對面提案開會後，終於在2015年開發上市，是我在遊戲橘子期間投入最多心力的代表作。",
		picture: "01_gashapp",
		alt: "GASH APP",
		link: "https://google.com",
	},
	{
		id: "beanfun",
		category: "web",
		title: "beanfun!",
		description: "beanfun! is a website.",
		picture: "02_beanfun",
		alt: "beanfun!",
		link: "https://google.com",
	},
	{
		id: "dashboard",
		category: "web",
		title: "Dashboard",
		description: "dashboard is a website.",
		picture: "03_dashboard",
		alt: "Dashboard",
		link: "https://google.com",
	},
	{
		id: "dashbox",
		category: "ui",
		title: "Dashbox",
		description: "dashbox is an app.",
		picture: "04_dashbox",
		alt: "Dashbox",
		link: "https://google.com",
	},
	{
		id: "remote",
		category: "ui",
		title: "翰林遙控器",
		description: "翰林遙控器 is an app.",
		picture: "07_remote",
		alt: "翰林遙控器",
		link: "https://google.com",
	},
	{
		id: "60",
		category: "web",
		title: "翰林60週年網頁",
		description: "翰林60週年網頁 is a website.",
		picture: "08_60",
		alt: "翰林60週年網頁",
		link: "https://google.com",
	},
	{
		id: "edisc",
		category: "ui",
		title: "翰林行動大師",
		description: "edisc is a desktop ap.",
		picture: "09_edisc",
		alt: "翰林行動大師",
		link: "https://google.com",
	},
	{
		id: "green",
		category: "web",
		title: "School GO Green",
		description: "school go green is a website.",
		picture: "10_schoolgreen",
		alt: "school go green",
		link: "https://google.com",
	},
	{
		id: "12el",
		category: "web",
		title: "翰林12年教育素養",
		description: "12el is a website.",
		picture: "11_12el",
		alt: "翰林12年教育素養",
		link: "https://google.com",
	},
	{
		id: "hle_id",
		category: "web",
		title: "翰林出版─會員中心",
		description: "hle-id is a website.",
		picture: "12_hle-id",
		alt: "翰林出版─會員中心",
		link: "https://google.com",
	},
];

function ProjectItem(props) {
	useEffect(() => {
		AOS.init();
	}, []);

	//Panel Control
	const [selectedIndex, setSelectedIndex] = useState();
	const openExpand = (i) => {
		setSelectedIndex(i);
	};
	const closeExpand = () => {
		setSelectedIndex(undefined);
	};

	const dataSource = useMemo(() => {
		const isUIUX = props.active === 2;
		const isWEB = props.active === 3;

		return CARD_DETAIL.filter((detail) => {
			if (isUIUX) {
				return detail.category === "ui";
			}
			if (isWEB) {
				return detail.category === "web";
			}
			return detail;
		});
	}, [props.active]);

	return (
		<React.Fragment>
			<div className="portfolio-item-wrapper" data-aos="fadeInUp" data-aos-duration="500ms">
				<ul id="og-grid" className="grid gap-10 px-10 md:grid-cols-2 lg:grid-cols-3">
					{dataSource.map((item) => (
						<li
							key={item.id}
							className={
								selectedIndex === item.id
									? "grid grid-rows-6 transition-all mobile_md:grid-rows-5 mobile_xl:grid-rows-4 sm:grid-rows-3 lg:grid-rows-4 xl:grid-rows-3"
									: ""
							}
						>
							<div
								className="group relative cursor-pointer overflow-hidden transition-all"
								onClick={() => openExpand(item.id)}
							>
								<img
									src={`${ImgSrc}${item.picture}.png`}
									alt={item.alt}
									className="transition-all duration-700 group-hover:rotate-[15deg] group-hover:scale-[1.4] "
								/>
								<div
									className="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-black/0 text-white opacity-0 transition-all group-hover:bg-black/80 group-hover:opacity-100"
									data-aos-duration="500ms"
									data-aos-delay="500ms"
									data-aos="fade-up"
								>
									<h3 className="text-2xl font-light opacity-0 group-hover:opacity-100">{item.title}</h3>
									<div className="flex h-14 w-14 items-center justify-center rounded-full border-2 opacity-0 group-hover:opacity-100">
										<FontAwesomeIcon className="text-4xl" icon={solid("plus")} />
									</div>
								</div>
							</div>
							{selectedIndex === item.id && (
								<div className="expand-panel row-span-2">
									<div className="absolute left-0 right-0 mt-3.5 bg-white/10 px-5 py-20 sm:py-16 md:py-20 xl:py-14">
										<button className="icon-close" onClick={closeExpand} />
										<div className="grid gap-10 px-5 text-white md:grid-cols-2">
											<div>
												<img
													src={`${ImgSrc}${item.picture}.png`}
													alt={item.alt}
													className="group-hover:animate-HeartBeat"
												/>
											</div>
											<div className="space-y-3">
												<h3 className="text-xl font-light lg:text-2xl">{item.title}</h3>
												<p className="pb-4 text-sm leading-7 sm:pb-0 md:pb-4 lg:text-base lg:leading-9 xl:leading-8">
													{item.description}
												</p>
												<Link
													to={item.link}
													target="_"
													className="inline-block border border-white bg-white/0 py-1.5 px-4 text-lg transition-all hover:bg-white/20"
												>
													More
													<FontAwesomeIcon className="pl-2" icon={solid("arrow-right")} />
												</Link>
											</div>
										</div>
									</div>
								</div>
							)}
						</li>
					))}
				</ul>
			</div>
		</React.Fragment>
	);
}

export default ProjectItem;

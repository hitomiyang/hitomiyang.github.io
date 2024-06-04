import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import flowerBg from "../../img/bg.jpg";

import Nav from "../../nav/Nav";
import Copyright from "../Copyright";
import ProjectItem from "./ProjectItem";

const tabItems = [
	{
		id: 1,
		title: "ALL",
		content: "step 1 content",
	},
	{
		id: 2,
		title: "UI/UX",
		content: "step 2 content",
	},
	{
		id: 3,
		title: "WEB",
		content: "step 3 content",
	},
];

function Project() {
	useEffect(() => {
		AOS.init();
	}, []);

	const [active, setIsActive] = useState(1);

	const selectTab = (i) => {
		setIsActive(i);
	};

	return (
		<React.Fragment>
			<Nav />
			<section className="min-h-screen py-24" id="project" style={{ backgroundImage: `url(${flowerBg})` }}>
				<div className="mx-auto w-full px-3.5 sm:max-w-xl md:max-w-[720px] lg:max-w-[960px]">
					<div className="text-center">
						<h2 className="mt-8 mb-7 text-[2.8em] font-extralight leading-10 text-white">Project</h2>
					</div>
				</div>

				<div className="mx-auto w-full px-3.5 sm:max-w-xl md:max-w-[720px] lg:max-w-[960px]">
					<div className="flex flex-col lg:flex-row" data-aos="fadeInDown" data-aos-duration="500ms">
						<div className="mx-auto flex w-full flex-row items-center justify-center space-x-6 py-10">
							{tabItems &&
								tabItems.map((item, i) => {
									return (
										<button
											key={item.id}
											className={active === item.id ? "tabItemBtn active" : "tabItemBtn "}
											onClick={() => selectTab(item.id)}
										>
											{item.title}
										</button>
									);
								})}
						</div>
					</div>
				</div>

				<ProjectItem active={active} />
			</section>
			<Copyright />
		</React.Fragment>
	);
}

export default Project;

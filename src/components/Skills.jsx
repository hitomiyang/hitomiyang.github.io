import { React, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

function Skills() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<section id="skills" className="bg-white py-24 text-neutral-500">
			<div className="mx-auto w-full space-y-10 px-3.5 sm:max-w-xl md:max-w-[720px] lg:max-w-[960px]">
				<div className="text-center">
					<h2 className="mt-8 mb-7 text-[2.8em] font-extralight text-neutral-800">Skills</h2>
					<hr className="mx-auto w-8 border-b-2 border-primary-light" />
				</div>

				<div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
					<div
						className="w-full rounded border border-neutral-300 p-10 text-center shadow-sm hover:shadow-xl lg:w-1/2"
						data-aos="fade-up"
					>
						<FontAwesomeIcon className="text-6xl text-secondary" icon={solid("paper-plane")} />
						<h3 className="mb-2 pt-5 text-2xl text-[#5a5a5a]">
							<span className="text-primary-light">UI/UX</span>Design
						</h3>
						<p className="mb-4 text-base font-light text-secondary-dark">操作流程與界面設計</p>
						<ul className="m-5 bg-[#efefef]/40 py-3.5 font-medium">
							<li>UserFlow、Wireframe、MockUp</li>
							<li>UI Spec、UI Policy制訂、網頁/APP介面設計</li>
							<li>產品體驗改善、使用者經驗分析及改善</li>
						</ul>
						<p className="pt2.5 text-xs text-secondary-dark">
							常用軟體：Photoshop, illustrator, Figma, Whimsical
							<br /> 其他工具：Adobe XD, Sketch, Zeplin
						</p>
					</div>

					<div
						className="w-full rounded border border-neutral-300 p-10 text-center shadow-sm hover:shadow-xl lg:w-1/2"
						data-aos="fade-up"
					>
						<FontAwesomeIcon className="text-6xl text-secondary" icon={solid("file-code")} />
						<h3 className="mb-2 pt-5 text-2xl text-[#5a5a5a]">
							<span className="text-primary-light">Front-End</span>Design
						</h3>
						<p className="mb-4 text-base font-light  text-secondary-dark">前端網頁設計</p>
						<ul className="m-5 bg-[#efefef]/40 py-3.5 font-medium">
							<li>HTML+CSS開版、Bootstrap、RWD</li>
							<li>LESS/SASS、TailwindCSS</li>
							<li>網頁動態效果：Animate, AOS</li>
							<li>網頁前端介面：Javascript, React</li>
						</ul>
						<div className="space-x-2">
							<FontAwesomeIcon className="text-2xl text-secondary" icon={brands("html5")} />
							<FontAwesomeIcon className="text-2xl text-secondary" icon={brands("css3")} />
							<FontAwesomeIcon className="text-2xl text-secondary" icon={brands("less")} />
							<FontAwesomeIcon className="text-2xl text-secondary" icon={brands("square-js")} />
							<FontAwesomeIcon className="text-2xl text-secondary" icon={brands("react")} />
							<FontAwesomeIcon className="text-2xl text-secondary" icon={brands("git")} />
							<FontAwesomeIcon className="text-2xl text-secondary" icon={brands("sourcetree")} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;

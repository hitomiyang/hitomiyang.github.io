import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import webconf from "../../img/webconf.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function Work() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<section id="work" className="bg-primary py-24">
			<div className="mx-auto w-full px-3.5 sm:max-w-xl md:max-w-[720px] lg:max-w-[960px]">
				<div className="space-y-5 md:px-8">
					<h2 className="mt-8 mb-7 text-[2.8em] font-extralight leading-10 text-white">Work Experience</h2>

					<div className="lg:space-y-o flex flex-col space-y-5 lg:grid">
						<div className="row-start-1 font-normal text-white lg:col-start-1" data-aos="fade-up">
							<ul>
								<li className="font-bold">經歷：</li>
								<li>
									<FontAwesomeIcon className="pr-2 text-white" icon={solid("angle-right")} />
									IxDA Taiwan - 台灣互動設計協會創始理事
								</li>
								<li>
									<FontAwesomeIcon className="pr-2 text-white" icon={solid("angle-right")} />
									WebConf Taiwan 2013 - Speaker
									<span className="block pl-4 md:inline md:pl-1">溝通的藝術：設計與開發如何真心合作</span>
								</li>
								<li>
									<FontAwesomeIcon className="pr-2 text-white" icon={solid("angle-right")} />
									趣玩創意 - Front-End &amp; UI/UX Designer
								</li>
								<li>
									<FontAwesomeIcon className="pr-2 text-white" icon={solid("angle-right")} />
									翰林出版 - Sr. UX Design Engineer
								</li>
								<li>
									<FontAwesomeIcon className="pr-2 text-white" icon={solid("angle-right")} />
									橘子集團 樂點數位 - Sr. UI Interactive Designer
								</li>
								<li>
									<FontAwesomeIcon className="pr-2 text-white" icon={solid("angle-right")} />
									橘子集團 樂點卡 - Front-End Engineer
								</li>
								<li>
									<FontAwesomeIcon className="pr-2 text-white" icon={solid("angle-right")} />
									遊戲橘子總部 人因設計中心 - UI Designer
								</li>
								<li>
									<FontAwesomeIcon className="pr-2 text-white" icon={solid("angle-right")} />
									遊戲橘子總部 資訊長室 - Web Page Designer
								</li>
							</ul>
							<ul className="text-secondary-light">
								<li className="font-bold">
									擅長領域
									<FontAwesomeIcon className="px-2" icon={solid("angle-right")} />
									社群平台開發、遊戲支付體驗、電子支付相關
								</li>
							</ul>
						</div>
						<div className="row-start-1 lg:col-start-2" data-aos="fade-up">
							<img src={webconf} className="img-fluid" alt="WebConf 2013" />
							<p className="pt-1 pb-8 text-xs text-white/50">WebConf 2013</p>
						</div>

						<div className="flex flex-col items-center justify-around space-y-8 md:flex-row md:space-y-0 lg:col-span-2 lg:row-span-2">
							<div className="w-auto text-center lg:w-full" data-aos="fade-up">
								<div className="wrap-icon">
									<div className="icon-box">
										<FontAwesomeIcon className="text-6xl text-white" icon={solid("mobile-alt")} />
									</div>
									<div className="text-center">
										<p>
											8年以上
											<br />
											APP設計開發經驗
										</p>
									</div>
								</div>
							</div>

							<div className="w-auto text-center lg:w-full" data-aos="fade-down">
								<div className="wrap-icon">
									<div className="icon-box">
										<FontAwesomeIcon className="text-6xl text-white" icon={solid("code")} />
									</div>
									<div className="text-center">
										<p>
											13年以上
											<br />
											網頁設計開發經驗
										</p>
									</div>
								</div>
							</div>

							<div className="w-auto text-center lg:w-full" data-aos="fade-up">
								<div className="wrap-icon kill-margin-bottom">
									<div className="icon-box">
										<FontAwesomeIcon className="text-6xl text-white" icon={solid("heart")} />
									</div>
									<div className="text-center">
										<p>
											9年以上
											<br />
											UI/UX互動設計經驗
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Work;

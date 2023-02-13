import { React, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import profile from "../../img/profile1.png";

function About() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<section id="about" className="bg-white py-24 text-neutral-500">
			<div className="mx-auto w-full px-3.5 sm:max-w-xl md:max-w-[720px] lg:max-w-[960px]">
				<div className="flex flex-col justify-center space-y-5 md:flex-row md:space-x-6 md:space-y-0 md:px-8">
					<div className="mx-auto w-auto space-y-3 text-center md:w-1/5" data-aos="fade-down">
						<img src={profile} className="img-fluid" alt="Hitomi Yang" />
						<h6 className="text-xl ">楊喆淇 (Hitomi)</h6>
					</div>
					<div className="mr-auto w-full space-y-4 font-normal text-neutral-600 md:w-4/5" data-aos="fade-up">
						<h4 className="pb-2 text-2xl font-normal text-secondary">你好，我是一位懂程式的 UI/UX Designer</h4>
						<p>
							{`我的專長在定義操作流程（User Flow）、介面（原型）設計、（ Wireframe, Mockup）、UI
							Spec相關文件制訂等…互動設計相關領域，無論是手機APP、桌面AP或網頁，都有實際開發經驗，在這方面有10年以上的經驗。`}
						</p>
						<p>
							由於過往皆在產品開發等相關部門，為了幫助與工程師溝通，我在網頁前端設計也相當擅長。
							<br />
							我認為<b>「唯有瞭解程式的限制，才能設計出可以實作的產品」</b>。<br />
							如果有需要，我也樂意寫點程式，協助將網頁開版後，提供給工程師，加速開發的流程，減少溝通的不順暢。
							<br />
							如果你剛好需要一個有經驗的 UI/UX Designer，又希望能減少溝通的不順暢，歡迎與我聯絡。
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;

import React, { useEffect } from "react";
import about from "./../img/about.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
	useEffect(() => {
		AOS.init();
	}, []);

	const LinkedIn = {
		url: "https://www.linkedin.com/in/hitomi-yang/",
		alt: "Linked",
	};
	const Email = {
		url: "mailto:hitomi.fox@gmail.com",
		alt: "Email Me",
	};

	return (
		<header className="relative flex h-screen w-full items-center justify-center" data-aos="fade-in">
			<img src={about} className="h-full w-full object-cover" alt="Hitomi" />
			<div className="absolute items-center text-center text-white">
				<h1 className="my-0 text-[40px] font-bold" data-aos-duration="500ms" data-aos-delay="500ms" data-aos="fade-up">
					Hitomi Yang
				</h1>
				<hr className="my-7 mx-auto w-12 border-b-2 border-primary-light" />
				<h3 className="space-x-2 text-base font-light" data-aos="fade-up" data-aos-duration="500ms" data-aos-delay="800ms">
					<span className="my-1 inline-block rounded bg-primary-dark/80 px-1 leading-7">#UI/UX Designer</span>
				</h3>
				<p className="mb-12 text-sm font-normal text-white/70" data-aos="fade-in" data-aos-duration="1000ms" data-aos-delay="800ms">
					Change the world via Interaction Design.
				</p>
				<div className="space-x-2">
					<a
						className="text-lg text-white/70 duration-300 hover:text-white/100"
						href={LinkedIn.url}
						target="_"
						alt={LinkedIn.alt}
					>
						<FontAwesomeIcon icon={brands("linkedin")} />
					</a>
					<a className="text-lg text-white/70 duration-300  hover:text-white/100" href={Email.url} target="_" alt={Email.alt}>
						<FontAwesomeIcon icon={solid("envelope")} />
					</a>
				</div>
			</div>
		</header>
	);
}

export default Header;

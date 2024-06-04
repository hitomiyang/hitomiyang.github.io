import { React, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function Contact() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<section id="contact" className="bg-white py-24 text-neutral-500">
			<div className="mx-auto w-full px-3.5 sm:max-w-xl md:max-w-[720px] lg:max-w-[960px] xl:max-w-6xl">
				<div className="text-center">
					<h2 className="mt-8 mb-7 text-[2.8em] font-extralight text-neutral-800">
						Contact <FontAwesomeIcon icon={regular("comment-dots")} />
					</h2>
					<p>歡迎聯繫我!</p>

					<a href="mailto:hitomi.fox@gmail.com">
						<FontAwesomeIcon icon={solid("envelope")} />
						<p>hitomi.fox@gmail.com</p>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Contact;

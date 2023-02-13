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
		<section id="contact" className="bg-white">
			<div className="mx-auto w-full px-3.5 sm:max-w-xl md:max-w-[720px] lg:max-w-[960px] xl:max-w-6xl">
				<div className="col-12 text-center">
					<h2 className="section-heading">
						Contact <FontAwesomeIcon icon={regular("comment-dots")} />
						<i className="far fa-comment-dots"></i>
					</h2>
					<p>歡迎聯繫我!</p>

					<div className="col-md-3 col-12 text-center">
						<a href="mailto:hitomi.fox@gmail.com">
							<FontAwesomeIcon icon={solid("envelope")} />
							<p>hitomi.fox@gmail.com</p>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;

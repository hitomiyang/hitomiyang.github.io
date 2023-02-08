import React, { useState } from "react";
import clsx from "clsx";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands, icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import NavSub from "./components/NavSub";

function Nav() {
	const [show, setHidden] = useState(false);

	const toggle = () => {
		setHidden((prev) => !prev);
	};

	const slideDownClassName = clsx(
		"flex-grow-0 basis-full overflow-hidden lg:!block lg:!h-auto lg:basis-autolg:block lg:h-auto lg:basis-auto",
		{ show }
	);

	return (
		<nav
			id="mainNav"
			className="fixed top-0 left-0 right-0 z-50 mb-5 flex min-h-[50px] justify-between border-b border-white/30 bg-white py-2 px-4 font-light text-white lg:flex-row lg:flex-nowrap lg:bg-transparent"
		>
			<div className="mx-auto flex w-full flex-wrap items-center justify-between lg:px-3.5">
				<a
					className="mr-4 inline-block whitespace-nowrap py-3.5 px-2 text-base font-bold uppercase leading-[15px] text-[#715571] transition-all duration-300 lg:text-lg lg:text-white/70"
					href="#page-top"
				>
					Hitomi YANG
				</a>
				<button className="rounded border border-black/10 bg-transparent py-1 px-3 lg:hidden" type="button" onClick={toggle}>
					<FontAwesomeIcon className="text-[#715571]" icon={solid("bars")} />
				</button>

				<SlideDown className={slideDownClassName} closed={!show} id="navbarNav">
					<NavSub />
				</SlideDown>
			</div>
		</nav>
	);
}

export default Nav;

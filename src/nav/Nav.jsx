import React, { useState, useEffect } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const NavSubItem = [
	{ Link: "about", Channel: "About" },
	{ Link: "work", Channel: "Work" },
	{ Link: "skills", Channel: "Skills" },
	// { Link: "contact", Channel: "Contact" },
];
// const RouteItem = [
// 	{ Link: "project", Channel: "Project" },
// 	{ Link: "weather", Channel: "Weather" },
// ];

function Nav() {
	const [show, setHidden] = useState(false);

	const toggle = () => {
		setHidden((prev) => !prev);
	};

	const slideDownClassName = clsx(
		"flex-grow-0 basis-full overflow-hidden lg:!block lg:!h-auto lg:basis-autolg:block lg:h-auto lg:basis-auto",
		{ show }
	);

	//SubNav
	const location = useLocation();
	const { hash } = location;

	const [url, setUrl] = useState();

	useEffect(() => {
		setUrl(location.pathname);
	}, [location]);

	return (
		<nav
			id="mainNav"
			className="fixed top-0 left-0 right-0 z-50 mb-5 flex min-h-[50px] justify-between border-b border-white/30 bg-white py-2 px-4 font-light text-white lg:flex-row lg:flex-nowrap lg:bg-transparent"
		>
			<div className="mx-auto flex w-full flex-wrap items-center justify-between lg:px-3.5">
				<HashLink to="/#" className="logo">
					Hitomi YANG
				</HashLink>
				<button className="rounded border border-black/10 bg-transparent py-1 px-3 lg:hidden" type="button" onClick={toggle}>
					<FontAwesomeIcon className="text-primary" icon={solid("bars")} />
				</button>

				<SlideDown className={slideDownClassName} closed={!show} id="navbarNav">
					<ul className="flex list-none flex-col flex-wrap lg:flex-row">
						{NavSubItem &&
							NavSubItem.map((item, i) => (
								<li key={i} className={clsx("nav-item", `${url}${hash}` === `/#${item.Link}` ? " active" : "")}>
									<HashLink to={`/#${item.Link}`}>{item.Channel}</HashLink>
								</li>
							))}
						{/*RouteItem &&
							RouteItem.map((routeitem, i) => (
								<li key={i} className={clsx("nav-item", url === `/${routeitem.Link}` ? " active" : "")}>
									<Link to={`/${routeitem.Link}`}>{routeitem.Channel}</Link>
								</li>
							))*/}
					</ul>
				</SlideDown>
			</div>
		</nav>
	);
}

export default Nav;

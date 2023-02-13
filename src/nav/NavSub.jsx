import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

import { Link, useLocation } from "react-router-dom";
import { clsx } from "clsx";

const NavSubItem = [
	{ Link: "about", Channel: "About" },
	{ Link: "work", Channel: "Work Experience" },
	{ Link: "skills", Channel: "Skills" },
	{ Link: "contact", Channel: "Contact" },
];
const RouteItem = [
	{ Link: "project", Channel: "Project" },
	{ Link: "weather", Channel: "Weather" },
];

function NavSub() {
	const location = useLocation();
	const { hash } = location;

	const [url, setUrl] = useState();

	useEffect(() => {
		setUrl(location.pathname);
	}, [location]);

	return (
		<ul className="flex list-none flex-col flex-wrap lg:flex-row">
			{NavSubItem &&
				NavSubItem.map((item, i) => (
					<li key={i} className={clsx("nav-item", `${url}${hash}` === `/#${item.Link}` ? " active" : "")}>
						<HashLink to={`/#${item.Link}`}>{item.Channel}</HashLink>
					</li>
				))}
			{RouteItem &&
				RouteItem.map((routeitem, i) => (
					<li key={i} className={clsx("nav-item", url === `/${routeitem.Link}` ? " active" : "")}>
						<Link to={`/${routeitem.Link}`}>{routeitem.Channel}</Link>
					</li>
				))}
		</ul>
	);
}

export default NavSub;

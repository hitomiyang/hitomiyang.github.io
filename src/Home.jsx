import React, { useState } from "react";

import Nav from "./nav/Nav";
import Header from "./components/Header";
import About from "./components/about/About";
import Work from "./components/work/Work";
import Skills from "./components/Skills";
import Copyright from "./components/Copyright";

function Home() {
	const [scrollTop, setScrollTop] = useState(0);

	const handleScroll = (event) => {
		setScrollTop(event.currentTarget.scrollTop);
	};
	console.log(scrollTop);
	return (
		<React.StrictMode scrollTop={scrollTop} onScroll={handleScroll}>
			<Nav />
			<Header />
			<About />
			<Work />
			<Skills />
			<Copyright />
		</React.StrictMode>
	);
}

export default Home;

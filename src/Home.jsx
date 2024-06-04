import React from "react";

import Nav from "./nav/Nav";
import Header from "./components/Header";
import About from "./components/about/About";
import Work from "./components/work/Work";
import Skills from "./components/Skills";
import Copyright from "./components/Copyright";
import Contact from "./components/Contact";

function Home() {
	return (
		<React.Fragment>
			<Nav />
			<Header />
			<About />
			<Work />
			<Skills />
			<Contact />
			<Copyright />
		</React.Fragment>
	);
}

export default Home;

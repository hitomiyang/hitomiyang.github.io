import React, { useState } from "react";

function Example2() {
	const [isHover, setIsHover] = useState(false);

	return (
		<div>
			<div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={isHover ? "yes" : "NO"}>
				area1{isHover ? "show tip 1" : "no tip"}
			</div>
			<div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={isHover ? "yes" : "NO"}>
				area2{isHover ? "show tip 2" : "no tip"}
			</div>
		</div>
	);
}

export default Example2;

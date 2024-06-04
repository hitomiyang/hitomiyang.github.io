import React, { useRef, useState, useEffect } from "react";
import useHover from "./hooks/useHover";
import { clsx } from "clsx";

// // Hook
const useRefHover = () => {
	const [value, setValue] = useState(false);

	const ref = useRef(null);

	const handleMouseOver = () => {
		setValue(true);
	};
	const handleMouseOut = () => setValue(false);

	useEffect(() => {
		const node = ref.current;
		if (node) {
			node.addEventListener("mouseover", handleMouseOver);
			node.addEventListener("mouseout", handleMouseOut);
		}
		return () => {
			node.removeEventListener("mouseover", handleMouseOver);
			node.removeEventListener("mouseout", handleMouseOut);
		};
	});

	return [ref, value];
};

function Example() {
	const renderElement = (hovered) => {
		return <div className={hovered ? "yes" : "NO"}>{hovered ? "yes" : "NO"}</div>;
	};
	const renderElement2 = (hovered) => {
		return <div className={clsx("NO cursor-pointer", { hovered: "yes" })}>{hovered ? "yes" : "NO"}</div>;
	};

	const [firstElementRef, isFirstElementHover] = useRefHover();
	const [secondElement, isSecondElementHover] = useHover(renderElement);
	const [thirdElement, isThirdElementHover] = useHover(renderElement2);
	return (
		<div>
			{/*useRefHover*/}
			<div ref={firstElementRef} className={isFirstElementHover ? "yes" : "NO"}>
				{isFirstElementHover ? "yes" : "NO"}
			</div>
			<p>{`first: ${String(isFirstElementHover)}`}</p>

			{/*useHover*/}
			{secondElement}
			<p>{`second: ${String(isSecondElementHover)}`}</p>

			{thirdElement}
			<p>{`third: ${String(isThirdElementHover)}`}</p>
		</div>
	);
}

export default Example;

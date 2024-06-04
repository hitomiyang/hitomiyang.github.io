import React, { memo } from "react";

const Counter = memo(({ value, onClick }) => {
	console.log("render", value);
	return (
		<div>
			<p>Counter: {value}</p>
			<button onClick={onClick}>Click</button>
		</div>
	);
});

export default Counter;

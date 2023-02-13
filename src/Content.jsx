import Counter from "./Counter";
import { useCallback, useState } from "react";

const Content = () => {
	const [count, setCount] = useState(0);
	const [show, setShow] = useState(false);

	const handleSetRandom = useCallback(() => {
		setCount(Math.random());
	}, []);

	return (
		<div>
			<button
				className="block"
				onClick={() => {
					setShow((prev) => !prev);
				}}
			>
				toggle {String(show)}
			</button>
			<button
				className="block"
				onClick={() => {
					setCount((prev) => prev + 1);
				}}
			>
				increase
			</button>
			<Counter value={count} onClick={handleSetRandom} />
		</div>
	);
};

export default Content;

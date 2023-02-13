import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Copyright = () => (
	<footer className="bg-primary">
		<div className="mx-auto w-full px-3.5 sm:max-w-xl md:max-w-[720px] lg:max-w-[960px] xl:max-w-6xl">
			<div className="w-full py-5 text-center">
				<p className="text-xs text-white">
					©{new Date().getFullYear()}, made with
					<FontAwesomeIcon className="mx-1 animate-HeartBeat text-primary-light" icon={solid("heart")} />
					by HitomiYang
				</p>
			</div>
		</div>
	</footer>
);

export default Copyright;

import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

library.add(faHeart);

function Copyright() {
    return (
        <footer className="bg-[#715571]">
            <div className="mx-auto w-full px-3.5 sm:max-w-xl md:max-w-[720px] lg:max-w-[960px] xl:max-w-6xl">
                <div className="w-full py-5 text-center">
                    <p className="text-xs text-white">
                        ©{new Date().getFullYear()}, made with <FontAwesomeIcon className="animate-HeartBeat text-[#db7093]" icon="heart" />{" "}
                        by HitomiYang
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Copyright;
import React from "react";
import about from "./img/about.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands, icon } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

function Header() {
    const LinkedIn = {
        url: "https://www.linkedin.com/in/hitomi-yang/",
        ref: "Linked",
    };
    const Google = {
        url: "https://www.google.com",
        ref: "Google",
    };
    return (
        <header className="aos-item aos-init aos-animate relative flex h-screen w-full items-center justify-center" data-aos="fade-in">
            <img src={about} className="h-full w-full object-cover" alt="Hitomi" />
            <div className="header-content absolute text-white">
                <div className="header-content-inner">
                    <h1
                        id="homeHeading"
                        className="wow animate__animated animate__fadeInUp"
                        data-wow-duration="500ms"
                        data-wow-delay="500ms"
                    >
                        Hitomi Yang
                    </h1>
                    <hr />
                    <h3 className="wow animate__animated animate__fadeInUp" data-wow-duration="500ms" data-wow-delay="800ms">
                        <span>#UI/UX Designer</span>
                    </h3>
                    <p className=" wow animate__animated animate__fadeIn" data-wow-duration="1000ms" data-wow-delay="800ms">
                        Change the world via Interaction Design.
                    </p>
                    <div className="social">
                        <a href={LinkedIn.url} target="_" alt={LinkedIn.ref}>
                            <FontAwesomeIcon icon={brands("linkedin")} />
                        </a>
                        <a href={Google.url} target="_" alt={Google.ref}>
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

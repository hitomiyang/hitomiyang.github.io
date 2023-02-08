import React from 'react';

const NavSub = () => (
    <ul className="flex list-none flex-col flex-wrap lg:flex-row">
        <li className="nav-item">
            <a
                className="block py-2 px-4 text-[13px] font-light text-neutral-800 transition-all lg:px-2 lg:text-white/70"
                href="#about"
            >
                About
            </a>
        </li>
        <li className="nav-item">
            <a className="block py-2 px-4 text-[13px] font-light text-neutral-800 transition-all lg:px-2 lg:text-white/70" href="#work">
                Work Experience
            </a>
        </li>
        <li className="nav-item">
            <a
                className="block py-2 px-4 text-[13px] font-light text-neutral-800 transition-all lg:px-2 lg:text-white/70"
                href="#skills"
            >
                Skills
            </a>
        </li>
        <li className="nav-item">
            <a
                className="block py-2 px-4 text-[13px] font-light text-neutral-800 transition-all lg:px-2 lg:text-white/70"
                href="#project"
            >
                Project
            </a>
        </li>
        <li className="nav-item">
            <a
                className="block py-2 px-4 text-[13px] font-light text-neutral-800 transition-all lg:px-2 lg:text-white/70"
                href="#contact"
            >
                Contact
            </a>
        </li>
    </ul>
);

export default NavSub;

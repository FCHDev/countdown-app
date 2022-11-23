import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    // MENU ITEMS
    const menu = [
        {name: "Guess my death", link: "/"},
        {name: "Events to come", link: "/events"},
    ]

    // MENU BURGER STATE
    const [isOpen, setIsOpen] = useState(false)

    // CUSTOM BUTTON
    const ButtonGetStarted = () => {
        return (
            <button
                className="bg-[#c72330] text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-blue-300 duration-500">
                Get Started
            </button>
        )
    }

    // SVG LOGOS
    const menuBurger =
        <svg version="1.1" id="Capa_1"
             xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 50 50"
            // style="enable-background:new 0 0 50 50;"
             xmlSpace="preserve">
            <g>
                <rect y="3" width="50" height="2"/>
                <rect y="17" width="50" height="2"/>
                <rect y="31" width="50" height="2"/>
                <rect y="45" width="50" height="2"/>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
        </svg>

    const closeBurger = <svg version="1.1" id="Layer_1"
                             xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 371.23 371.23"
                             xmlSpace="preserve">
        <polygon points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23
	185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 "/>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
    </svg>


    return (
        <div className="shadow-md w-full fixed top-0 left-0 font-mono">
            <div className="md:flex items-center justify-between bg-white py-1 md:px-10 px-7">
                <div
                    className="font-bold font-mono md:text-3xl text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                    ⏱️ Time's running
                </div>
                <div onClick={() => setIsOpen(!isOpen)}
                     className="text-3xl w-5 absolute right-8 top-3.5 cursor-pointer md:hidden">
                    {isOpen ? closeBurger : menuBurger}
                </div>
                <ul className={`md:flex md:items-center
                    md:pb-0 pb-12 absolute md:static
                    bg-white md:z-auto z-[-1]
                    left-0 w-full md:w-auto 
                    md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-16 opacity-100' : 'top-[-490px]'} md:opacity-100`}>
                    {menu.map(item => (
                        <li key={item.name} className="md:ml-8 text-xl md:my0 my-7" onClick={() => {setIsOpen(false)}}>
                            <Link to={item.link}
                               className="text-gray-800 hover:text-gray-400 duration-500">{item.name}
                                </Link>
                        </li>
                    ))}
                    <ButtonGetStarted/>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;
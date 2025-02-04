import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const headerElm = document.getElementById("header") as HTMLElement
        const mainElm = document.getElementById("main") as HTMLElement

        let lastScrollTop = 0

        const handleScroll = () => {
            const currentScrollTop = mainElm.scrollTop
            
            if (currentScrollTop > lastScrollTop) {
                headerElm.style.transform = "translateY(-100%)"
            } else {
                headerElm.style.transform = "translateY(0)"
            }

            if (currentScrollTop >= 100) {
                headerElm.style.position = "fixed"
                headerElm.style.width = "100%"
            } else {
                headerElm.style.position = "relative"
            }

            lastScrollTop = currentScrollTop
        }

        mainElm.addEventListener("scroll", handleScroll)
        
        return () => {
            mainElm.removeEventListener("scroll", handleScroll)
        }
        
    }, []);

    return (
        <>
            <nav id="header" className=" bg-white/90 backdrop-blur-lg shadow-lg sticky top-0 z-50 transform-style-3d perspective-1000 transition-transform duration-300">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <span
                                className="text-lg md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transform-style-3d"
                                style={{
                                    display: "inline-block",
                                    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                                    transform: "translateZ(20px)",
                                }}
                            >
                                <span className="logo text-pink-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    A
                                </span>
                                <span className="logo text-pink-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    r
                                </span>
                                <span className="logo text-purple-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    g
                                </span>
                                <span className="logo text-purple-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    e
                                </span>
                                <span className="logo text-indigo-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    n
                                </span>
                                <span className="logo text-indigo-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    t
                                </span>
                                <span> </span>
                                <span className="logo text-pink-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    M
                                </span>
                                <span className="logo text-pink-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    o
                                </span>
                                <span className="logo text-purple-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    b
                                </span>
                                <span className="logo text-purple-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    i
                                </span>
                                <span className="logo text-indigo-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    l
                                </span>
                                <span className="logo text-indigo-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    e
                                </span>
                                <span> </span>
                                <span className="logo text-pink-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    R
                                </span>
                                <span className="logo text-pink-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    e
                                </span>
                                <span className="logo text-purple-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    p
                                </span>
                                <span className="logo text-purple-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    a
                                </span>
                                <span className="logo text-indigo-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    i
                                </span>
                                <span className="logo text-indigo-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    r
                                </span>
                                <span className="logo text-indigo-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    i
                                </span>
                                <span className="logo text-indigo-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    n
                                </span>
                                <span className="logo text-indigo-500 transform-style-3d hover:rotate-y-180 transition-transform duration-500">
                                    g
                                </span>
                            </span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a
                                href="#home"
                                className="text-gray-700 hover:text-pink-500 transition-colors transform-style-3d hover:translateZ(10px) transition-transform duration-300"
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className="text-gray-700 hover:text-pink-500 transition-colors transform-style-3d hover:translateZ(10px) transition-transform duration-300"
                            >
                                About Us
                            </a>
                            <a
                                href="#services"
                                className="text-gray-700 hover:text-purple-500 transition-colors transform-style-3d hover:translateZ(10px) transition-transform duration-300"
                            >
                                Services
                            </a>
                            <a
                                href="#store"
                                className="text-gray-700 hover:text-indigo-500 transition-colors transform-style-3d hover:translateZ(10px) transition-transform duration-300"
                            >
                                Store
                            </a>
                            <a
                            
                                href="#contact"
                                className="text-gray-700 hover:text-pink-500 transition-colors transform-style-3d hover:translateZ(10px) transition-transform duration-300"
                            >
                                Contact
                            </a>
                            <a
                                href="#book"
                                
                                className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform-style-3d hover:translateZ(20px)"
                            >
                                Book Repair
                            </a>
                        </div>

                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-700 hover:text-pink-500 transition-colors transform-style-3d hover:rotate-180 transition-transform duration-500"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={
                                            isMobileMenuOpen
                                                ? "M6 18L18 6M6 6l12 12"
                                                : "M4 6h16M4 12h16M4 18h16"
                                        }
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`md:hidden ${
                            isMobileMenuOpen ? "block" : "hidden"
                        } pb-4 transform-style-3d`}
                    >
                        <div className="flex flex-col space-y-4">
                            <a
                                onClick={() => setIsMobileMenuOpen(false)}
                                href="#home"
                                className="text-gray-700 hover:text-pink-500 transition-colors transform-style-3d hover:translateZ(10px) transition-transform duration-300"
                            >
                                Home
                            </a>
                            <a
                                onClick={() => setIsMobileMenuOpen(false)}
                                href="#about"
                                className="text-gray-700 hover:text-pink-500 transition-colors transform-style-3d hover:translateZ(10px) transition-transform duration-300"
                            >
                                About Us
                            </a>
                            <a
                                onClick={() => setIsMobileMenuOpen(false)}
                                href="#services"
                                className="text-gray-700 hover:text-purple-500 transition-colors transform-style-3d hover:translateZ(10px) transition-transform duration-300"
                            >
                                Services
                            </a>
                            <a
                                onClick={() => setIsMobileMenuOpen(false)}
                                href="#store"
                                className="text-gray-700 hover:text-indigo-500 transition-colors transform-style-3d hover:translateZ(10px) transition-transform duration-300"
                            >
                                Store
                            </a>
                            <a
                                onClick={() => setIsMobileMenuOpen(false)}
                                href="#contact"
                                className="text-gray-700 hover:text-indigo-500 transition-colors transform-style-3d hover:translateZ(10px) transition-transform duration-300"
                            >
                                Contact
                            </a>
                            <a
                                onClick={() => setIsMobileMenuOpen(false)}
                                href="#book"
                                className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full text-center hover:shadow-lg transition-all duration-300 transform-style-3d hover:translateZ(20px)"
                            >
                                Book Repair
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;

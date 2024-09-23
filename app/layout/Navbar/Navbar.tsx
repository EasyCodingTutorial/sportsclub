"use client"
import React, { useState } from 'react'

import styles from './Navbar.module.css'
import Link from 'next/link'

//  For  React Icons
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineCloseFullscreen } from "react-icons/md";



interface Types {
    LinkText: string,
    LinkTo: string,
}

const NavLinks: Types[] = [
    {
        LinkText: "Home",
        LinkTo: "",
    }, {
        LinkText: "Fixtures",
        LinkTo: "",
    }, {
        LinkText: "Teams",
        LinkTo: "",
    }, {
        LinkText: "News",
        LinkTo: "",
    }, {
        LinkText: "Standings",
        LinkTo: "",
    }, {
        LinkText: "Players",
        LinkTo: "",
    }, {
        LinkText: "Highlights",
        LinkTo: "",
    }, {
        LinkText: "Gallery",
        LinkTo: "",
    }, {
        LinkText: "About Us",
        LinkTo: "",
    }, {
        LinkText: "Contact",
        LinkTo: "",
    },
]

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)


    const toggleSlider = () => {
        setIsOpen(!isOpen)
    }


    return (
        <nav className={styles.Navbar}>
            <div>
                {
                    NavLinks.slice(0, 5).map((I) => (
                        <div key={I.LinkTo} className={styles.NavLinks}>
                            <Link href={I.LinkTo}>{I.LinkText}</Link>
                        </div>
                    ))
                }
            </div>

            <div>
                <img src="/assets/logo.png" alt="Logo" loading='lazy' />
            </div>

            <div>
                {
                    NavLinks.slice(5).map((I) => (
                        <div key={I.LinkTo} className={styles.NavLinks}>
                            <Link href={I.LinkTo}>{I.LinkText}</Link>
                        </div>
                    ))
                }
            </div>




            {/* for Slider */}
            <MdOutlineMenuOpen
                className={styles.MenuIcon}
                onClick={toggleSlider}
            />


            <div className={`${styles.Slider} ${isOpen ? styles.Open : ''}`}>

                <div className={styles.SliderContent}>
                    <MdOutlineCloseFullscreen
                        className={styles.CloseIcon}
                        onClick={toggleSlider}
                    />

                    {
                        NavLinks.map((I) => (
                            <div key={I.LinkTo} className={styles.NavLink}>
                                <Link href={I.LinkTo}>{I.LinkText}</Link>
                            </div>
                        ))
                    }


                </div>

            </div>


        </nav>
    )
}

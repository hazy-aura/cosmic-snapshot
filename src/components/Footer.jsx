import React from 'react';
import { IoIosArrowDropupCircle } from "react-icons/io";

function Footer() {
    return (
        <footer className='fixed w-full left-0 bottom-0 flex items-center gap-4 justify-between'>
            <h2>Mars-4th planet of solar system</h2>
            <h1>Cosmic Snapshot</h1>
            <button>
            <IoIosArrowDropupCircle />
            </button>
        </footer>
    );
}

export default Footer;
import { useState, useCallback } from "react";
import {Link} from 'react-router-dom';

export function MenuHeader() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = useCallback(() => {
        setOpenMenu(!openMenu);
        setTimeout(() => setOpenMenu(false), 15000);
      }, [openMenu]);

    return (
        <>
            <header className="flex gap-2 justify-around pt-3 pb-16 md:pb-32 items-center 2xl:pr-32 relative z-1">
                <div>
                    <img src="./public/Rivo.png" alt="logo" className='w-16 md:w-full logo' />
                </div>
                <nav>
                    <ul className="hidden md:flex justify-between uppercase w-5/12 gap-12 font-header-font text-main text-[22px] ">
                        <Link to='/decathlon-task' className='relative option'><li className="cursor-pointer hover:font-semibold option-li py-2">Home</li></Link>
                        <Link to='/decathlon-task/shop' className='relative option'><li className="cursor-pointer hover:font-semibold option-li py-2">Shop</li></Link>
                        <a href='#' className='relative option'><li className="cursor-pointer hover:font-semibold option-li py-2">Features</li></a>
                        <a href='#' className='relative option'><li className="cursor-pointer hover:font-semibold option-li py-2">Contact</li></a>
                    </ul>
                </nav>
                <div
                    className='mx-2 cursor-pointer md:hidden'
                    onClick={handleOpenMenu}
                >
                    <img src='./public/menu-mobile.svg' alt='menu' className='w-9 menu-mobile' />
                </div>
                <div className="flex justify-between item-center">
                    <img src="./public/Group 1.png" alt="basket" className="my-3 cursor-pointer w-[32px] h-[32px] basket" />
                    <button
                        className="border-2 rounded-sm border-text-header px-2 my-3 ml-2 md:px-7 md:my-2 md:ml-9 hover:bg-main hover:text-bg-header uppercase md:text-[20px] duration-300">Login</button>
                </div>
            </header>


            <div className={`absolute top-0 ${openMenu ? 'right-0' : 'right-[200%]'} duration-1000 w-full h-1/6 px-2 py-6 z-999 bg-bg-header`}>
                <ul className="uppercase w-full gap-3 text-main flex justify-around items-center mx-2">
                    <a href='#' className='relative option'><li className="cursor-pointer option-li pb-2">Home</li></a>
                    <a href='#' className='relative option'><li className="cursor-pointer option-li pb-2">Shop</li></a>
                    <a href='#' className='relative option'><li className="cursor-pointer option-li pb-2">Features</li></a>
                    <a href='#' className='relative option'><li className="cursor-pointer option-li pb-2">Contact</li></a>
                    <div className='cursor-pointerflex items-center mt-[-7px]'
                        onClick={handleOpenMenu}
                    >
                        <img src='./public/menu_open.svg' alt='menu' className='h-7 w-7 menu_open' />
                    </div>
                </ul>
            </div>
        </>
    )
}
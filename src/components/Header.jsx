import LogoSvg from '../assets/svg/LogoSvg'
import iconHamburger from '../assets/svg/icon-hamburger.svg'
import { useState } from 'react'
import { Menu } from './Menu'

export function Header() {


  const [showMenu, setShowMenu] = useState(false)
  const [backgroundNavbar, setBackgroundNavbar] = useState(false)

  const toggleShowMenu = () => setShowMenu(!showMenu)
  const changeBackground = () => {
    if (window.scrollY >= 100) setBackgroundNavbar(true);
    else setBackgroundNavbar(false);
  }

  window.addEventListener("scroll", changeBackground);

  return (
    <>
        <header className={`${backgroundNavbar ? 'bg-cyan-light' : 'bg-transparent '} flex justify-between px-6 lg:px-10 py-4 items-center fixed top-0 left-0 z-40 w-full`}>
            <LogoSvg color={'#fff'}/>
            <button className='hover:bg-white/20 transition-all p-1.5 rounded-full' onClick={toggleShowMenu}>
            <img src={iconHamburger} alt='icon svg hamburger' className='block lg:hidden w-6 h-5 cursor-pointer'/>
            </button>
            <ul className='text-white hidden lg:flex gap-x-6  items-center'>
                <li className='cursor-pointer hover:text-gray-300 transition-colors font-barlow '>About</li>
                <li className='cursor-pointer hover:text-gray-300 transition-colors font-barlow '>Services</li>
                <li className='cursor-pointer hover:text-gray-300 transition-colors font-barlow '>Projects</li>
                <li className={`${backgroundNavbar ? 'bg-yellow-400 text-white hover:text-black' : 'bg-white hover:bg-white/30 hover:text-white text-black '}  font-fraunces font-bold py-4 px-8 rounded-full cursor-pointer transition-all`}>CONTACT</li>
            </ul>
        </header>
        {showMenu && <Menu />}

    </>
  )
}

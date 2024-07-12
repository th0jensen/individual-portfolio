import { HashLink as Link } from 'react-router-hash-link'
import { useState } from 'react'

type HeaderProps = {
    onScroll: boolean
}

export default function Header({ onScroll }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header
            className={`navbar backdrop-blur-lg ${onScroll ? 'shadow-2xl' : ''} fixed z-50 w-full p-4`}
        >
            <div className='navbar-start flex w-full items-center justify-between xl:w-auto'>
                <Link to={'/#'} className='btn btn-ghost link-primary text-xl'>
                    {onScroll ? 'back to top' : 'thomas jensen'}
                </Link>
            </div>
            <button
                className='btn btn-ghost absolute right-0 xl:hidden'
                onClick={toggleMenu}
            >
                <svg
                    className='h-6 w-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d={
                            menuOpen
                                ? 'M6 18L18 6M6 6l12 12'
                                : 'M4 6h16M4 12h16m-7 6h7'
                        }
                    />
                </svg>
            </button>
            <nav
                className={`absolute right-14 gap-5 xl:flex ${menuOpen ? 'block' : 'hidden'} flex-col xl:flex-row`}
            >
                <Link
                    to={'#edu'}
                    className='btn btn-ghost link-primary text-xl'
                >
                    edu
                </Link>
                <Link
                    to={'#proj'}
                    className='btn btn-ghost link-primary text-xl'
                >
                    proj
                </Link>
                <Link
                    to={'#tech'}
                    className='btn btn-ghost link-primary text-xl'
                >
                    tech
                </Link>
            </nav>
        </header>
    )
}

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
            className={`navbar fixed z-50 w-screen p-4 backdrop-blur-2xl`}
            style={{
                boxShadow:
                    'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
            }}
        >
            <div
                className={`relative flex w-full basis-full items-center ${menuOpen ? 'hidden' : 'block'} justify-between px-5 md:block xl:w-auto`}
            >
                <Link to={'/#'} className='btn btn-ghost link-primary text-xl'>
                    {onScroll ? 'back to top' : 'thomas jensen'}
                </Link>
            </div>
            <nav
                className={`relative flex w-full basis-full justify-start gap-5 md:justify-end xl:flex ${menuOpen ? 'flex' : 'hidden'} flex-row px-5`}
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
            <button
                className='btn btn-ghost relative mx-5 xl:hidden'
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
        </header>
    )
}

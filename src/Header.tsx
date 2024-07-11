import { HashLink as Link } from 'react-router-hash-link'

type HeaderProps = {
    onScroll: boolean
}

export default function Header({ onScroll }: HeaderProps) {
    return (
        <header
            className={`navbar bg-base-100 ${onScroll ? 'shadow-2xl' : ''} fixed left-0 top-0 z-10 p-4`}
        >
            <div className='navbar-start'>
                <Link to={'/#'} className='btn btn-ghost link-primary text-xl'>
                    {onScroll ? 'back to top' : 'thomas jensen'}
                </Link>
            </div>
            <nav className='navbar-end gap-5'>
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

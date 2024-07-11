import { HashLink as Link } from 'react-router-hash-link'

export default function Header() {
    return (
        <header className='navbar bg-base-100 fixed top-0 left-0 z-10'>
            <div className='navbar-start'>
                <Link to={'/#'} className='btn btn-ghost text-xl link-primary'>
                    thomas jensen
                </Link>
            </div>
            <nav className='navbar-end'>
                <Link to={'#edu'} className='btn btn-ghost link-primary'>
                    edu
                </Link>
                <Link to={'#proj'} className='btn btn-ghost link-primary'>
                    proj
                </Link>
                <Link to={'#tech'} className='btn btn-ghost link-primary'>
                    tech
                </Link>
            </nav>
        </header>
    )
}

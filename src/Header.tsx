import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='navbar bg-base-300 fixed top-0 left-0'>
            <div className='navbar-start'>
                <span className='btn btn-ghost text-xl text-primary'>
                    Thomas Jensen
                </span>
            </div>
            <nav className='navbar-end'>
                <Link to={'#biography'} className='btn btn-ghost link-primary'>
                    Biography
                </Link>
                <Link to={'#education'} className='btn btn-ghost link-primary'>
                    Education
                </Link>
                <Link to={'#projects'} className='btn btn-ghost link-primary'>
                    Projects
                </Link>
                <Link
                    to={'#technologies'}
                    className='btn btn-ghost link-primary'
                >
                    Technologies
                </Link>
            </nav>
        </header>
    )
}

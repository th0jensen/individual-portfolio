import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div>
            <h1>Oops! You seem a bit lost...</h1>
            <p>These links may help you:</p>
            <Link to='/'>Home</Link>
        </div>
    )
}

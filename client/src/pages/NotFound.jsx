    import { Link } from 'react-router-dom'
    import './NotFound.css'

    export default function NotFound() {
    return (
        <main className="notfound-page">
        <section className="notfound-card" aria-labelledby="notfound-title">
            <p className="notfound-code">404</p>
            <h1 id="notfound-title">This page took a wrong turn.</h1>
            <p className="notfound-text">
            The page you’re looking for doesn’t exist or may have moved. Let’s get
            you back to where the work happens.
            </p>
            <Link to="/" className="notfound-link">
            Back to home <span aria-hidden="true">→</span>
            </Link>
        </section>
        </main>
    )
    }

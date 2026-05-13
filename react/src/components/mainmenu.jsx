import { Link } from 'react-router-dom'

export default function MainMenu() {
    return (
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/crm" className="nav-link">CRM</Link>
      </nav>
    )
}
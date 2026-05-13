import { Outlet, Link } from 'react-router-dom'
import '../styles/Layout.css'
import MainMenu from '../components/mainmenu'
import Search from '../components/Search'

export default function Layout({ loggedInUser }) {
  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <h1>ACTM Webshop Admin</h1>
          <Search />
          <p>Welcome {loggedInUser ? `${loggedInUser.firstname} ${loggedInUser.lastname}` : 'No user loaded'}</p>
        </div>
      </header>

      <MainMenu />

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <section className="footer-section">
            <h3>About ACTM Webshop</h3>
            <p>Your trusted online destination for quality products and excellent service.</p>
          </section>

          <section className="footer-section">
            <h3>Contact Information</h3>
            <p>
              ACTM Webshop<br />
              123 Commerce Street<br />
              San Francisco, CA 94105<br />
              Email: support@actmwebshop.com<br />
              Phone: +1 (555) 123-4567
            </p>
          </section>

          <section className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="/shipping">Shipping Information</a></li>
              <li><a href="/returns">Returns & Exchanges</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </section>

          <section className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/cookies">Cookie Policy</a></li>
            </ul>
          </section>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 ACTM Webshop. All rights reserved.</p>
          <p><Link to="/privacy">Privacy</Link></p>
        </div>
      </footer>
    </div>
  )
}

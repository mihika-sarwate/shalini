import Link from 'next/link'
import { urlFor } from '../lib/sanity'

export default function Navbar({ brand }) {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          {brand?.logo ? (
            <img src={urlFor(brand.logo).height(50).url()} alt={brand.brandName} />
          ) : (
            <span>{brand?.brandName || 'Brand'}</span>
          )}
        </Link>

        <ul className="nav-links">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#testimonials">Stories</Link></li>
          <li><Link href="#contact" className="contact-btn">Book Free Call</Link></li>
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          padding: 1rem 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
        }
        .logo {
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--color-primary);
          display: flex;
          align-items: center;
        }
        .logo img {
          height: 40px;
          width: auto;
        }
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          align-items: center;
          margin: 0;
          padding: 0;
        }
        .nav-links li a {
          color: var(--color-text-primary);
          font-weight: 500;
          font-size: 1rem;
          transition: color 0.2s;
        }
        .nav-links li a:hover {
          color: var(--color-accent);
        }
        .contact-btn {
          background: #00BFA6; /* Green/Teal */
          color: white !important;
          padding: 0.6rem 1.5rem;
          border-radius: 50px;
          box-shadow: 0 4px 10px rgba(0, 191, 166, 0.2);
          font-weight: 600;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 191, 166, 0.3);
          color: white !important;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none; /* Mobile menu todo */
          }
        }
      `}</style>
    </nav>
  )
}

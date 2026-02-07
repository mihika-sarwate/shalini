import { urlFor } from '../../lib/sanity'
import Link from 'next/link'

export default function Hero({ data }) {
  if (!data?.enabled) return null

  const { heading, subheading, image, ctaText, ctaLink, secondCtaText, secondCtaLink, colors } = data

  // Defaults from design
  const bgStart = colors?.backgroundStart || '#2E0249'
  const bgEnd = colors?.backgroundEnd || '#570A57'
  const headingColor = colors?.headingColor || '#FF9F1C'
  const subheadingColor = colors?.subheadingColor || 'rgba(255, 255, 255, 0.9)'
  const buttonColor = colors?.buttonColor || '#00BFA6'
  const buttonTextColor = colors?.buttonTextColor || '#ffffff'

  return (
    <section className="hero">
      <div className="container">
        <div className="content">
          {heading && <h1>{heading}</h1>}
          {subheading && <p>{subheading}</p>}
          <div className="cta-group">
            {ctaText && ctaLink && (
              <Link href={ctaLink} className="cta-button primary">
                {ctaText}
              </Link>
            )}
            {secondCtaText && secondCtaLink && (
              <Link href={secondCtaLink} className="cta-button secondary">
                {secondCtaText}
              </Link>
            )}
          </div>
        </div>
        {image && (
          <div className="image-wrapper">
            <img
              src={urlFor(image).width(800).url()}
              alt={heading || 'Hero Image'}
              className="hero-image"
            />
          </div>
        )}
      </div>

      <style jsx>{`
        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 2rem;
          background: linear-gradient(135deg, ${bgStart} 0%, ${bgEnd} 100%);
          color: white;
          min-height: 80vh;
        }
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 1200px;
          margin: 0 auto;
          gap: 4rem;
        }
        @media (min-width: 768px) {
          .container {
            flex-direction: row;
            text-align: left;
            justify-content: space-between;
          }
        }
        .content {
          flex: 1;
          max-width: 600px;
        }
        h1 {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          color: ${headingColor};
          line-height: 1.2;
        }
        p {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          color: ${subheadingColor};
          line-height: 1.6;
        }
        .cta-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        @media (min-width: 768px) {
          .cta-group {
            justify-content: flex-start;
          }
        }
        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          transition: transform 0.2s ease, opacity 0.2s ease;
          text-decoration: none;
        }
        .cta-button:hover {
          transform: translateY(-2px);
        }
        .cta-button.primary {
          background-color: ${buttonColor};
          color: ${buttonTextColor};
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        .cta-button.secondary {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .cta-button.secondary:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
        .image-wrapper {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-image {
          max-width: 100%;
          height: auto;
          max-height: 500px;
          object-fit: contain;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
        }
      `}</style>
    </section>
  )
}

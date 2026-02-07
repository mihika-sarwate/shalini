import { PortableText } from '@portabletext/react'
import { urlFor } from '../../lib/sanity'

export default function About({ data, founder }) {
  if (!data?.enabled) return null

  const { heading, content, image } = data
  // Use homepage specific content if available, fallback to founder bio if not
  const bio = content || founder?.longBio || []
  const profileImage = image || founder?.image

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="content">
          <div className="content-card">
            {heading && <h2>{heading}</h2>}
            <div className="bio">
              <PortableText value={bio} />
            </div>
            {founder?.credentials && (
              <ul className="credentials">
                {founder.credentials.map((cred, i) => (
                  <li key={i}>{cred}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="image-wrapper">
          {profileImage && (
            <img
              src={urlFor(profileImage).width(600).url()}
              alt={heading || "About Me"}
              className="about-image"
            />
          )}
        </div>
      </div>
      <style jsx>{`
        .about {
          padding: 6rem 2rem;
          background-color: var(--color-background);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column-reverse; /* Image on top on mobile if we want, or adjust */
          align-items: center;
          gap: 4rem;
        }
        
        /* Mobile: Image on top, Text on bottom */
        @media (max-width: 767px) {
            .container {
                flex-direction: column; 
            }
            .image-wrapper {
                margin-bottom: 2rem;
            }
        }

        @media (min-width: 768px) {
          .container {
            flex-direction: row; /* Text left, Image right */
            align-items: flex-start; /* Align top */
          }
        }
        
        .image-wrapper {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .about-image {
          max-width: 100%;
          border-radius: 20px;
          object-fit: cover;
          width: 400px;
          height: 500px; /* Taller portrait aspect if desired */
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .content {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .content-card {
            background: var(--color-background);
            padding: 2.5rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            border: 1px solid var(--color-border);
        }

        h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: var(--color-primary);
        }
        .bio {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--color-text-primary);
          margin-bottom: 2rem;
        }
        .credentials {
          list-style: none;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .credentials li {
          background: var(--color-secondary);
          color: white; 
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
        }
      `}</style>
    </section>
  )
}

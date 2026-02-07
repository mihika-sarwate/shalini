import { urlFor } from '../../lib/sanity'

export default function Testimonials({ data, testimonials }) {
    if (!data?.enabled) return null

    const { heading, subtitle } = data

    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="header">
                    {heading && <h2>{heading}</h2>}
                    {subtitle && <p>{subtitle}</p>}
                </div>

                <div className="grid">
                    {testimonials?.map((t) => (
                        <div key={t._id} className="card">
                            <div className="quote-icon">"</div>
                            <p className="content">{t.content}</p>
                            <div className="author">
                                {t.image && (
                                    <img src={urlFor(t.image).width(100).url()} alt={t.clientName} className="avatar" />
                                )}
                                <div className="info">
                                    <h4>{t.clientName}</h4>
                                    <span>{t.role}{t.company ? `, ${t.company}` : ''}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .testimonials {
          padding: 6rem 2rem;
          background-color: var(--color-background);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .header {
          text-align: center;
          margin-bottom: 4rem;
        }
        h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--color-primary);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .card {
          padding: 2rem;
          background: white;
          border: 1px solid #eee;
          border-radius: 12px;
          position: relative;
        }
        .quote-icon {
          font-size: 4rem;
          color: var(--color-accent);
          opacity: 0.2;
          position: absolute;
          top: 1rem;
          left: 1rem;
          font-family: serif;
          line-height: 1;
        }
        .content {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--color-text-primary);
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }
        .author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }
        .info h4 {
          margin: 0;
          font-size: 1rem;
          color: var(--color-text-primary);
        }
        .info span {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
        }
      `}</style>
        </section>
    )
}

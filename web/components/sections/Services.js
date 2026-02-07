import { urlFor } from '../../lib/sanity'

export default function Services({ data, services }) {
    if (!data?.enabled) return null

    const { heading, subtitle } = data

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="header">
                    {heading && <h2>{heading}</h2>}
                    {subtitle && <p>{subtitle}</p>}
                </div>

                <div className="grid">
                    {services?.map((service) => (
                        <div key={service._id} className="card">
                            {service.image && (
                                <div className="card-image">
                                    <img src={urlFor(service.image).width(400).height(250).url()} alt={service.title} />
                                </div>
                            )}
                            <div className="card-content">
                                <h3>{service.title}</h3>
                                <p className="description">{service.description}</p>
                                <div className="meta">
                                    <span className="mode">{service.mode}</span>
                                    {service.price && <span className="price">{service.price}</span>}
                                </div>
                                {service.ctaLink && (
                                    <a href={service.ctaLink} className="card-cta">
                                        {service.ctaText || 'Learn More'}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .services {
          padding: 6rem 2rem;
          background-color: #f9f9f9; /* Light contrast */
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
        .header p {
          font-size: 1.25rem;
          color: var(--color-text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.1);
        }
        .card-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .card-content {
          padding: 1.5rem;
        }
        h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--color-text-primary);
        }
        .description {
          color: var(--color-text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
          font-weight: 500;
        }
        .mode {
          text-transform: capitalize;
          background: #eee;
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
        }
        .card-cta {
          display: block;
          text-align: center;
          background: var(--color-accent);
          color: white;
          padding: 0.75rem;
          border-radius: 6px;
          font-weight: 600;
        }
      `}</style>
        </section>
    )
}

import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, Facebook, Youtube } from 'lucide-react'

export default function Contact({ data, contact, brand }) {
  if (!contact && !brand) return null

  // Use homepage contact section config for visibility/headings
  if (data && !data.enabled) return null

  const heading = data?.heading || 'Get in Touch'
  const subtitle = data?.subtitle || 'Let’s work together'

  // Icon helper
  const getSocialIcon = (platform) => {
    const p = platform.toLowerCase()
    if (p.includes('github')) return <Github />
    if (p.includes('linkedin')) return <Linkedin />
    if (p.includes('twitter')) return <Twitter />
    if (p.includes('instagram')) return <Instagram />
    if (p.includes('facebook')) return <Facebook />
    if (p.includes('youtube')) return <Youtube />
    return <Mail /> // Default
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="content-grid">
          {/* LEFT COLUMN: Contact Form */}
          <div className="form-card">
            <h3>Send Us a Message</h3>
            <form className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your.email@example.com" required />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input type="tel" placeholder="+91 9876543210" />
              </div>
              <div className="form-group">
                <label>Purpose of Inquiry</label>
                <select>
                  <option value="" disabled selected>Select a purpose</option>
                  <option value="general">General Inquiry</option>
                  <option value="service">Service Request</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Tell us more about what you're looking for..." required></textarea>
              </div>
              <button type="submit" className="submit-btn" onClick={(e) => e.preventDefault()}>Send Message</button>
            </form>
          </div>

          {/* RIGHT COLUMN: Contact Info */}
          <div className="info-column">
            <div className="info-cards">
              {contact?.phone && (
                <div className="info-card">
                  <div className="icon-circle phone">
                    <Phone size={24} />
                  </div>
                  <div className="info-text">
                    <span className="label">Phone</span>
                    <a href={`tel:${contact.phone}`} className="value">{contact.phone}</a>
                  </div>
                </div>
              )}
              {contact?.email && (
                <div className="info-card">
                  <div className="icon-circle email">
                    <Mail size={24} />
                  </div>
                  <div className="info-text">
                    <span className="label">Email</span>
                    <a href={`mailto:${contact.email}`} className="value">{contact.email}</a>
                  </div>
                </div>
              )}
              {contact?.location && (
                <div className="info-card">
                  <div className="icon-circle location">
                    <MapPin size={24} />
                  </div>
                  <div className="info-text">
                    <span className="label">Location</span>
                    <span className="value">{contact.location}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="socials-section">
              <h4>Follow {brand?.brandName || 'Us'} Online</h4>
              <div className="social-icons">
                {brand?.socials?.map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="social-icon">
                    {getSocialIcon(s.platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer>
          <p>&copy; {new Date().getFullYear()} {brand?.brandName || 'My Brand'}. All rights reserved.</p>
        </footer>
      </div>

      <style jsx>{`
        .contact {
          padding: 6rem 2rem 2rem;
          background-color: #F8F5FB; /* Light purple background based on image */
          color: #333;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .content-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }
        @media (min-width: 900px) {
          .content-grid {
            grid-template-columns: 1.2fr 1fr; /* Form slightly wider */
            align-items: start;
          }
        }
        
        /* FORM CARD */
        .form-card {
            background: white;
            padding: 2.5rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .form-card h3 {
            font-family: 'Playfair Display', serif;
            color: #570A57; /* Dark Purple */
            font-size: 2rem;
            margin-bottom: 2rem;
        }
        .form-group {
            margin-bottom: 1.5rem;
        }
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: #555;
            font-size: 0.9rem;
        }
        .form-group input, .form-group textarea, .form-group select {
            width: 100%;
            padding: 0.8rem 1rem;
            border: 1px solid #E0E0E0;
            border-radius: 8px;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.2s;
            font-family: inherit;
            background: #FAF9FC;
        }
        .form-group input:focus, .form-group textarea:focus, .form-group select:focus {
            border-color: #570A57;
        }
        .submit-btn {
            width: 100%;
            padding: 1rem;
            background-color: #570A57; /* Dark Purple */
            color: white;
            border: none;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.2s;
            margin-top: 1rem;
        }
        .submit-btn:hover {
            background-color: #2E0249;
        }

        /* INFO COLUMN */
        .info-column {
            display: flex;
            flex-direction: column;
            gap: 3rem;
        }
        .info-cards {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        .info-card {
            background: white;
            padding: 1.5rem 2rem;
            border-radius: 16px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.03);
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }
        .icon-circle {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        .icon-circle.phone { background-color: #E0F7FA; color: #00BCD4; }
        .icon-circle.email { background-color: #F3E5F5; color: #AB47BC; } /* Light purple bg, purple icon? Image shows yellowish envelope circle */
        .icon-circle.email { background-color: #FFF3E0; color: #FFA726; } /* Orange/Yellow per image */
        .icon-circle.location { background-color: #E8F5E9; color: #4CAF50; } /* Greenish per image */
        
        /* Adjustments to match image colors closer if needed */
        .icon-circle.phone { background-color: #D1F2EB; color: #00BFA6; } /* Teal-ish */
        .icon-circle.email { background-color: #FEF9E7; color: #F1C40F; } /* Yellow-ish */
        .icon-circle.location { background-color: #E8F8F5; color: #570A57; } /* Purple pin? Image shows purple pin in green circle? No, purple pin in green circle */
        .icon-circle.location { background-color: #EAFAF1; color: #570A57; } 

        .info-text {
            display: flex;
            flex-direction: column;
        }
        .label {
            font-size: 0.85rem;
            color: #888;
            margin-bottom: 0.25rem;
        }
        .value {
            font-size: 1.1rem;
            font-weight: 600;
            color: #570A57;
            text-decoration: none;
        }

        .socials-section {
            text-align: center;
        }
        .socials-section h4 {
            color: #888;
            font-weight: 400;
            margin-bottom: 1.5rem;
            font-size: 1rem;
        }
        .social-icons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
        }
        .social-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #E1DCEF; /* Light purple bg */
            color: #570A57; /* Dark purple icon */
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s, background-color 0.2s;
        }
        .social-icon:hover {
            transform: translateY(-2px);
            background-color: #D1C4E9;
        }

        footer {
            text-align: center;
            border-top: 1px solid rgba(0,0,0,0.05); /* Lighter border for light bg */
            padding-top: 2rem;
            font-size: 0.875rem;
            opacity: 0.7;
            color: #666;
        }
      `}</style>
    </section>
  )
}

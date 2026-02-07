import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children, theme, brand }) {
  // Set defaults if theme is missing
  const colors = theme?.colors || {
    primary: '#000000',
    secondary: '#333333',
    accent: '#0070f3',
    background: '#ffffff',
    textPrimary: '#000000',
    textSecondary: '#666666',
  }

  return (
    <>
      <style jsx global>{`
        :root {
          --color-primary: ${colors.primary};
          --color-secondary: ${colors.secondary};
          --color-accent: ${colors.accent};
          --color-background: ${colors.background};
          --color-text-primary: ${colors.textPrimary};
          --color-text-secondary: ${colors.textSecondary};
          --color-border: ${colors.borderColor || colors.secondary};
          --color-button-hover: ${colors.buttonHoverColor || colors.secondary};
          --color-link: ${colors.linkColor || colors.accent};
          --font-main: ${inter.style.fontFamily};
        }

        body {
          background-color: var(--color-background);
          color: var(--color-text-primary);
          font-family: var(--font-main), sans-serif;
          margin: 0;
          padding: 0;
        }

        a {
          color: var(--color-accent);
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <div className="layout-container">
        <Navbar brand={brand} />
        {children}
      </div>
    </>
  )
}

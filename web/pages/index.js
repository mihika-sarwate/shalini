import { sanityClient } from '../lib/sanity'
import { homePageQuery } from '../lib/queries'
import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Testimonials from '../components/sections/Testimonials'
import Contact from '../components/sections/Contact'

export async function getStaticProps() {
  let data = null

  try {
    data = await sanityClient.fetch(homePageQuery)
  } catch (error) {
    console.error("Sanity fetch failed (likely due to missing project ID):", error.message)
    // Return mock or empty data to allow build to pass without env vars
    data = {
      brand: { brandName: 'Brand Name' },
      homepage: {
        hero: { enabled: true, heading: 'Welcome to My Site', subtitle: 'Please configure Sanity to see your content.' },
        about: { enabled: true, heading: 'About Me' },
        services: { enabled: true, heading: 'My Services' },
      }
    }
  }

  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {
  const { theme, brand, homepage, founder, services, testimonials, contact, posts } = data || {}

  // If data is missing (e.g. build time with no data), we should handle gracefully
  if (!data) return <div>Loading...</div>

  return (
    <Layout theme={theme} brand={brand}>
      <Head>
        <title>{brand?.title || 'Personal Brand'}</title>
        <meta name="description" content={brand?.shortDescription || 'Welcome to my site'} />
      </Head>

      <main>
        {/* Render sections conditionally based on homepage config */}
        {homepage?.hero?.enabled && <Hero data={homepage.hero} />}

        {homepage?.about?.enabled && <About data={homepage.about} founder={founder} />}

        {homepage?.services?.enabled && <Services data={homepage.services} services={services} />}

        {homepage?.testimonials?.enabled && <Testimonials data={homepage.testimonials} testimonials={testimonials} />}

        {/* Contact section / Footer */}
        <Contact data={homepage?.contact} contact={contact} brand={brand} />

      </main>
    </Layout>
  )
}

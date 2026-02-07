import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const config = {
    // Find your project ID and dataset in `sanity.json` or performed queries
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2021-03-25',
    // useCdn == true gives fast, cheap responses using a globally distributed cache.
    // When in a static build, useCdn should be false for fresh data, or true if revalidating.
    // For static export, we want fresh data at build time, and subsequent hits are static HTML anyway.
    useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)

export const urlFor = (source) => imageUrlBuilder(config).image(source)

import { groq } from 'next-sanity'

export const homePageQuery = groq`
  {
    "theme": *[_type == "theme"][0],
    "brand": *[_type == "brand"][0],
    "homepage": *[_type == "homepage"][0] {
      ...,
      hero {
        ...,
        image { asset->, hotspot, crop }
      },
      about {
        ...,
        image { asset->, hotspot, crop }
      }
    },
    "founder": *[_type == "founder"][0] {
      ...,
      image { asset->, hotspot, crop }
    },
    "services": *[_type == "service"] | order(_createdAt asc) {
      ...,
      image { asset->, hotspot, crop }
    },
    "testimonials": *[_type == "testimonial"] | order(_createdAt desc) {
      ...,
      image { asset->, hotspot, crop }
    },
    "contact": *[_type == "contact"][0],
    "posts": *[_type == "post"] | order(publishedAt desc)[0...3] {
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage { asset->, hotspot, crop }
    }
  }
`

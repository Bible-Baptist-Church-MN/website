import {createClient} from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'xtbgrgsg',
  dataset: 'production',
  useCdn: true, // Use CDN for faster response
  apiVersion: '2024-01-01',
})

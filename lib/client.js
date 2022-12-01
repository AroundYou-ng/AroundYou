import sanityClient from '@sanity/client'
import ImageBuilder from '@sanity/image-url'



export const client = sanityClient({
    projectId: 'v8y5co37',
    dataset: 'production',
    apiVersion: '2022-11-29',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: true
});



const builder = ImageBuilder(client)


export const urlFor = (source)  => builder.image(source)
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import withMDX from "@next/mdx"



const confMDX = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  },
})
export default confMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  webpack: config => {
    config.resolve.fallback = {...config.resolve.fallback, net: false, os:false}
    return config;
  },
  images:{
    domains:[
      'images.pexels.com'
    ]
  }
})



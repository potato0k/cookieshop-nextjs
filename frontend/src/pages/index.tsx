import { NextPageContext } from 'next'
import React, { ReactElement } from 'react'
import { client } from '@sanity/lib/client'
import { IFeaturedItems } from '@/model'
import { Banner } from '@/features/home/Banner'
import { TopCategories } from '@/features/home/TopCategories'
import { FeaturedProducts } from '@src/features/home/FeaturedProducts'
import { NextPageWithLayout } from './_app'
import Layout from '@src/components/Layout/Layout'

interface BlogPageProps {
  featuredItems: IFeaturedItems[]
}

const Blog: NextPageWithLayout<BlogPageProps> = props => {
  const { featuredItems } = props

  return (
    <>
      <main>
        <Banner />
        <TopCategories categories={featuredItems[0].topCategories} />
        <FeaturedProducts
          title='Most Selling Products'
          products={featuredItems[0].topSellingProducts}
        />
        <FeaturedProducts
          title='Trending Products'
          products={featuredItems[0].trendingProducts}
        />
      </main>
    </>
  )
}

Blog.getLayout = function getLayout (page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Blog

export async function getStaticProps (context: NextPageContext) {
  const getAllFeaturedItemsQueries = `
  *[_type == "featuredProductsAndCategories"]{
    "topCategories": topCategories[]->{
        "id": _id,
        name,
        "slug": slug.current,
        "image": image.asset->url,
    },
    "bestDeals": bestDeals[]->{
        "id": _id,
        name,
        description,
        price,
        "slug": slug.current,
        rating,
        "mainImage": mainImage.asset->url,
    },
    "trendingProducts": trendingProducts[]->{
        "id": _id,
        name,
        description,
        price,
        "slug": slug.current,
        rating,
        "mainImage": mainImage.asset->url,
    },
    "topSellingProducts": topSellingProducts[]->{
        "id": _id,
        name,
        description,
        price,
        "slug": slug.current,
        rating,
        "mainImage": mainImage.asset->url,
    }
  }
`

  const featuredItems = await client.fetch(getAllFeaturedItemsQueries)

  console.log(featuredItems)

  return {
    props: {
      featuredItems
    },
    revalidate: 10
  }
}

import { Hero } from '@src/components/Hero/Hero'
import Layout from '@src/components/Layout/Layout'
import { AllProducts } from '@src/features/products'
import { client } from '@sanity/lib/client'
import { IProduct } from '@src/model'
import { NextPageContext } from 'next'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

interface ProductsPageProps {
  products: IProduct[]
}

const ProductsPage: NextPageWithLayout<ProductsPageProps> = props => {
  const { products } = props

  return (
    <>
      <Hero
        title='Freshly Baked Cookies'
        description='Find a variety of cookies to satisfy your sweet cravings!'
        btnText='View All Categories'
        imgStr='5.jpg'
        btnLink='/categories'
      />
      <AllProducts products={products} />
    </>
  )
}

ProductsPage.getLayout = function getLayout (page: ReactElement) {
  return <Layout>{page}</Layout>
}

export async function getStaticProps (context: NextPageContext) {
  const getAllCategoriesQueries = `
  *[_type == "product"] {
      "id": _id,
      name,
      description,
      price,   
      rating,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
  }
`

  const products = await client.fetch(getAllCategoriesQueries)

  return {
    props: {
      products
    },
    revalidate: 10
  }
}

export default ProductsPage

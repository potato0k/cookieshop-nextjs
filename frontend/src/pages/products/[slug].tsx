import { client } from '@sanity/lib/client'
import { IProduct } from '@src/model'
import { NextPageWithLayout } from '../_app'
import Layout from '@src/components/Layout/Layout'
import { ReactElement } from 'react'
import type { GetStaticPaths } from 'next'
import { ProductDetails } from '@src/features/products/ProductDetails'

interface ProductDetailsPageProps {
  product: IProduct
}

const ProductDetailsPage: NextPageWithLayout<
  ProductDetailsPageProps
> = props => {
  const { product } = props

  return (
    <>
      <ProductDetails product={product} />
    </>
  )
}

ProductDetailsPage.getLayout = function getLayout (page: ReactElement) {
  return <Layout>{page}</Layout>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await client.fetch(`*[_type == "product"].slug.current`)

  const paths = slugs.map((slug: string) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps (context: any) {
  const { params } = context
  const { slug } = params

  const query = `
  *[_type == "product" && slug.current == $slug][0] {
    ...,
    "id": _id,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    category->{
        name,
        "id": _id,
        "image": image.asset->url
    },
    "gallery": gallery[].asset->url
  }
`
  const product = await client.fetch(query, { slug })

  return { props: { product } }
}

export default ProductDetailsPage

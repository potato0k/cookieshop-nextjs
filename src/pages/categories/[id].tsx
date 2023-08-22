import { client } from '@sanity/lib/client'
import { Hero } from '@src/components/Hero/Hero'
import { AllProducts } from '@src/features/products'
import { IBreadcrumbItem, IProduct } from '@src/model'
import { NextPageWithLayout } from '../_app'
import Layout from '@src/components/Layout/Layout'
import { ReactElement } from 'react'
import type { GetStaticPaths } from 'next'

interface CategoryPageProps {
  products: IProduct[]
}

const items: IBreadcrumbItem[] = [
  {
    name: 'Products',
    link: '/products'
  },
  {
    name: 'Categories',
    link: '/categories'
  }
]

const CategoryPage: NextPageWithLayout<CategoryPageProps> = props => {
  const { products } = props

  return (
    <>
      {!products[0]?.category ? (
        <>
          <Hero
            title={products[0]?.category?.name}
            description={`Best and Affordable ${products[0]?.category?.name}`}
            imgStr={products[0]?.category?.image}
            btnText='View All Categories'
            btnLink='/categories'
          />
          <AllProducts
            products={products}
            breadcrumbItems={[
              ...items,
              { name: products[0]?.category?.name, link: '#' }
            ]}
          />
        </>
      ) : (
        <>
          <Hero
            title={products[0]?.category?.name}
            description={`Best and Affordable ${products[0]?.category?.name}`}
            imgStr={products[0]?.category?.image}
            btnText='View All Categories'
            btnLink='/categories'
          />
          <AllProducts
            products={products}
            breadcrumbItems={[
              ...items,
              { name: products[0]?.category?.name, link: '#' }
            ]}
          />
        </>
      )}
    </>
  )
}

CategoryPage.getLayout = function getLayout (page: ReactElement) {
  return <Layout>{page}</Layout>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = await client.fetch(`*[_type == "category"]._id`)
  const paths = ids.map((id: string) => ({ params: { id } }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps (context: any) {
  const { params } = context
  const { id } = params

  const getProductsQuery = `*[_type == "product" && references($id)] { 
    ...,
    "id": _id,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    category->{ name, "image": image.asset->url  }
  }
  `
  const products = await client.fetch(getProductsQuery, { id })

  console.log(products)
  return {
    props: { products },
    revalidate: 10
  }
}

export default CategoryPage

import { Hero } from '@src/components/Hero/Hero'
import { AllCategories } from '@src/features/categories'
import { client } from '@sanity/lib/client'
import { ICategory } from '@src/model'
import { NextPageContext } from 'next'
import { NextPageWithLayout } from '../_app'
import Layout from '@src/components/Layout/Layout'
import { ReactElement } from 'react'

interface AllCategoriesPageProps {
  categories: ICategory[]
}

const AllCategoriesPage: NextPageWithLayout<AllCategoriesPageProps> = props => {
  const { categories } = props

  return (
    <>
      <Hero
        title='Cookie Categories'
        description='Find a variety of cookies to satisfy your sweet cravings!'
        btnText='View All Products'
        imgStr='mac1.jpg'
        btnLink='/products'
      />
      <AllCategories categories={categories} />
    </>
  )
}

AllCategoriesPage.getLayout = function getLayout (page: ReactElement) {
  return <Layout>{page}</Layout>
}


export async function getStaticProps (context: NextPageContext) {
  const getAllCategoriesQueries = `
  *[_type == "category"] {
      "id": _id,
      name,
      "slug": slug.current,
      "image": image.asset->url 
  }
`

  const categories = await client.fetch(getAllCategoriesQueries)

  return {
    props: {
      categories
    },
    revalidate: 10
  }
}

export default AllCategoriesPage
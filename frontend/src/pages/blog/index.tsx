import { NextPage, NextPageContext } from 'next'
import { useEffect, useState } from 'react'
import client from '@/lib/sanity'
import Image from 'next/image'
import { ICategory } from '@/model'

interface BlogPageProps {
  categories: ICategory[]
}

const Blog: NextPage<BlogPageProps> = props => {
  const { categories } = props
  // const [blogData, setBlogData] = useState([])

  // useEffect(() => {
  //   async function fetchBlogData() {
  //     const res = await fetch("/api/blog")
  //     const data = await res.json()
  //     console.log(data)
  //     setBlogData(data)
  //   }

  //   fetchBlogData()
  // }, [])

  return (
    <>
      <section className={blogSectionClasses.container}>
        <h2 className={blogSectionClasses.heading}>Blog</h2>
        <p className={blogSectionClasses.subheading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className={blogSectionClasses.categoriesContainer}>
          {categories.map(blogCategory => (
            <BlogCategoryCard
              key={blogCategory.id}
              image={blogCategory.image}
              name={blogCategory.name}
              slug={blogCategory.slug}
            />
          ))}
        </div>
      </section>

    </>
  )
}

export default Blog

export async function getStaticProps (context: NextPageContext) {
  const categoryQuery =
    '*[_type == "category"] {..., "slug": slug.current, "image": image.asset->url, "id":_id}'
 
  
  const categories = await client.fetch(categoryQuery)

  console.log(categories)

  return {
    props: {
      categories
    },
    revalidate: 10
  }
}

const blogSectionClasses = {
  container: 'container mx-auto pb-20 pt-40 text-primary-dark px-4 lg:px-36',
  heading: 'text-4xl font-bold mb-6',
  subheading: 'text-gray-200 text-lg mb-12',
  categoriesContainer:
    'flex flex-col lg:flex-row gap-8 justify-between items-center'
}

const featuredPostSectionClasses = {
  container:
    'container mx-auto py-20 text-white px-6 lg:px-36 flex flex-col lg:flex-row items-center justify-center',
  imageContainer: 'w-full lg:w-2/3 order-2 lg:order-1',
  image: 'w-full h-full object-cover rounded-lg shadow-md',
  contentContainer: 'w-full lg:w-1/3 lg:pl-12 order-1 lg:order-2',
  title: 'text-4xl font-bold mb-6',
  description: 'text-gray-500 text-lg mb-8',
  featuresContainer: 'flex items-center mb-2',
  featureTick: 'text-green-500 mr-2',
  feature: 'text-gray-500'
}

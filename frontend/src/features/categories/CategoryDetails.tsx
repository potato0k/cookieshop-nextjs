   

import React from 'react'
import { Hero } from '@src/components/Hero/Hero'
import { AllProducts } from '@src/features/products'
import { CustomBreadcrumb } from '@src/components/CustomBreadcrumb'
import { IBreadcrumbItem, IProduct } from '@src/model'

interface ICategoryDetailsProps {
  products: IProduct[]
}

const items: IBreadcrumbItem[] = [
  { name: 'Products', link: '/products' },
  { name: 'Categories', link: '/categories' }
]
export const CategoryDetails = ({ products }: ICategoryDetailsProps) => {
  return (
    <>
      <Hero
        title={products[0].category!.name}
        description={`Best and Affordable ${products[0].category!.name}`}
        btnText='View All Categories'
        imgStr={products[0].category!.image}
        btnLink='/categories'
      />
      <CustomBreadcrumb
        items={[
          ...items,
          {
            name:
            products[0].category!.name.length > 20
                ? products[0].category!.name.substring(0, 20) + '...'
                : products[0].category!.name,
            link: `/category/${products[0].category?.id}`
          }
        ]}
      />
      <AllProducts products={products} />
    </>
  )
}

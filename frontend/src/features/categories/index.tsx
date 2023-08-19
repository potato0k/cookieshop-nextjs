'use client'

import { Grid } from '@chakra-ui/react'
import { CategoryCard } from '@src/components/CategoryCard'
import { ICategory } from '@src/model'
import React from 'react'

interface IAllCategoriesProps {
  categories: ICategory[]
}

export const AllCategories = ({ categories }: IAllCategoriesProps) => {
  return (
    <Grid
      w={{ base: '100%', lg: '90%' }}
      templateColumns={{ base: 'repeat(2,1fr)', lg: 'repeat(4,1fr)' }}
      gap='20px'
      mx='auto'
      p='2rem'
    >
      {categories.map(category => (
        <CategoryCard key={category.id} category={category} />
        // <GridItem w='100%' h='10' bg='blue.500'></GridItem>
      ))}
    </Grid>
  )
}

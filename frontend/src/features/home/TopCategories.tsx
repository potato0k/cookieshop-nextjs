'use client'

import { SectionHeading } from '@/components/SectionHeading'
import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image
} from '@chakra-ui/react'
import { ICategory } from '@src/model'
import Link from 'next/link'
import React from 'react'

interface topCategoriesProp {
  categories: ICategory[]
}

export const TopCategories = ({ categories }: topCategoriesProp) => {
  return (
    <Box w={{ base: '100%', lg: '90%' }} mx='auto' py='3rem' px='2rem'>
      <SectionHeading title='Show Our Top Categories' />
      <Grid
        gap={4}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)'
        }}
      >
        {categories.map(category => (
          <GridItem key={category.id}>
            <Link href={`/categories/${category.id}`}>
              <TopCategoryCard category={category} />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}

interface topCategoryProp {
  category: ICategory
}

const TopCategoryCard = ({ category }: topCategoryProp) => {
  return (
    <Card
      direction='row'
      align='center'
      overflow='hidden'
      variant='outline'
      borderColor='gray.200'
      w='100%'
      h='100%'
      p='10px'
      boxShadow='sm'
      _hover={{ cursor: 'pointer', bgColor: 'gray.100' }}
    >
      <Image
        src={category.image}
        objectFit='cover'
        alt={category.name}
        w={100}
        h={100}
      />
      <CardBody>
        <Heading
          fontWeight='semibold'
          size={{
            base: 'xs',
            md: 'sm'
          }}
        >
          {category.name}
        </Heading>
      </CardBody>
    </Card>
  )
}

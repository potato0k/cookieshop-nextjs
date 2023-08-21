   

import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
} from '@chakra-ui/react'
import React from 'react'
import { ICategory } from '@/model'
import Link from 'next/link'

interface ICategoryCardProps {
  category: ICategory
}

export const CategoryCard = ({ category }: ICategoryCardProps) => {
  return (
    <Link href={`/categories/${category.id}`}>
      <Card
        direction='column'
        align='center'
        overflow='hidden'
        variant='outline'
        w='100%'
        h='100%'
        p='10px'
        _hover={{ bgColor: 'gray.100', cursor: 'pointer' }}
      >
        <Image
          src={category.image}
          alt={category.name}
          objectFit='cover'
          width='200px'
          height='200px'
          rounded='md'
        />
        <CardBody>
          <Flex justify='space-between' align='center'>
            <Heading size={{ base: 'xs', lg: 'sm' }}>{category.name}</Heading>
          </Flex>
        </CardBody>
      </Card>
    </Link>
  )
}

import { Box, Divider, Flex, Image, Tag, Text } from '@chakra-ui/react'
import { IProduct } from '@src/model'
import Link from 'next/link'
import React from 'react'

interface ISearchedProductListProp {
  products: IProduct[]
  onClose: () => void
}

export const SearchedProductList = ({
  products,
  onClose
}: ISearchedProductListProp) => {
  return (
    <>
      {products.length !== 0 && <Divider />}
      {products.map((product, index) => (
        <Link
          key={product.id}
          href={`/products/${product.slug}`}
          onClick={onClose}
        >
          <Box
            borderBottomWidth='1px'
            borderBottomColor={
              index === products.length - 1 ? 'transparent' : 'gray.200'
            }
            _hover={{ bgColor: 'gray.100' }}
            py='5'
            px='2'
          >
            <Flex align='center'>
              <Image
                boxSize='24px'
                mr='10px'
                objectFit='cover'
                src={product.mainImage}
                alt={product.name}
              />
              <Text fontSize='xl'>{product.name}</Text>
            </Flex>
            <Flex justify='flex-end'>
              <Tag size='md'>{product.category.name}</Tag>
            </Flex>
          </Box>
        </Link>
      ))}
    </>
  )
}

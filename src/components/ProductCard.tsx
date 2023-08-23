import {
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Image,
  Spinner,
  Text
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Rating } from './Rating'
import { AddToCartButton } from './Cart/AddToCartButton'
import { IProduct } from '@/model'
import { AddToWishlist } from './Wishlist/AddToWishlist'
import Link from 'next/link'
import { getSubstring } from '@src/helpers'

interface IProductCardProps {
  product: IProduct
}

export const ProductCard = ({ product }: IProductCardProps) => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <Card
      w={{ base: '3xs', md: 'xs' }}
      pos='relative'
      m='0.5rem'
      h={{ base: '350px', md: '430px' }}
      direction='column'
      mx='auto'
    >
      <CardBody>
        <Flex mt='5' flexDir='column'>
          <AddToWishlist product={product} />
          <Link href={`/products/${product.slug}`}>
            {/* {isLoading && (
              <Center mx='auto' boxSize={{ base: '100', md: '200' }}>
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='brand.primary'
                  size='xl'
                />
              </Center>
            )} */}
            <Image
              // onLoad={() => {
              //   setIsLoading(false)
              // }}
              objectFit='cover'
              boxSize={{ base: '100', md: '200' }}
              alt={product.name}
              src={product.mainImage}
              mx='auto'
              mb='0.8rem'
              borderRadius='lg'
              // display={isLoading ? 'none' : 'block'}
            />
            {/* <Box
              boxSize={{ base: '125px', lg: '200px' }}
              bg={` center / contain no-repeat url(${product.mainImage})`}
              mx={{ base: '0', lg: 'auto' }}
              mb='0.8rem'
              borderRadius='lg'
              w={{ base: '125px', lg: '200px' }}
              h={{ base: '125px', lg: '200px' }}
            /> */}
          </Link>

          <Flex flexDir='column' gap={1}>
            <Flex justify='space-between' align='center'>
              <Heading size={{ base: 'xs', md: 'sm' }}>
                {getSubstring(product.name, 25)}
              </Heading>
              <Flex color='brand.primaryDark' fontWeight='bold'>
                <Text fontSize={{ base: 'xs', md: 'sm' }}>$</Text>
                <Text fontSize={{ base: 'xs', md: 'sm' }}>{product.price}</Text>
              </Flex>
            </Flex>
            <Text>{getSubstring(product.description, 20)}...</Text>
            <Rating rating={product.rating} />
            <Center><AddToCartButton product={product} count={1} /></Center>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  )
}

'use client'
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
  Text
} from '@chakra-ui/react'
import { AddToCartButton } from '@src/components/Cart/AddToCartButton'
import { CustomBreadcrumb } from '@src/components/CustomBreadcrumb'
import { Quantity } from '@src/components/Quantity'
import { Rating } from '@src/components/Rating'
import { AddToWishlistButton } from '@src/components/Wishlist/AddToWishlistButton'
import { AppContext } from '@src/context/AppContext'
import { getSubstring } from '@src/helpers'
import { IBreadcrumbItem, IProduct } from '@src/model'
import React, { useContext, useState } from 'react'

interface ProductDetailsProps {
  product: IProduct
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

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1)
  const { isAdded, addItem, resetItems } = useContext(AppContext)

  return (
    <>
      <CustomBreadcrumb
        items={[
          ...items,
          {
            name: product.category.name,
            link: `/categories/${product.category.id}`
          },
          {
            name: getSubstring(product.name, 20),
            link: `/products/${product.slug}`
          }
        ]}
      />
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        w={{ base: '100%', md: '90%' }}
        p='2rem'
        gap='20'
        mx='auto'
      >
        <GridItem p='1rem' pos='relative'>
          <Image
            src={product?.mainImage}
            alt={product.name}
            width={{ base:'auto', md:'300px', '2xl': '611px' }}
            objectFit='cover'
            rounded='lg'
            shadow='lg'
            mx='auto'
          />
          {/* TODO: fix product gallery */}
          {/* <Flex>
            {product.gallery?.length !== 0 &&
              product.gallery?.map((image, i) => (
                <Image
                  key={i}
                  src={image}
                  alt={product.name}
                  mx='auto'
                  boxSize='70px'
                  rounded='md'
                  shadow='sm'
                  borderWidth='1px'
                  borderColor='gray.100'
                  mt='0.7rem'
                  zIndex='9999'
                />
              ))}
          </Flex> */}
        </GridItem>
        <GridItem p='1rem'>
          <Heading>{product.name}</Heading>
          <Text my='1rem'>{product.description}</Text>
          <Rating rating={product.rating} />

          <Text fontWeight='bold' fontSize='2rem'>
            ${product.price}
          </Text>
          <Divider my='1rem' />
          <Quantity
            setQuantity={(_valueAsString, valueAsNumber) =>
              setQuantity(valueAsNumber)
            }
            isDisabled={isAdded('cart', product.id)}
          />
          <Divider my='1rem' />
          <Box>
            <Link href='/checkout'>
              <Button
                variant='outline'
                bgColor='brand.primary'
                color='white'
                borderRadius='50px'
                size='sm'
                w='160px'
                mr='1rem'
                my='0.5rem'
                _hover={{ bgColor: 'none' }}
                onClick={() => {
                  resetItems('checkout')
                  addItem('checkout', product, quantity)
                }}
              >
                Buy Now
              </Button>
            </Link>
            <AddToCartButton product={product} count={quantity} />
            <AddToWishlistButton product={product} />
          </Box>

          <Stack py='2rem'>
            <Box borderWidth={1} borderColor='gray.100' p='1rem'>
              <Text fontWeight='bold'>Free Deliver</Text>
              <Link textDecor='underline' color='gray.500'>
                Enter Your postal Code for Delivery Availability
              </Link>
            </Box>

            <Box borderWidth={1} borderColor='gray.100' p='1rem'>
              <Text fontWeight='bold'>Return Delivery</Text>
              <Text color='gray.500'>
                Free 30 Days Delivery Returns
                <Link textDecor='underline'> Details</Link>
              </Text>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </>
  )
}

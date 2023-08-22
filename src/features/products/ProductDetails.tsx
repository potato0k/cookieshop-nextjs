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
import React, { useContext, useEffect, useState } from 'react'

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
  const [imageShown, setImageShown] = useState(product.mainImage)
  const imgArray = [product.mainImage, ...product.gallery]

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
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        w={{ base: '100%', md: '90%' }}
        p='2rem'
        gap={{ base: '2', md: '10' }}
        mx='auto'
      >
        <GridItem p='1rem' pos='relative'>
          <Image
            src={imageShown}
            alt={product.name}
            width='auto'
            maxH='500px'
            objectFit='cover'
            rounded='lg'
            mx='auto'
          />

          <Flex mx='auto' maxWidth='340px' justify='center' gap={2}>
            {imgArray.map((image, i) => (
              <>
                <Image
                  key={i}
                  onClick={() => setImageShown(image)}
                  src={image}
                  alt={product.name}
                  boxSize='70px'
                  rounded='md'
                  objectFit='cover'
                  mt='0.7rem'
                  cursor='pointer'
                  _hover={{ boxSize: '75px', borderWidth:'100px', borderColor: 'brand.primary' }}
                />
              </>
            ))}
          </Flex>
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
                bgColor='brand.primary'
                color='white'
                rounded='full'
                _hover={{ bgColor: 'brand.primaryDark' }}
                borderRadius='50px'
                mr='1rem'
                my='0.5rem'
                size='sm'
                w='150px'
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

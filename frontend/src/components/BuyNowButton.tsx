   

import { Box, Button } from '@chakra-ui/react'
import { AppContext } from '@src/context/AppContext'
import { IItem, IProduct } from '@src/model'
import Link from 'next/link'
import React, { useContext } from 'react'

interface IBuyNowButtonProps {
  product: IProduct
  count?: number
}

export const BuyNowButton = ({ product, count }: IBuyNowButtonProps) => {
  const {
    state: { cart },
    addItem,
    resetItems
  } = useContext(AppContext)

  return (
    <>
      <Link href='/checkout'>
        <Button
          variant='outline'
          borderColor='brand.primary'
          bgColor='brand.primary'
          color='white'
          rounded='full'
          size='sm'
          mr='1rem'
          my='0.5rem'
          w='160px'
          cursor='pointer'
          onClick={() => {
            resetItems('checkout')
            addItem('checkout', product, count)
          }}
          _hover={{ bgColor: 'brand.primaryDark' }}
        >
          Buy Now
        </Button>
      </Link>
    </>
  )
}

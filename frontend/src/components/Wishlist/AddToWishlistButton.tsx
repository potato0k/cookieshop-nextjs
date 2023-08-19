'use client'

import { Button, Text } from '@chakra-ui/react'
import { AppContext } from '@src/context/AppContext'
import { IProduct } from '@src/model'
import React, { useContext } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

interface IAddToWishlistProps {
  product: IProduct
}

export const AddToWishlistButton = ({ product }: IAddToWishlistProps) => {
  const { addItem, removeItem, isAdded } = useContext(AppContext)
  return (
    <>
      {isAdded('wishlist', product.id) ? (
        <Button
          variant='outline'
          bgColor='transparent'
          borderColor="gray.200"
          color="red"
          borderRadius="50px"
          _hover={{ bgColor: 'transparent' }}
          rounded='full'
          cursor='pointer'
          mr='1rem'
          my='0.5rem'
          size="sm"
          onClick={() => removeItem('wishlist', product.id)}
        >
          <BsHeartFill size={20} />
          <Text mx='1.5'>Remove from Wishlist</Text>
        </Button>
      ) : (
        <Button
          variant='outline'
          bgColor='transparent'
          _hover={{ bgColor: 'transparent' }}
          rounded='full'
          cursor='pointer'
          onClick={() => addItem('wishlist', product)}
          borderColor="gray.200"
          color="red"
          mr='1rem'
          my='0.5rem'
          size="sm"
          borderRadius="50px"
        >
          <BsHeart size={20} />
          <Text mx='1.5'>Add to Wishlist</Text>
        </Button>
      )}
    </>
  )
}

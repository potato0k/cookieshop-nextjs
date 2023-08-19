'use client'

import { Button } from '@chakra-ui/react'
import { AppContext } from '@src/context/AppContext'
import { IProduct } from '@src/model'
import React, { useContext } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

interface IAddToWishlistProps {
  product: IProduct
}

export const AddToWishlist = ({ product }: IAddToWishlistProps) => {
  const { addItem, removeItem, isAdded } = useContext(AppContext)
  return (
    <>
      {isAdded('wishlist', product.id) ? (
        <Button
          variant='ghost'
          bgColor='transparent'
          pos='absolute'
          top='1'
          left='0'
          color='red'
          _hover={{ bgColor: 'transparent' }}
          rounded='full'
          cursor='pointer'
          onClick={() => removeItem('wishlist', product.id)}
        >
          <BsHeartFill size={20}/>
        </Button>
      ) : (
        <Button
          variant='ghost'
          bgColor='transparent'
          pos='absolute'
          top='1'
          left='0'
          color='red'
          _hover={{ bgColor: 'transparent' }}
          rounded='full'
          cursor='pointer'
          onClick={() => addItem('wishlist', product)}
        >
          <BsHeart size={20}/>
        </Button>
      )}
    </>
  )
}

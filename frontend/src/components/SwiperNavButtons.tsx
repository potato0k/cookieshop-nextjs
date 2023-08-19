'use client'

import React from 'react'
import { Box, Center, IconButton } from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useSwiper } from 'swiper/react'

export const SwiperNavButtons = () => {
  const swiper = useSwiper()

  return (
    <Center my='1rem' >
      <IconButton
        rounded='lg'
        icon={<FaChevronLeft />}
        borderColor='brand.primary'
        borderWidth='1px'
        color='brand.primaryDark'
        bgColor='white'
        aria-label='Prev'
        onClick={() => swiper.slidePrev()}
        mx='1'
      />
      <IconButton
        rounded='lg'
        icon={<FaChevronRight />}
        borderColor='brand.primary'
        borderWidth='1px'
        color='brand.primaryDark'
        bgColor='white'
        aria-label='Prev'
        onClick={() => swiper.slideNext()}
        mx='1'
      />
    </Center>
  )
}

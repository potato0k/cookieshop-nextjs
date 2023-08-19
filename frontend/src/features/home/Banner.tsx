'use client'

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react'
import React from 'react'
import {
  bannerBtnStyles,
  bannerHeadingStyles,
  bannerImageStyles,
  bannerStyles,
  bannerTextStyles
} from './styles'
import Link from 'next/link'

export const Banner = () => {
  return (
    <Flex {...bannerStyles}>
      <Box w={{ base: '100%', lg: '50%' }}>
        <Stack gap='3'>
          <Heading {...bannerHeadingStyles}>
            Get Freshly Baked Cookies Anywhere Anytime
          </Heading>
          <Text {...bannerTextStyles}>
            Get Freshly Baked Cookies Anywhere Anytime
          </Text>
          <Link href='/products'>
            <Button {...bannerBtnStyles}>Shop Now</Button>
          </Link>
        </Stack>
      </Box>
      <Box w={{ base: '100%', lg: '50%' }} mt='1rem'>
        <Image src='cookie_banner.png' alt='banner_img' {...bannerImageStyles}></Image>
      </Box>
    </Flex>
  )
}

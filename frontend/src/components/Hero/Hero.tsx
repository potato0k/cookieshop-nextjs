   

import {
  Box,
  Button,
  ButtonProps,
  Card,
  CardProps,
  Heading,
  HeadingProps,
  Image,
  Stack,
  Text,
  TextProps
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

interface IHeroProps {
  title?: string
  description: string
  btnText: string
  imgStr?: string
  btnLink: string
}

export const Hero = ({
  title,
  description,
  btnText,
  btnLink,
  imgStr
}: IHeroProps) => {
  return (
    <Card {...heroCardStyles}>
      <Box w={{ base: '100%', md: '50%' }} mx='auto' mb='2rem'>
        <Stack w={{ base: '100%', '2xl': '80%' }} gap='2' mx='auto' pr='1rem'>
          <Heading {...bannerHeadingStyles}>{title}</Heading>
          <Text {...bannerTextStyles}>{description}</Text>
          <Link href={btnLink}>
            <Button {...bannerBtnStyles}>{btnText}</Button>
          </Link>
        </Stack>
      </Box>
      <Box w={{ base: '100%', sm: '50%' }} mx='auto'>
        <Image
          w={{ base: '100%', '2xl': '611px' }}
          src={imgStr}
          alt={title}
          objectFit='cover'
          rounded='md'
          mx='auto'
        />
      </Box>
    </Card>
  )
}

const heroCardStyles: CardProps = {
  direction: { base: 'column', md: 'row' },
  align: 'center',
  justify: 'center',
  overflow: 'hidden',
  variant: 'outline',
  w: { base: '100%', md: '90%' },
  mx: 'auto',
  shadow: 'sm',
  p: '2rem',
  mb: '2rem'
}

export const bannerHeadingStyles: HeadingProps = {
  fontSize: { base: '3xl', lg: '5xl' },
  lineHeight: { base: '2.2rem', lg: '4rem' },
  color: 'brand.primary',
  letterSpacing: 3
}

export const bannerTextStyles: TextProps = {
  fontSize: { base: 'xl', lg: '2xl' },
  py: '1rem',
  maxW: '600px'
}

export const bannerBtnStyles: ButtonProps = {
  bgColor: 'brand.primary',
  _hover: { bgColor: 'brand.primaryDark' },
  color: 'white',
  rounded: 'full',
  minW: '10rem'
}

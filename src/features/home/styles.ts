import {
  ButtonProps,
  FlexProps,
  HeadingProps,
  ImageProps,
  TextProps
} from '@chakra-ui/react'

export const bannerStyles: FlexProps = {
  w: { base: '100%', lg: '90%' },
  mx: 'auto',
  justify: 'center',
  align: 'center',
  gap: '2',
  flexDir: { base: 'column', lg: 'row' },
  px: '4rem',
  py: '2rem',
}

export const bannerHeadingStyles: HeadingProps = {
  letterSpacing: 3,
  fontSize: { base: '3xl', lg: '6xl' },
  lineHeight: { base: '2.2rem', lg: '4rem' },
  color: 'brand.primary'
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
  minW: '10rem',
}

export const bannerImageStyles: ImageProps = {
  objectFit: 'cover',
  rounded: 'lg',
  maxW: '70%',
  mx: 'auto'
}
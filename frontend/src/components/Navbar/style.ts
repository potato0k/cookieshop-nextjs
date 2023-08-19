import { BoxProps, FlexProps, StackProps } from '@chakra-ui/react'

export const navbarStyles: BoxProps = {
  pos: 'fixed',
  w: '100%',
  bgColor: 'white',
  mb: '1rem',
  zIndex: 10
}

export const desktopNavStyles: FlexProps = {
  justify: 'space-between',
  align: 'center',
  px: '2rem',
  py: '1rem',
  borderBottomWidth: '1px',
  borderColor: 'gray.200',
  display: { base: 'none', lg: 'flex' }
}

export const logoSectionStyles: StackProps = {
  direction: 'row',
  alignItems: 'center',
  gap: 8,
  flex: 1
}

export const cartSectionStyles: StackProps = {
  direction: 'row',
  spacing: 4
}

export const mobileNavContainterStyles: FlexProps = {
  justify: 'space-between',
  align: 'center',
  px: '2rem',
  py: '1rem',
  borderBottomWidth: '1px',
  borderColor: 'gray.200',
  display: { base: 'flex', lg: 'none' }
}

export const mobileSearchWrapper: BoxProps = {
  px: '2rem',
  py: '0.5rem',
  mb: '1rem',
  display: { base: 'flex', lg: 'none' }
}

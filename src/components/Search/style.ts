import { BoxProps, InputProps } from '@chakra-ui/react'

export const searchInputStyles: InputProps = {
  type: 'string',
  placeholder: 'Search products...',
  focusBorderColor: 'brand.primary',
  borderWidth: '1px',
  borderColor: 'gray.400'
}

export const wrapperContainerStyles: BoxProps = {
  w: { base: '100%', lg: '16rem' }
}

export const dropDownStyles: BoxProps = {
  pos: 'absolute',
  bg: 'white',
  shadow: 'md',
  padding: '0.5rem',
  w: '100%',
  maxH: '500px',
  overflowY: 'auto',
  boxSizing: 'border-box'
}

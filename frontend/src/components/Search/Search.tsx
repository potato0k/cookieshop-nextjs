'use client'

import { SearchIcon } from '@chakra-ui/icons'
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure
} from '@chakra-ui/react'
import { groq } from 'next-sanity'
import { SearchModal } from './SearchModal'
import { searchInputStyles, wrapperContainerStyles } from './style'

const query: string = groq`
    *[_type == "product" && (name match $searchText || description match $searchText)] {
        ...,
        "id": _id,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{ name, "id": _id, "image": image.asset->url  },
        "gallery": gallery[].asset->url
    }
`

export const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box {...wrapperContainerStyles}>
      <InputGroup size='sm' w={{ base:'100%', lg:'16rem' }}>
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.400' />
        </InputLeftElement>
        <Input onClick={onOpen} {...searchInputStyles} />
      </InputGroup>
      <SearchModal onClose={onClose} isOpen={isOpen} />
    </Box>
  )
}

import { SearchIcon } from '@chakra-ui/icons'
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure
} from '@chakra-ui/react'
import { SearchModal } from './SearchModal'
import { searchInputStyles, wrapperContainerStyles } from './style'

export const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box {...wrapperContainerStyles}>
      <InputGroup size='sm' w={{ base: '100%', lg: '16rem' }}>
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.400' />
        </InputLeftElement>
        <Input onClick={onOpen} {...searchInputStyles} />
      </InputGroup>
      <SearchModal onClose={onClose} isOpen={isOpen} />
    </Box>
  )
}

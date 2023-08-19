'use client'

import {
  Box,
  Button,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useOutsideClick
} from '@chakra-ui/react'
import { IProduct } from '@src/model'
import { client } from '@utils/sanity.client'
import { groq } from 'next-sanity'
import { useEffect, useRef, useState } from 'react'

import React from 'react'
import {
  dropDownStyles,
  searchInputStyles,
  wrapperContainerStyles
} from './style'
import { SearchIcon } from '@chakra-ui/icons'
import { SearchedProductList } from './SearchedProductList'

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

interface ISearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export const SearchModal = ({ isOpen, onClose }: ISearchModalProps) => {
  const ref = useRef<any>()
  const [searchText, setSearchText] = useState('')
  const [products, setProducts] = useState<IProduct[]>([])

  const fetchProducts = async () => {
    const products: IProduct[] = await client.fetch(query, {
      searchText: `*${searchText}*`
    })
    setProducts(products)
  }
  useOutsideClick({
    ref,
    handler: () => {
      onClose
      setSearchText('')
      setProducts([])
    }
  })

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText.trim().length >= 3) {
        fetchProducts()
      }
    }, 1000)

    return () => clearTimeout(timeout)
  }, [searchText])

  return (
    <>
      <Box ref={ref}>
        <Modal size='xl' isOpen={isOpen} onClose={onClose}>
          <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
          <ModalContent>
            <ModalBody>
              <Box ref={ref}>
                <InputGroup size='lg' w='100%' my='1rem'>
                  <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray.400' boxSize={6} />
                  </InputLeftElement>
                  <Input
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    type='string'
                    placeholder='Search products'
                    borderColor='transparent'
                    size='lg'
                    focusBorderColor='transparent'
                  />
                </InputGroup>
                {
                  <Box>
                    {
                      <SearchedProductList
                        products={products}
                        onClose={onClose}
                      />
                    }
                  </Box>
                }
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  )
}

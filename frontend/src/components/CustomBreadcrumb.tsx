'use client'

import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text
} from '@chakra-ui/react'
import { IBreadcrumbItem } from '@src/model'
import React from 'react'

interface ICustomBreadCrumbsProps {
  items?: IBreadcrumbItem[]
}
export const CustomBreadcrumb = ({ items = [] }: ICustomBreadCrumbsProps) => {
  return (
    <>
      {items.length > 0 && (
        <Breadcrumb
          spacing='8px'
          separator={<ChevronRightIcon color='gray.500' />}
          w={{ base: '100%', lg: '90%' }}
          py={{ base: '0.5rem', lg: '2rem' }}
          px='2rem'
          mx='auto'
          fontSize={{ base: 'xs', md: 'md' }}
        >
          {items.map((item, index) =>
            index !== items.length - 1 ? (
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href={item.link}>{item.name}</BreadcrumbLink>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem key={index}>
                <Text fontWeight='bold'>{item.name}</Text>
              </BreadcrumbItem>
            )
          )}
        </Breadcrumb>
      )}
    </>
  )
}

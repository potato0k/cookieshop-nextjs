   
import React from 'react'
import { CSSProperties } from 'react'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Box } from '@chakra-ui/react'

import { ProductCard } from '@/components/ProductCard'
import { SectionHeading } from '@/components/SectionHeading'
import { SwiperOptions } from 'swiper/types'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { SwiperNavButtons } from '@/components/SwiperNavButtons'
import { IProduct } from '@/model'

const slideStyles: CSSProperties = {
  boxSizing: 'border-box',
  width: 'auto'
}

interface FeaturedProductsProps {
  title: string
  products: IProduct[]
}

export const FeaturedProducts = ({
  title,
  products
}: FeaturedProductsProps) => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y, Pagination, Autoplay],
    spaceBetween: 10,
    slidesPerView: 'auto',
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  }
  // w={{ base: '100%', lg: '90%' }} mx='auto' py='3rem' px='2rem'
  return (
    <Box w={{ base: '100%', lg: '90%' }} mx='auto' pb='2rem' px='2rem' h='100%'>
      <SectionHeading title={title} />
      <Swiper {...sliderSettings} style={{ width: '100%', height: '100%' }}>
        {products.map(product => (
          <SwiperSlide key={product.id} style={slideStyles}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </Box>
  )
}

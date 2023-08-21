import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Spinner,
  Stack,
  Text
} from '@chakra-ui/react'
import {
  bannerBtnStyles,
  bannerHeadingStyles,
  bannerImageStyles,
  bannerStyles,
  bannerTextStyles
} from './styles'

import Link from 'next/link'
import { useState } from 'react'

export const Banner = () => {
  const [isLoading, setIsLoading] = useState(true)

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
        {isLoading && (
          <Center mx='auto'>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='brand.primary'
              size='xl'
            />
          </Center>
        )}

        <Image
          onLoad={() => {
            setIsLoading(false)
          }}
          src='cookie_banner.png'
          alt='banner_img'
          {...bannerImageStyles}
          display={isLoading ? 'none' : 'block'}
        ></Image>
      </Box>
    </Flex>
  )
}

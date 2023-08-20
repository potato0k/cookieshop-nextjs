import Layout from '@src/components/Layout/Layout'
import { Checkout } from '@src/features/checkout'
import React, { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

const CheckoutPage: NextPageWithLayout = () =>  {
  return <Checkout />
}

CheckoutPage.getLayout = function getLayout (page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default CheckoutPage
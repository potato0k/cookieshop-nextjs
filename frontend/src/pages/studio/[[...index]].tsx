import React, { ReactElement } from 'react'
import { NextStudio } from 'next-sanity/studio'
import { config } from '@sanity.config'
import type { NextPageWithLayout } from '../_app'
import Layout from '@src/components/Layout/Layout'

const StudioPage: NextPageWithLayout = () => {
  return <NextStudio config={config} />
}

StudioPage.getLayout = function getLayout (page: ReactElement) {
  return <Layout isAdminPage={true}>{page}</Layout>
}

export default StudioPage

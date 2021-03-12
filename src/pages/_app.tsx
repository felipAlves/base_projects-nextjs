import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { Layout } from '../../components/global/Layout'
import { DashboardLayout } from '../../components/global/DashboardLayout'

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  console.log()
  if (router.pathname.startsWith('/dashboard/')) {
    return (
      <ThemeProvider theme={theme}>
        <DashboardLayout>
          <Component {...pageProps} />
          <GlobalStyle />
        </DashboardLayout>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp

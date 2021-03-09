import React from 'react'
import ThemeContainer from '../../contexts/theme/ThemeContainer'

import { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  )
}

export default MyApp

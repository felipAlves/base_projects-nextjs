import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Layout } from '../../../components/global/Layout'

it('should render Home', () => {
  const { getByText } = render(
    <Layout>
      <div></div>
    </Layout>
  )
  expect(getByText('Home')).toBeInTheDocument()
})

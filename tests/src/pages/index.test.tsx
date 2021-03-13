import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../../../src/pages/index'

it('should render Home', () => {
  const { getByText } = render(<Home />)
  expect(getByText('Home')).toBeInTheDocument()
})

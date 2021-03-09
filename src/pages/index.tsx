import React from 'react'

import { Spinner, Text } from '@chakra-ui/react'
import { useAxios } from '../hooks/api/useAxios'

const Home = (): JSX.Element => {
  const { data } = useAxios('/appointments')

  if (!data) {
    return (
      <p>
        Carregando <Spinner />
      </p>
    )
  }

  return (
    <div>
      {data.data.map(appointment => (
        <Text key={appointment.id} fontSize="6xl">
          {appointment.title}
        </Text>
      ))}
    </div>
  )
}

export default Home

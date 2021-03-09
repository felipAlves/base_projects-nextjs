import useSWR from 'swr'
import { api } from '../../../utils/api'

export function useAxios(url: string) {
  const { data, error } = useSWR(url, async url => {
    const data = await api.get(url)

    return data
  })

  return { data, error }
}

/* eslint-disable no-shadow */
import useSWR from 'swr';
import api from '../server/api';

export default function useFetch(endpoint) {
  const { data, error } = useSWR(endpoint, async (endpoint) => {
    const response = await api.get(endpoint);

    return response.data;
  });

  return { data, error };
}

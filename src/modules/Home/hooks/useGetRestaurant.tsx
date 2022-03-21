import { getSDK } from '@/graphql/client';
import { QueryCompanyInput } from '@/graphql/generated/graphql';
import { useState } from 'react';

export default function useGetRestaurant() {
  const [{ fetching, error, data }, setState] = useState<{
    fetching: boolean;
    error?: any;
    data?: any;
  }>({
    fetching: false,
    data: {},
  });

  const onGetRestaurant = (input: QueryCompanyInput) => {
    setState((state) => ({
      ...state,
      fetching: true,
    }));
    getSDK()
      .getCompany({ input })
      .then((data) => {
        setState((state) => ({
          ...state,
          fetching: false,
          data,
        }));
      })
      .catch((error: any) => {
        setState({
          fetching: false,
          error,
        });
      });
  };

  return {
    fetching,
    error,
    data,
    onGetRestaurant,
  };
}

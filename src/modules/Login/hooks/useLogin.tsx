import { getSDK } from '@/graphql/client';
import { LoginInput } from '@/graphql/generated/graphql';
import { useState } from 'react';

export default function useLogin() {
  const [{ fetching, error, data }, setState] = useState<{
    fetching: boolean;
    error?: any;
    data?: any;
  }>({
    fetching: false,
    data: undefined,
  });
  // const [data, setData] = useState
  const onLogin = async (input: LoginInput) => {
    setState((state) => ({
      ...state,
      fetching: true,
    }));
    await getSDK()
      .login({ input })
      .then((data) => {
        setState({ fetching: false, data });
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
    onLogin,
  };
}

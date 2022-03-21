import { GraphQLClient } from 'graphql-request';
import env from '../env';
import { getSdk } from './generated/graphql';

export const getClient = (auth = true, signal?: AbortSignal) => {
  const headers: { [k: string]: any } = {};

  const lang = 'vi';

  // if (auth) {
  //   headers.authorization = auth ? getToken() : undefined;
  // }
  headers['x-lang'] = lang;

  const graphQLClient = new GraphQLClient(env.apiEndPoint, {
    headers,
    signal,
  });

  return graphQLClient;
};

export const getSDK = (auth = true, signal?: AbortSignal) => {
  const client = getClient(auth, signal);
  return getSdk(client);
};

// eslint-disable-next-line
export default {
  getClient,
  getSDK,
};

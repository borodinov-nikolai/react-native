'use client'
import { ApolloClient, ApolloLink, InMemoryCache, Observable, ApolloProvider as Provider } from '@apollo/client'
import { ReactNode } from 'react'
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { TOKENS_REFRESH } from '@/src/entities/auth';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApolloProvider = ({ children }: { children: ReactNode }) => {

  const getAuthToken = async () => {
    try {
      return (await AsyncStorage.getItem('jwt')) || null;
    } catch (error) {
      console.error("Ошибка получения токена:", error);
      return null;
    }
  };

  const uploadLink = createUploadLink({
    uri: process.env.EXPO_PUBLIC_SERVER_API_URL,
    credentials: 'include',
    headers: {
      "Apollo-Require-Preflight": "*"
    }
  })

  const authLink = setContext((_, { headers }) => {
    const token = getAuthToken();
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      const forbiddenError = graphQLErrors.find(
        ({ extensions }) => extensions?.code === 'FORBIDDEN'
      );

      if (forbiddenError) {
        return new Observable((observer) => {
          (async () => {
            try {
              const res = await client.mutate({ mutation: TOKENS_REFRESH });
              const token = res?.data?.tokensRefresh?.jwt;
              if (token) {
                await AsyncStorage.removeItem('jwt')
                await AsyncStorage.setItem('jwt', token);
                operation.setContext(({ headers = {} }) => ({
                  headers: {
                    ...headers,
                    Authorization: `Bearer ${token}`,
                  },
                }));
                const subscriber = forward(operation).subscribe({
                  next: observer.next.bind(observer),
                  error: observer.error.bind(observer),
                  complete: observer.complete.bind(observer),
                });
                return () => {
                  if (subscriber) subscriber.unsubscribe();
                };
              } else {
                observer.error(new Error('Не удалось обновить токен'));
              }
            } catch (error) {
              console.log('Ошибка обновления токена:', error);
              observer.error(error);
            }
          })();
        });
      }
    }
  })

  const client = new ApolloClient({
    link: ApolloLink.from([authLink, errorLink, uploadLink]),
    cache: new InMemoryCache(),
    credentials: 'include'
  });
  
  return (
    <Provider client={client} >
      {children}
    </Provider>
  )
}

export default ApolloProvider
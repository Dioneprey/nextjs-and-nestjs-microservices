'use client'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
  from,
} from '@apollo/client'
import { GetServerSidePropsContext, NextPage } from 'next'
import { useSession } from 'next-auth/react'

export type ApolloClientContext = GetServerSidePropsContext

export const withApollo = (Component: NextPage) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function Provider(props: any) {
    return (
      <ApolloProvider client={getApolloClient(undefined, props.apolloState)}>
        <Component {...props} />
      </ApolloProvider>
    )
  }
}

export function getApolloClient(
  ctx?: ApolloClientContext,
  ssrCache?: NormalizedCacheObject,
) {
  const { data: session } = useSession()

  const httpLink = createHttpLink({
    uri: 'http://localhost:3332/graphql',
    fetch,
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  })
  const cache = new InMemoryCache().restore(ssrCache ?? {})
  return new ApolloClient({
    link: from([httpLink]),
    cache,
  })
}

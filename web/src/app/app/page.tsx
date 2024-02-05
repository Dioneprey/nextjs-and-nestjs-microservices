'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import { withApollo } from '../lib/withApollo'
import { Course, Product } from '../graphql/generated/graphql'
import { gql, useQuery } from '@apollo/client'

const GET_PRODUCT_QUERY = gql`
  query {
    products {
      id
      title
      slug
    }
  }
`

interface getProductQuery {
  products: Product[]
}

export function Home() {
  const { user } = useUser()

  const { data } = useQuery<getProductQuery>(GET_PRODUCT_QUERY)

  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <a href="/api/auth/logout">Logout</a>
    </div>
  )
}

export default withApollo(Home)

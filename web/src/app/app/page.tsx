'use client'

import { gql, useQuery } from '@apollo/client'
import { useUser } from '@auth0/nextjs-auth0/client'
import { withApollo } from '../lib/withApollo'

export function Home() {
  const { user } = useUser()
  // const { data, loading, error } = useQuery(PRODUCTS_QUERY)

  
  return (
    <div>
      <h1>Hello World</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <a href="/api/auth/logout">Logout</a>
    </div>
  )
}

export default withApollo(Home)

'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import { withApollo } from '../lib/withApollo'
import { ssrGetProcucts } from '../graphql/generated/pagePublic'
import { useMeQuery } from '../graphql/generated/graphql'

export function Home({ data }) {
  const { user } = useUser()

  const { data: me, error } = useMeQuery()
  console.log(me)
  console.log(error)

  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(me, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <a href="/api/auth/logout">Logout</a>
    </div>
  )
}

export default withApollo(ssrGetProcucts.withPage()(Home))

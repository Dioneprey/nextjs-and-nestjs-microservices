'use client'

import { withApollo } from '../lib/withApollo'

import { Product } from '../graphql/generated/graphql'
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

const ME_QUERY = gql`
  query {
    enrollments {
      id
      student {
        authUserId
      }

      course {
        title
        slug
      }
    }
  }
`

interface getProductQuery {
  products: Product[]
}

export function Home() {
  const { data: getProductData } = useQuery<getProductQuery>(GET_PRODUCT_QUERY)
  const { data: getMeData } = useQuery<getProductQuery>(ME_QUERY)

  return (
    <div>
      <pre>{JSON.stringify(getMeData, null, 2)}</pre>
      <pre>{JSON.stringify(getProductData, null, 2)}</pre>
    </div>
  )
}

export default withApollo(Home)

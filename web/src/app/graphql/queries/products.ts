import { gql } from '@apollo/client'
import { Product } from '../generated/graphql'

const GET_PRODUCTS_QUERY = gql`
  query {
    products {
      id
      title
      slug
    }
  }
`

export { GET_PRODUCTS_QUERY }

export interface GetProductResponse {
  products: Product[]
}

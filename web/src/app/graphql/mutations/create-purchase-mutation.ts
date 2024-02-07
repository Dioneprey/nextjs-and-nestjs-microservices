import { gql } from '@apollo/client'

const CREATE_PURCHASE_MUTATION = gql`
  mutation CreatePurchase($productId: String!) {
    createPurchase(data: { productId: $productId }) {
      id
    }
  }
`

export { CREATE_PURCHASE_MUTATION }

import { gql } from '@apollo/client'
import { Course } from '../generated/graphql'

const GET_ME_QUERY = gql`
  query {
    me {
      enrollments {
        id
        createdAt

        course {
          title
          slug
        }
      }
    }
  }
`
export { GET_ME_QUERY }

export interface GetMeQueryResponse {
  me: {
    __typename: string
    enrollments: {
      __typename: string
      id: string
      createdAt: string
      course: Course
    }[]
  }
}

import { gql } from '@apollo/client';

export const LOCATIONS = gql`
 query Location ($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        next
        prev
        count
        pages
      }
      results {
        id
        name
        type
        dimension
        residents {
          ... on Character {
         id
          name
          }
        }
      }
    }
  }
`;

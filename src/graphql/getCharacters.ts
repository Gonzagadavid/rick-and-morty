import { gql } from '@apollo/client';

export const CHARATERS = gql`
  query Chatacters ($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        next
        prev
        count
        pages
      }
      results {
        id
        name
        image
      }
    }
  }
`;

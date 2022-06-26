import { gql } from '@apollo/client';

export const CHARATERS = gql`
  query Chatacters ($page: Int) {
    characters(page: $page) {
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

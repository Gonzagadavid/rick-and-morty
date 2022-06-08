import { gql } from '@apollo/client';

export const CHARATERS = gql`
  query Chatacters {
    characters(page: 1) {
      info {
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`;

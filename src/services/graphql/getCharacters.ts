import { gql } from '@apollo/client';

export interface CharacterType {
  name: string, image: string, id:number
}

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

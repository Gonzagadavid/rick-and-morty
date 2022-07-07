import { gql } from '@apollo/client';
import { CharacterType } from './getCharacters';

export interface LocationType {
  id: number;
  name: string;
  type: string;
  dimesion: string;
  residents: CharacterType[]
}

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

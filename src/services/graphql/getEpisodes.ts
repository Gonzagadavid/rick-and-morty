import { gql } from '@apollo/client';
import { CharacterType } from './getCharacters';

export interface EpisodesType {
  id: number;
  name: string;
  air_date: string;
  created: string;
  episode: string;
  characters: CharacterType[]
}

export const EPISODES = gql`
 query Episodes ($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        next
        prev
        count
        pages
      }
      results {
        id
        name
        air_date
        episode
        created
        characters {
          ... on Character {
         id
         name
         image
          }
        }
      }
    }
  }
`;

import { gql } from '@apollo/client';

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

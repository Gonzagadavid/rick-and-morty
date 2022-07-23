import { gql } from '@apollo/client';

export const CHARACTER = gql`
  query Chatacter ($id: ID!) {
    character(id: $id) {
        id
        name
        status
        image
        species
        type
        gender
        origin {
          id
          name
        }
        episode {
          id
          name
        }
        created
    }
  }
`;

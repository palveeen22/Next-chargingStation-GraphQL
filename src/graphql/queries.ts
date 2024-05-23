import { gql } from "@apollo/client";

/*
############
#  QUERY   #
############
*/

export const GET_DATA = gql`
query Countries {
        countries {
          code
          name
          emoji
        }
      }
`
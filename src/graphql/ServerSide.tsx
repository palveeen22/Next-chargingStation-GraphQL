import { createApolloClient } from "@/config/ApolloWrapper";
import { gql } from "@apollo/client";


export async function getServerSideProps() {
    const client = createApolloClient();
    const { data } = await client.query({
        query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
    });

    return {
        props: {
            countries: data.countries.slice(0, 4),
        },
    };
}
import { gql } from "./__generated__";


export const GET_SPACEX_DATA = gql(`
  query getSpacesData {
    histories {
        id
        title
        event_date_utc
        links {
          article
        }    
        __typename
        details
      }
  }
`);
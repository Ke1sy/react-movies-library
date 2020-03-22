import {gql} from 'apollo-boost';

export const moviesPageQuery = gql`
    query moviesPageQuery($name: String, $directorsName: String) {
        movies(name: $name) {
            id,
            name,
            genre,
            director {
                name
            },
            rate,
            watched
         },
        directors(name: $directorsName) {
            id,
            name
         }
     }
`;


export const directorsQuery = gql`
    query directorsQuery($name: String) {
        directors(name: $name) {
            id,
            name
        }
     }
`;
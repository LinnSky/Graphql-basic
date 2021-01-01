import { gql } from '@apollo/client';

export const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`

export const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`

export const ADD_BOOK = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name , genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`

export const GET_BOOK = gql`
    query Book($id: ID) {
        book(id: $id) {
            id
            name
            genre
            author {
                name
                age
                books {
                    name
                    genre
                }
            }
        }
    }
`
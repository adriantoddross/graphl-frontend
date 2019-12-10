import { gql } from 'apollo-boost';


const GET_BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`;

const GET_AUTHORS =gql`
{
  authors {
    name
    id
  }
}
`;

const ADD_BOOK =gql`
  mutation addBook($name: String!, $genre: String!, $authorID: ID!) {
    addBook(name: $name, genre: $genre, authorID: $authorID){
      name
      id
    }
  }
`;

export {GET_BOOKS, GET_AUTHORS, ADD_BOOK};
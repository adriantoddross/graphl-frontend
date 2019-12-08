import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`;

function BookList ({ onBooksSelected }) {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  // return null;
  return data.books.map(({ name, genre, id }) => (
    <li key={id}>{name}</li>
  ));
}

// function BookList() {
//   return (
//     <div>
//       <ul idd="book-list">
//         <li>Book Name</li>
//         <li>Book Name</li>
//         <li>Book Name</li>
//       </ul>
//     </div>
//   );
// }

export default BookList;

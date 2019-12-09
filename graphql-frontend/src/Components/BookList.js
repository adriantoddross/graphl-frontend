import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOKS } from '../Queries/Queries';


function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  // return null;
  return data.books.map(({ name, genre, id }) => (
    <li key={id}>{name}</li>
  ));
}

export default BookList;

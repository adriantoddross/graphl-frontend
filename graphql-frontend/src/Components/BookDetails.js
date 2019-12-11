import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOK } from '../Queries/Queries';

function BookDetails(props) {

  const { loading, error, data } = useQuery(GET_BOOK);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div id='book-details'>
      <p>Book details go here.</p>
    </div>
  );
}

export default BookDetails;
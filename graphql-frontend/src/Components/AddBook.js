import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

function AddBook ({ onBooksSelected }) {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  // return null;
  // return data.author.map(({ name, id }) => (
  //   <li key={id}>{name}</li>
  // ));
  return (
    <form id="add-book">

        <div className="field">
          <label>Book name:</label>
          <input type="text"/>
        </div>
        
        <div className="field">
          <label>Genre:</label>
          <input type="text"/>
        </div>

        <div className="field">
          <label>Author:</label>
          <select>
            <option>Select Author</option>
          </select>
        </div>

        <button></button>

      </form>
  );
}

export default AddBook;

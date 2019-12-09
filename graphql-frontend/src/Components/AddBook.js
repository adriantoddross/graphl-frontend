import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_AUTHORS } from '../Queries/Queries';

function AddAuthors () {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return data.authors.map(({ name, id }) => (
    <option key={ id } value={ id }>{name}</option>
  ));
}

function AddBook() {

  const [form, setState ] = useState({
    name: '',
    genre: '',
    author: ''
  });

  const submitValues = e => {
    e.preventDefault();
    console.log(form.username, form.password);
  };

  const updateField = e => {
    setState({
      ...form,
      [e.target.name]: e.target.value
    });
  };

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
          {AddAuthors()}
        </select>
      </div>

      <button>Add New Book</button>

    </form>
    );
  }

export default AddBook;

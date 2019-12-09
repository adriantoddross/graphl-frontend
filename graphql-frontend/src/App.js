import React from 'react';
import BookList from './Components/BookList';
import AddBook from './Components/AddBook';

function App() {
  return (
    <div className="Main">
      <h1>Adrian's Reading List</h1>
      <BookList />
      <AddBook />
    </div>
  );
}

export default App;

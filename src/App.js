import React from 'react';
import ItemList from './ItemList';
const App = () => {
  const items = ['Apple', 'Banana', 'Orange'];

  return (
    <div>
      <h1>My Shopping List</h1>
      <ItemList items={items} />
    </div>
  );
};

export default App;



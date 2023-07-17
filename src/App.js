import React from 'react';
import Dropdown from './components/Dropdown/Dropdown';

const App = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h1>Dropdown Component</h1>
      <Dropdown items={items} />
    </div>
  );
};

export default App;

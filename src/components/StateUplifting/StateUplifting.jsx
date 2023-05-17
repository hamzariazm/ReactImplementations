import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
  const [query, setQuery] = useState('');
  const results = filterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar
        query={query}
        onChange={handleChange}
      />
      <List items={results} />
    </>
  );
}


function List({ items }) {
  return (
    <div>
        {items.map((item, key) => 
            <div key={key}>
                <h3>{item.name}</h3>
            </div>
        )}
    </div>
  );
}

function SearchBar({ query, onChange }) {
    return (
      <label>
        Search:
        <input
          value={query}
          onChange={onChange}
        />
      </label>
    );
  }
  
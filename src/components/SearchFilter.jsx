import React, { useState } from 'react';

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');

  const wordsArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    
  ];

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredWords = wordsArray.filter((word) =>
    word.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Search Filter</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
      />
      <ol>
        {filteredWords.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ol>
    </div>
  );
}

export default SearchFilter;

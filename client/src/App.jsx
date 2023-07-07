import React, { useState } from 'react';
import InputPage from './InputPage';
import ListingPage from './ListingPage';


const App = () => {
  const [currentPage, setCurrentPage] = useState('input');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <nav>
        <button onClick={() => handlePageChange('input')}>Input Page</button>
        <button onClick={() => handlePageChange('listing')}>Listing Page</button>
      </nav>
      {currentPage === 'input' ? <InputPage /> : <ListingPage />}

    </div>
  );
};

export default App;

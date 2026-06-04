import React, { useState, useEffect } from 'react';
import Card from './Card';
import { paintings } from '../paintings.js';

export default function Gallery({ search, filters }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;   // ← Изменено на 6

  const filteredData = paintings.filter(p => {
    const matchSearch = 
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.artist.toLowerCase().includes(search.toLowerCase());

    const matchArtist = !filters.artist || p.artist === filters.artist;
    const matchLocation = !filters.location || p.location === filters.location;

    let matchYear = true;
    if (filters.yearFrom) matchYear = matchYear && p.year >= parseInt(filters.yearFrom);
    if (filters.yearTo) matchYear = matchYear && p.year <= parseInt(filters.yearTo);

    return matchSearch && matchArtist && matchLocation && matchYear;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filters]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }
      
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <>
      <div className="grid">
        {currentItems.length > 0 ? (
          currentItems.map(p => <Card key={p.id} painting={p} />)
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px', fontSize: '18px' }}>
            No paintings found.
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <footer className="pagination">
          <div className="page-numbers">
            <button 
              className="page" 
              onClick={() => goToPage(currentPage - 1)} 
              disabled={currentPage === 1}
            >‹</button>
            
            {getPageNumbers().map((page, idx) => 
              page === '...' ? (
                <span key={idx} className="page">...</span>
              ) : (
                <button
                  key={idx}
                  className={`page ${currentPage === page ? 'active' : ''}`}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              )
            )}

            <button 
              className="page" 
              onClick={() => goToPage(currentPage + 1)} 
              disabled={currentPage === totalPages}
            >›</button>
          </div>
        </footer>
      )}
    </>
  );
}
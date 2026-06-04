import { useState } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import MobileFilters from './components/MobileFilters';
import './index.css';

function App() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    artist: '', location: '', yearFrom: '', yearTo: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark-theme');
  };

  const clearFilters = () => {
    setFilters({ artist: '', location: '', yearFrom: '', yearTo: '' });
  };

  return (
    <div className="container">
      <Header 
        search={search} 
        setSearch={setSearch} 
        onFilterOpen={() => setShowFilters(true)}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      <Gallery search={search} filters={filters} />

      {showFilters && (
        <MobileFilters 
          filters={filters}
          setFilters={setFilters}
          onClose={() => setShowFilters(false)}
          onClear={clearFilters}
        />
      )}
    </div>
  );
}

export default App;
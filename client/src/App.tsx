import React, { useState } from 'react';
import './App.css'; 
import UserInput from './components/UserInput/searchInput'; 

const App: React.FC = () => {
  const [coordinates, setCoordinates] = useState<{ lat: number, lng: number } | null>(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Local Travel and Weather Dashboard</h1>
      </header>

      <UserInput setCoordinates={setCoordinates} />

      {coordinates && (
        <div className="coordinates-display">
          <h2>Coordinates:</h2>
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lng}</p>
        </div>
      )}
    </div>
  );
};

export default App;

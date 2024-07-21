// src/App.js
import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <h1 className="text-center">Interactive Leaflet Map</h1>
          <Map />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;

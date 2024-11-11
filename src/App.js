import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for styling
import HomePage from './HomePage';
import Footer from './Footer';
;

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <HomePage/>
      <Footer />
    </div>
  );
}

export default App;


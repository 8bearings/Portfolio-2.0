import React from 'react';
import Navbar from './Components/Navbar';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import { images } from './data';
import { Images } from './Components/Image';

const App: React.FC = () => {
  const handleClick = (image: Images) => {
    console.log(`Image clicked: ${image.title}`)
  }
  return (
    <div className="app">
      <Navbar />
      <Gallery images={images as Images[]} onClick={handleClick} />
      <Footer />
    </div>
  );
};

export default App;
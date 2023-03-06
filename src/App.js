import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Fasilitas from './components/Fasilitas/Fasilitas';
import Pelajaran from './components/Pelajaran/Pelajaran';
import Ulasan from './components/Ulasan/Ulasan';
import Pendaftaran from './components/Pendaftaran/Pendaftaran';
import ScrollToTop from "react-scroll-to-top";
import './App.css';
import Footer from './components/Footer/Footer';
import Karir from './components/Karir/Karir';



const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Fasilitas />
      <Pelajaran />
      <Ulasan />
      <Karir />
      <Pendaftaran />
      <ScrollToTop smooth />
      <Footer />
    </>    
  );
}

export default App;

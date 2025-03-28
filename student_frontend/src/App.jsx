import { Route, Routes, useLocation } from 'react-router-dom';

import CustomNavbar from './componts/Navbar/Navbar';
import FeaturedPosts from './componts/FeaturedPosts/FeaturedPosts';
import FeaturesSection from './componts/FeaturesSection/FeaturesSection';
import Footer from './componts/Footer/Footer';
import Footprints from './componts/Footprints/Footprints';
import Header from './componts/Header/Header';
import ProfilePage from './pages/ProfilePage'; // Importing ProfilePage correctly
import React from 'react';
import ScrollToTopButton from './componts/Contex/ScrollToTopButton';
import ShopItems from './componts/ShopItems/ShopItems';
import Testimonial from './componts/Testimonial/Testimonial';
import { assest } from './assest/assest'; // Import the assest object

const App = () => {
  const location = useLocation(); // Get the current route
  const isHomePage = location.pathname === '/'; // Check if the current path is the home page "/"

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${assest.H5})`, // Dynamically set background image
        backgroundSize: 'cover', // Ensure the background covers the entire screen
        backgroundPosition: 'center', // Center the background image
        backgroundAttachment: 'fixed', // Keep the background fixed while scrolling
      }}
    >
      {/* Render CustomNavbar with different background color based on the current route */}
      <CustomNavbar isHomePage={isHomePage} />

      {/* Conditionally render the rest of the content */}
      {isHomePage && (
        <>
          <Header />
          <FeaturedPosts />
          <FeaturesSection />
          <ShopItems/>
          <Footprints />
          <Testimonial />
        </>
      )}

      {/* Define the Routes */}
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        {/* Add other routes as needed */}
      </Routes>

      {/* Footer Component */}
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
};

export default App;

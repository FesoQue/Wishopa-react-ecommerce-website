import React from 'react';
import Hero from '../component/Hero';
import Categories from '../component/Categories';
import Offer from '../component/Offer';
import Review from '../component/Review';
import Newsletter from '../component/Newsletter';

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <Offer />
      <Review />
      <Newsletter />
    </main>
  );
};

export default Homepage;

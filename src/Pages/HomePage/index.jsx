import React from 'react';
import CarouselSlide from '../../Component/Carousel';
import HeroSections from '../../Component/HeroSectionHomePage/hero';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import './styleHome.css'

function Home() {
  return (
    <div className={'topHeader'}>
          <CarouselSlide className={'mb-5'} />
          <HeroSections {...homeObjOne} />
          <HeroSections {...homeObjThree} />
          <HeroSections {...homeObjTwo} />
          <HeroSections {...homeObjFour} />
    </div>
  );
}

export default Home;

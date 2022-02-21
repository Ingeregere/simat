import React from 'react'
import HeroSections from '../../Component/HeroSectionHomePage/hero'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import '../HomePage/styleHome.css'


export default function Tourismes() {
  return (
    <div className={'topHeader'}>
          <HeroSections {...homeObjOne} />
          <HeroSections {...homeObjTwo} />
          <HeroSections {...homeObjThree} />
          <HeroSections {...homeObjFour} />
    </div>
  )
}

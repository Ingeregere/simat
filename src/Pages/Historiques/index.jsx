import React from 'react'
import HeroSections from '../../Component/HeroSectionHomePage/hero'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import '../HomePage/styleHome.css'

export default function Historique() {
  return (
    <div className={'topHeader'}>
          <HeroSections {...homeObjOne} />
          <HeroSections {...homeObjThree} />
          <HeroSections {...homeObjTwo} />
          <HeroSections {...homeObjFour} />
    </div>
  )
}

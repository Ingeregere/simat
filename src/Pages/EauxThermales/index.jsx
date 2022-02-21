import React from 'react'
import HeroSections from '../../Component/HeroSectionHomePage/hero'
import { homeObjOne, homeObjTwo  } from './Data';
import '../HomePage/styleHome.css'


export default function EauxThermales() {
  return (
    <div className={'topHeader'}>
          <HeroSections {...homeObjOne} />
          <HeroSections {...homeObjTwo} />
    </div>
  )
}

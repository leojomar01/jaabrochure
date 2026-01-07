import React from 'react'

import Nav from '../Nav/Nav'
import Latest from '../Latest/Latest'
import './background.scss'
import Ads from '../Ads/Ads'
import CarouselSection from '../CarouselSection/CarouselSection'

function Background() {
  return (
    <div id='background'>
        <Ads/>
        <Nav/>
        <CarouselSection/>
        <Latest/>


    </div>
  )
}

export default Background
import React from 'react'

import Latest from '../Latest/Latest'
import './background.scss'
import CarouselSection from '../CarouselSection/CarouselSection'

function Background() {
  return (
    <div id='background'>
        <CarouselSection/>
        <Latest/>
    </div>
  )
}

export default Background
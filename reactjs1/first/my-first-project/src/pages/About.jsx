import React from 'react'
import Abouthead from '../Components/about/abouthead'
import ServiceIntro from '../Components/about/Serviceintro'
import Qualityservice from '../Components/about/Qualityservice'
import Testmolin from '../Components/about/Testmolin'
import Process from '../Components/section/Process'
import TaxiRoute from '../Components/section/Taxiroute'

const about = () => {
  return (
    <div>
      
      <Abouthead/>
      <ServiceIntro />
      <Qualityservice/>
      <Testmolin />
      <Process/>
      <TaxiRoute />
    </div>
  )
}

export default about

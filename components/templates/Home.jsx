import React from 'react'
import Header from '../organisms/Header'
import Banner from '../organisms/Banner'
import '../../app/globals.css'
import Steps from '../molecules/Steps'
import Button from '../atoms/Button'
import Signal from '../atoms/Signal'

function Home() {
  return (
    <div>
        <Header/>
        <Banner/>
        {/* <Steps/> */}
        {/* <Button variant="black">umair</Button>
      <Signal/> */}
    </div>
  )
}

export default Home
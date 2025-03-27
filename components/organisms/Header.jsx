import React from 'react'
import Logo from '../atoms/Logo'
import Navigation from '../molecules/Navigation'
import Button from '../atoms/Button'
import Container from '../atoms/Container'

function Header() {
  return (
    <div>
     <Container>
     <div className='flex justify-between py-[20px]'>
     <div className="">
            <Logo/>
        </div>
        <div className="flex gap-[70px] items-center">
            <div className="">
                <Navigation/>
            </div>
        </div>
     </div>
     </Container>
    </div>
  )
}

export default Header
import React from 'react'
import Button from '../atoms/Button'
import Signal from '../atoms/Signal'
import Heading from '../atoms/Heading'

function    Steps() {
  return (
    <div className='steps'>
        <img className=' absolute' src="/image/plate.png" alt="" />
        <div className="flex">
        <img className=' relative top-[15px] left-[16px]' src="/image/t5.png" alt="" />
        <img className=' relative right-[142px] top-[14px]' src="/image/t4.png" alt="" />
        <img className=' relative right-[178px] top-[12px] ' src="/image/t3.png" alt="" />
        <img className=' relative right-[177px] top-[13px]' src="/image/t2.png" alt="" />
        <img className=' relative right-[249px] top-[13px]' src="/image/t-1.png" alt="" />
        </div>
        <div className="step-bootom relative flex ">
            <div className='black relative top-[14px] left-[77px]'>
            <img className=' ' src="/image/b1.png" alt="" />

            {/* black button */}
            <div className='black-btn  relative gap-2 bottom-[54%] left-[30%] flex flex-col'>
                <Button variant="black">How it works</Button>
                <Button variant="black">Latest news</Button>
                <Button variant="black">City guide</Button>
            </div>
            <div className="travel-planer-btn bottom-[58%] left-[16%] flex flex-row gap-2 relative">
                <Button variant={"white"}>Business Login</Button>
                <Button variant={"white"}>Travel Planer</Button>
            </div>
            </div>

            {/* login */}
            <div className='left-[61px] top-[12px] relative'>
            <img className='' src="/image/b2.png" alt="" />
            <div className="login-b relative bottom-[42%] flex flex-col gap-[10px] justify-center items-center">
                <Button variant="login">Login</Button>
                <div className="rejister gap-[10px] flex flex-row">
                    <Button variant="white">Supacial Offer </Button>
                    <Button variant="white">New Registration</Button>
                </div>
            </div>
            </div>
            <div className='wifi-session relative left-[3.5%] top-[10px]'>
            <img className=' ' src="/image/b3.png" alt="" />
            <div className="wfi-btn flex gap-[20px] relative bottom-[42%] left-[20%]">
                <div className='text-center'>
                <Signal img="/image/let.png"/>
                <Heading level="5">let’s go</Heading>
                </div>
                <div className='text-center'>
                <Signal img="/image/wifi.png"/>
                <Heading level="5">use Tool</Heading>
                </div>
            </div>
            </div>
        </div>
    </div>

)
}

export default Steps
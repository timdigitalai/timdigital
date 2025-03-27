import Container from '@/components/atoms/Container';
import Aboutleft from '@/components/molecules/Aboutleft';
import Aboutright from '@/components/molecules/Aboutright';
import Header from '@/components/organisms/Header';
import React from 'react';

function About() {
  return (
    <div>
      <Header />
         <Container> 
      <div className=' flex justify-between pt-[60px] gap-[30px]'>
        <Aboutleft />
        <Aboutright />
      </div>
    </Container>
    </div>
   
  );
}

export default About;

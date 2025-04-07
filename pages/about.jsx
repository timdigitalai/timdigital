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
        <div className="flex flex-col lg:flex-row justify-between items-center pt-[60px] gap-[40px] lg:gap-[80px] max-w-7xl mx-auto px-4">
          <Aboutleft />
          <Aboutright />
        </div>
      </Container>
    </div>
  );
}

export default About;

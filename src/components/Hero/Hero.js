import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding >
    <LeftSection>
      <SectionTitle main center >
        Welcome to <br />
        my personal portfolio
      </SectionTitle>
      <SectionText>
      I am a Full Stack web developer with skills in HTML, CSS, JavaScript and in frameworks like React and Express. I am passionate about developing interactive applications and providing an engaging user experience on my web apps.      </SectionText>
      <Button onClick = {()=> window.location = 'https://github.com/movelop'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
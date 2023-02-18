import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection >
      <SectionTitle main center>
        Welcome to <br/>
        Shubham's Personal Portfolio
      </SectionTitle>
      <SectionText>
        Mern Stack Developer
      </SectionText>
      <Button onClick={()=>{ window.location = "https://www.google.com"}} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
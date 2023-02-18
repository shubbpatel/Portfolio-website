import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='technologies'>
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked in range of technonologies in the web development World.
      from Front-end to Back-end.
    </SectionText>
    <List>
      <ListItem>
      <DiReact size="3rem"/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br/>
          React.Js
        </ListParagraph>
      </ListContainer>
    </ListItem>
      <ListItem>
      <DiFirebase size="3rem"/>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Node.js, MongoDB and Firebase
        </ListParagraph>
      </ListContainer>
    </ListItem>
    </List>
  </Section>
);

export default Technologies;

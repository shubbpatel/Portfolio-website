import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
 <Section nopadding id='projects'>
  <SectionDivider/>
  <SectionTitle>Projects</SectionTitle>
  <GridContainer>
    {projects.map(({title,description,
image,
tags,
source,
visit,
id})=>(
      <BlogCard key={id}>
        <Img src={image} />
        <TitleContent>
          <HeaderThree title> {title}</HeaderThree>  
          <Hr/>       
        </TitleContent>
        <CardInfo>{description}</CardInfo>
        <div>
          <TitleContent>Stack</TitleContent>
          <TagList>
            {tags.map((tag)=> (
              <div>{tag}</div>
            ))}
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href={visit} style={{background:"grey ", color:"black"}} >Code</ExternalLinks>
          <ExternalLinks href={source} style={{background:"Green", color:"black"}} >Source</ExternalLinks>
        </UtilityList>
      </BlogCard>
))}
  </GridContainer>
 </Section>
);

export default Projects;
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
<FooterWrapper>
  <LinkList>
  <LinkColumn>
  <LinkTitle>Call</LinkTitle>
  <LinkItem href='tel: +91-6261981814' >+91-6261981814</LinkItem>
  </LinkColumn>
  <LinkColumn>
  <LinkTitle>E-mail</LinkTitle>
  <LinkItem href='mailto:shubham.sp456@gmail.com'>shubham.sp456@gmail.com</LinkItem>
  </LinkColumn>
  </LinkList>
 <SocialIconsContainer>
  <CompanyContainer>
    <Slogan>Building one project at a time</Slogan>
  </CompanyContainer>
  <SocialContainer>
<SocialIcons href='https://github.com/shubbpatel' target="_blank" >
      <AiFillGithub size="3rem" />
    </SocialIcons>
    <SocialIcons href='https://www.linkedin.com/in/shubham-patel-a679151b1/' target="_blank"  >
      <AiFillLinkedin size="3rem" />
    </SocialIcons>
    <SocialIcons href='https://www.instagram.com/shubbpatel/' target="_blank"  >
      <AiFillInstagram size="3rem" />
    </SocialIcons>
  </SocialContainer>
 </SocialIconsContainer>
</FooterWrapper>
  );
};

export default Footer;

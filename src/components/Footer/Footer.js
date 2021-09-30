import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href = 'tel:+234 708-559-7952'>+234 708-559-7952</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href = 'mailto:barmilitary@yahoo.com'>barmilitary@yahoo.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Tech solutions made easy</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href = 'https://github.com/movelop'>
            <AiFillGithub size = '3rem'/>
          </SocialIcons>
          <SocialIcons href = 'https://www.linkedin.com/in/babalola-muhammad-45993ab4/'>
            <AiFillLinkedin size = '3rem'/>
          </SocialIcons>
          <SocialIcons href = 'https://www.instagram.com/muhammad_babalola/'>
            <AiFillInstagram size = '3rem'/>
          </SocialIcons>
          <SocialIcons href = 'https://twitter.com/barmilitary'>
            <AiFillTwitterCircle size = '3rem'/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

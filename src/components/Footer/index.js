import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLinksWrapper} from './FooterElements'
import {SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'

const Footer = () => {
    return (
        <>
                <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Site Map</FooterLinkTitle>
                                <FooterLink to="/signin">Home </FooterLink>
                                <FooterLink to="/signin">Signin</FooterLink>
                                <FooterLink to="/signin">Signup</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms & Conditions</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                                <FooterLink to="/signin">How it works </FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms & Conditions</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
               <SocialMedia>
                   <SocialMediaWrap>
                       <SocialLogo to='/'>
                           Market
                       </SocialLogo>
                       <WebsiteRights>Islam{new Date().getFullYear()} All rights reserved</WebsiteRights>
                       <SocialIcons>
                           <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                           <SocialIconLink href="/" target="_blank" aria-label="Instgram"><FaInstagram /></SocialIconLink>
                           <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                           <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                       </SocialIcons>
                   </SocialMediaWrap>
               </SocialMedia>
            </FooterWrap>
        </FooterContainer> 
        </>
    )
}

export default Footer

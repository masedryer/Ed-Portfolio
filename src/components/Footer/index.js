import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(16, 100%, 50%, 1);
  background: linear-gradient(
    hsla(16, 100%, 50%, 1) 0%,
    hsla(39, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    hsla(16, 100%, 50%, 1) 0%,
    hsla(39, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    hsla(16, 100%, 50%, 1) 0%,
    hsla(39, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Edry Rezal. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;

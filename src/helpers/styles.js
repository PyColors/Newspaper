import styled from 'styled-components';
import { Newspaper } from 'styled-icons/fa-regular/Newspaper';
import theme from '../styles/theme';

const { colors } = theme;

export const LogoNewspaper = styled(Newspaper)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const LogoNewspaperLink = styled.a`
  color: ${colors.white};
`;

export const AppWapper = styled.div`
  text-align: center;
`;

export const Global = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 285px 0 0;
`;

export const Content = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 75%;
  padding: 0;
`;

export const Article = styled.article`
  max-width: 64rem;
  padding: 1rem 3rem;
  margin: 0 auto;
  font-size: 1.1rem;
`;

export const Hr = styled.hr`
  height: 1px;
  padding: 0;
  margin: 1rem 0;
  background-color: #dcdbdb;
  border: 0;
`;

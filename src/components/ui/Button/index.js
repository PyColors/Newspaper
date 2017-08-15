/*
 * This contains all the Buttons for the App
 *
 *  primaryOne
 *  primaryOneOutline
 *
 *  primaryTwo
 *  primaryTwoOutline
 * 
 *  secondaryOne
 *  secondaryOneOutline
 *
 *  disabled
 */

import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';

const { colors, fontSize } = theme;

const Button = styled.button`
  border-radius: 3px;
  padding: .5em 1.5em;
  margin: 1em;
  border-width: 2px;
  border-style: solid;
  font-size: ${fontSize.large};
  cursor: pointer;
  background: transparent;

  &:hover,
  &:focus {
    outline: none;
  }

  &:hover {
    color: ${colors.silver};
    opacity: 0.8;
  }

  &:active {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
    opacity: 0.95;
  }

  ${props =>
    props.primaryOne &&
    css`
		background: ${colors.primaryOne};
    color: ${colors.white};
    border-color: ${colors.primaryOne};

    &:hover,
    &:active {
      background-color: ${colors.white}; 
      color: ${colors.primaryOne};
  `};

  ${props =>
    props.primaryOneOutline &&
    css`
    color: ${colors.primaryOne};
    border-color: ${colors.primaryOne};

    &:hover,
    &:active {
      background-color: ${colors.primaryOne}; 
      color: ${colors.white};
  `};

  ${props =>
    props.primaryTwo &&
    css`
		background: ${colors.primaryTwo};
    color: ${colors.white};
    border-color: ${colors.primaryTwo};

    &:hover,
    &:active {
      background-color: ${colors.white}; 
      color: ${colors.primaryTwo};
  `};

  ${props =>
    props.primaryTwoOutline &&
    css`
    color: ${colors.primaryTwo};
    border-color: ${colors.primaryTwo};

    &:hover,
    &:active {
      background-color: ${colors.primaryTwo}; 
      color: ${colors.white};
  `};

  ${props =>
    props.secondaryOne &&
    css`
		background: ${colors.secondaryOne};
    color: ${colors.white};
    border-color: ${colors.secondaryOne};

    &:hover,
    &:active {
      background-color: ${colors.white}; 
      color: ${colors.secondaryOne};
  `};

  ${props =>
    props.secondaryOneOutline &&
    css`
    color: ${colors.secondaryOne};
    border-color: ${colors.secondaryOne};

    &:hover,
    &:active {
      background-color: ${colors.white}; 
      color: ${colors.secondaryOne};
  `};

  ${props =>
    props.disabled &&
    css`
    background-color: ${colors.ghost};
    opacity: 0.4;
    pointer-events: none;
    cursor: not-allowed;
    
    &:hover,
    &:active {
      background-color: ${colors.none};
      color: ${colors.none};
      
  `};
`;

export default Button;

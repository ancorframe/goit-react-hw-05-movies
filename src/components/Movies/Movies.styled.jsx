import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PagesLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-style: normal;
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal} #000000;
  border-radius: ${p => p.theme.radii.sm};
  &.active {
    background-color: blue;
    color: #ffffff;
  }
  :hover:not(.active),
  :focus:not(.active) {
    background-color: blueviolet;
    color: aqua;
  }
`;

export const FilmsItem = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-style: normal;
  color: black;
  padding: ${p => p.theme.space[2]}px;
  :hover:not(.active),
  :focus:not(.active) {
    background-color: blueviolet;
    color: aqua;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const BackLink = styled(NavLink)`
  text-decoration: none;
  font-style: normal;
  display: inline-flex;
  gap: 5px;
  align-items: center;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #000000;
  border-radius: 4px;
  :hover,
  :focus {
    background-color: blueviolet;
    color: aqua;
  }
`;

export const Poster = styled.img`
  width: 250px;
  margin-right: 20px;
`;

export const DopLink = styled(NavLink)`
  text-align: center;
  width: 50px;
  text-decoration: none;
  font-style: normal;
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal} #000000;
  border-radius: ${p => p.theme.radii.sm};
  &.active {
    background-color: blue;
    color: #ffffff;
  }
  :hover:not(.active),
  :focus:not(.active) {
    background-color: blueviolet;
    color: aqua;
  }
`;



export const CastItem = styled.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const ActorImg = styled.img`
    width: 200px;

`

export const ReviewsItem = styled.li`
    display: flex;
    gap: 10px;
flex-direction: column;
:not(:last-child){
    margin-bottom: 15px;
}
`
import styled from 'styled-components';
import { Box } from '../Box';

export const GenerateRandomColor = () => {
  const randomByte = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  const color = `#${randomByte()}${randomByte()}${randomByte()}`;
  return color;
};

export const StatisticsSection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 230px;
  margin: 0 auto;
  margin-bottom: 50px;
  background-color: white;
  border-radius: 5px 5px 0 0;
  font-family: Calibri, Arial, sans-serif;
  border-bottom: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`; //Section

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  color: rgb(140, 140, 140);
  margin-top: 50px;
`;

export const Statlist = styled.ul`
  width: 500px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: auto 0 0 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  border-bottom: none;
  background-color: ${(props) => props.color}; /* Використання переданого кольору */
`;

export const Label = styled.span`
  display: flex;
  margin: 5px;
  font-size: 22px;
  color: white;
`;

export const Percentage = styled.span`
  display: flex;
  margin: 5px;
  font-size: 34px;
  color: white;
`;

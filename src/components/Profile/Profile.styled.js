import styled from 'styled-components';
import { Box } from '../Box';

export const ProfileContainer = styled(Box)` // Використовуємо Box замість div
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Description = styled(Box)` // Використовуємо Box замість div
  width: 300px;
  height: 350px;
  padding: 10px;
  margin: 0 auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px 5px 0 0;
  font-family: Calibri, Arial, sans-serif;
  border: 1px solid rgb(222, 219, 219);
  border-bottom: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin: 20px;
  width: 70%;
  height: 70%;
  object-fit: cover;
`;

export const Tag = styled.p`
  margin: 5px 0;
  font-weight: 700;
  color: rgb(140, 140, 140);
`;

export const Name = styled.p`
  margin: 15px 0;
  font-size: 24px;
  font-weight: 700;
`;

export const StatsList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin-top: 0;
  border-radius: 0 0px 5px 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const StatItem = styled(Box)` // Використовуємо Box замість li
  text-align: center;
  width: 100px;
  height: 80px;
  border: 1px solid rgb(222, 219, 219);
  background-color: rgb(245, 249, 252);

  &:first-child {
    border-radius: 0 0 0 5px;
    border-right: none;
  }

  &:last-child {
    border-radius: 0 0 5px 0;
    border-left: none;
  }
`;

export const Label = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  color: rgb(140, 140, 140);
  font-weight: 700;
  font-size: 14px;
`;

export const Quantity = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
`;

export const ImageContainer = styled(Box)` // Використовуємо Box замість div
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Image = styled.img`
  margin: 20px;
  width: 70%;
  height: 70%;
  object-fit: cover;
`;

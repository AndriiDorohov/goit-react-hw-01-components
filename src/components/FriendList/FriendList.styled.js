import styled from 'styled-components';

export const SetColor = (status) => {
	const color = status ? 'green' : 'red';
  return color;
};

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 500px;
  height: 150px;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  font-family: Calibri, Arial, sans-serif;
  border-bottom: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);`;

export const Status = styled.span`
  margin: 40px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const Avatar = styled.img`
  border-radius: 10px;
  width: 120px;
  height: 120px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
  border: 1px solid rgb(222, 219, 219);
`;

export const Name = styled.p`
  margin-left: 50px;
  color: rgb(140, 140, 140);
  font-family: Calibri, Arial, sans-serif;
  font-size: 36px;
`;
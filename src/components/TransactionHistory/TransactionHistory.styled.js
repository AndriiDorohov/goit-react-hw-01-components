import styled from 'styled-components';

export const TransactionItem = styled.table`
width: 70%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  font-size: 14px;
  margin: 100px auto;
  border-radius: 5px 5px 0 0;
  font-family: Calibri, Arial, sans-serif;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  ;
  
  th {
    background-color: hsl(185, 100%, 40%);
    border-bottom: 1px solid #ddd;
    padding: 10px;
    text-align: center;
	color: white;
    font-size: 24px;
    font-weight: 700;
  }

  td {
    border-bottom: 1px solid #ddd;
    padding: 10px;
    text-align: center;
    font-size: 20px;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
    text-align: center;
    font-size: 20px;
  }
`;

export const TransactionType = styled.td`
  text-transform: capitalize;
  text-align: left;
`;
import React from 'react';
import {
	TransactionItem,
	TransactionType
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
    return (
    
        <TransactionItem>
            <thead>
                <tr>
                    <th>TYPE</th>
                    <th>AMOUNT</th>
                    <th>CURRENCY</th>
                </tr>
            </thead>

            <tbody>{items.map((list) => (
                <tr>
                    <TransactionType>{list.type}</TransactionType>
                    <td>{list.amount}</td>
                    <td>{list.currency}</td>
                </tr>))}
            </tbody>
			</TransactionItem>
			
    )
};

export default TransactionHistory;
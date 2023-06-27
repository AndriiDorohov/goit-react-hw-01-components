import React from 'react';
import {
    StatisticsSection,
    Title,
    Statlist,
    Item,
    Label,
    Percentage,
    GenerateRandomColor
} from './Statistics.styled';


const Statistics = ({ title, stats }) => {

    return (
    <StatisticsSection>
      <Title>{title}</Title>

      <Statlist>
        {stats.map((stat) => (
          <Item key={stat.id} color={GenerateRandomColor()}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </Statlist>
    </StatisticsSection>
  );
};

export default Statistics;
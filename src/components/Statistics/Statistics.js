import React from 'react';
import {
    StatisticsSection,
    Title,
    StatList,
    Item,
    Label,
    Percentage,
    GenerateRandomColor
} from './Statistics.styled';


const Statistics = ({ title, stats }) => {

    return (
    <StatisticsSection>
      <Title>{title}</Title>

      <StatList>
        {stats.map((stat) => (
          <Item key={stat.id} color={GenerateRandomColor()}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

export default Statistics;
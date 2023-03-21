import PropTypes from 'prop-types';
import { StatisticsList } from "./Statistics.styled"

export const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    return (
        <StatisticsList>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>PositivePercentage: {positivePercentage}%</li>
        </StatisticsList>
    )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
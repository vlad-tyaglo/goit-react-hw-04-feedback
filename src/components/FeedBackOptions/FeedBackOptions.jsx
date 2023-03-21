import PropTypes from 'prop-types';
import { List, ListItem } from './FeedBackOptions.styled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <List>
            {options.map((option) => 
                (<ListItem key={option}>
                    <button type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>
                    </ListItem>)
                )
            }
        </List>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
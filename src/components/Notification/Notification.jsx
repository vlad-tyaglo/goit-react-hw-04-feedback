import PropTypes from 'prop-types';

export const Notification = ({massage}) => {
    return (<div>{massage}</div>)
};

Notification.propTypes = {
    massage: PropTypes.string.isRequired,
}
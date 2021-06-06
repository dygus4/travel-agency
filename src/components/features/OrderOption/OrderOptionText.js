import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
//import {formatPrice} from '../../../utils/formatPrice';


const OrderOptionText = ({ currentValue, setOptionValue}) => (
  <div>
    <input
      type="text"
      className={styles.input}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      placeholder={'Data to contact'}
    />
    
  </div>
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
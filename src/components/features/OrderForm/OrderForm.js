import React from 'react';
//import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = props => (
  <Row>
    {pricing.map((option) => 
      <Col md={4} key={option.id}>
        <OrderOption {...option}/>
      </Col>
    )}
    <Col xs={12}>
      <OrderSummary cost={props.tripCost} options={props.options}/>

    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.any,
  options: PropTypes.array,
};

export default OrderForm;

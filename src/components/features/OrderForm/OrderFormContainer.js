import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions} from '../../../redux/orderRedux';
import {setOrderOption} from '../../../redux/orderRedux';


const mapStateToProps = state => ({
  options: getOrderOptions(state),
  setOrderOption: setOrderOption(state),
});

const mapDispatchToProps = dispatch => ({
  
  setOrderOption: option => dispatch(setOrderOption(option)),

  
  // TODO - add more dispatchers for other filters
});


export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
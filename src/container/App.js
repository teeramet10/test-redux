import React, { Component } from 'react';
import logo from '../logo.svg';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as action from '../action/counter.action'
import '../css/App.css';

class App extends Component {

  constructor(props){
    super(props)
    
  }



  render() {

    const {value,increment,decrement} =this.props
    return (
      <div className="App">
            Click: {value} 
            {' '}
            <button onClick ={(e)=>increment()}>+</button>
             <button onClick ={(e)=>decrement()}>-</button>

      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    value: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return  bindActionCreators(action,dispatch)
  
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

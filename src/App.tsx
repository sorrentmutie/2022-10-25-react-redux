import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators, combineReducers } from 'redux';
import bankReducer from './state/reducers/bankReducer';
import actionCreators from './state/action-creators';
import { State } from './state';
import { creators } from './state/creators';



function App() {

  const dispatch= useDispatch(); 
  const amount = useSelector((state: State) => state.bank)
  const { depositMoney, withdrawMoney, bankrupt} =
    bindActionCreators(creators, dispatch);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(500)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;

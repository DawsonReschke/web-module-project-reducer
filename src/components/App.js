import React, { useReducer } from 'react';

import './App.css';

import reducer, { initialState } from '../reducers'
import {addOne, applyMemory, applyNumber, changeOperation, clearDisplay, clearMemory, setMemory } from '../actions';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';


function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  
  const operationClickHandler = (evt) =>{
    dispatch(changeOperation(evt.target.value))
  }

  const numberClickHandler = (evt) =>{
    dispatch(applyNumber(evt.target.value))
  }

  const useMemoryClickHandler = () => { 
    dispatch(applyMemory())
  }

  const setMemoryClickHandler = ()=>{
    dispatch(setMemory())
  }
  
  const clearMemoryClickHandler = () => {
    dispatch(clearMemory())
  }
  
  const clearTotalClickHandler = () => { 
    dispatch(clearDisplay())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={setMemoryClickHandler} value={"M+"}/>
              <CalcButton onClick={useMemoryClickHandler} value={"MR"}/>
              <CalcButton onClick={clearMemoryClickHandler} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={numberClickHandler} value={1}/>
              <CalcButton onClick={numberClickHandler} value={2}/>
              <CalcButton onClick={numberClickHandler} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={numberClickHandler} value={4}/>
              <CalcButton onClick={numberClickHandler} value={5}/>
              <CalcButton onClick={numberClickHandler} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={numberClickHandler} value={7}/>
              <CalcButton onClick={numberClickHandler} value={8}/>
              <CalcButton onClick={numberClickHandler} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={operationClickHandler} value={"+"}/>
              <CalcButton onClick={operationClickHandler} value={"*"}/>
              <CalcButton onClick={operationClickHandler} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={clearTotalClickHandler} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import {useReducer} from 'react'


const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  DELETE_DIGIT: 'delete-digit',
  CHOOSE_OPERATION:'choose-operation',
  CLEAR:'clear',
  EVALUATE:'evaluate',
}

function reducer(state,{type,payload}){
   switch(type){
     
   }
}
const App = () => {
  const [{previousOperand,currentOperand,operation} , dispatch] = useReducer(reducer,{})
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previousOperand">{previousOperand}{operation}</div>
        <div className="currentOperand">{currentOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>÷ </button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two"> = </button>
    </div>
  );
};

export default App;

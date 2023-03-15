import './App.css';
import { useState } from 'react';
import Display from './Display';
function App() {
  const [inputName, getName]=useState('');
  const [submittedName, getSubmitName]=useState([]);
  
  function DoneHandler(doneEle){
    getSubmitName((prevSubAry)=>{
    prevSubAry.forEach((ele) => {ele.itemN === doneEle && (ele.isComplete =true)})
     return [...prevSubAry]; 
   }); 
 }

  function onChangeNameHandler(event){
   getName(event.target.value);
  }
  function printNameHandler(e){
    e.preventDefault();
    getSubmitName((prevSubAry)=>{
      return [...prevSubAry, {itemN:inputName, isComplete:false}]; 
    }); 
    getName('');
  }
  function DeleteHandler(delEle){   
    getSubmitName((prevSubAry)=>{
      const newAry=prevSubAry.filter(ele => ele.itemN!== delEle)
      return newAry;
    });
  }
  
  return (
    <div className="App">
      <h2>Enter Items</h2>
      <form onSubmit={printNameHandler} className="formCls">
        <label forhtml="taskName">
          <input id="taskName" value={inputName} onChange={onChangeNameHandler}></input>
          <button>Add Item</button>
          </label>
      </form>
      <h2>List Of Items:</h2>
      {submittedName.length>0 ? <Display clsValue='withName' value={submittedName} onDone={DoneHandler} onDel={DeleteHandler}></Display> : <></>}
    </div>
  );
}

export default App;
